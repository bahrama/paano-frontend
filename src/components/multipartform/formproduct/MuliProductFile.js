import React, {useEffect, useRef, useState} from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { ProgressBar } from 'primereact/progressbar';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { Tag } from 'primereact/tag';
import axios from "axios";
const MuliProductFile = ({url})=>{
    const toast = useRef(null);
    const [totalSize, setTotalSize] = useState(0);
    const fileUploadRef = useRef(null);

    const onTemplateSelect = (e) => {
        let _totalSize = totalSize;
        let files = e.files;

        Object.keys(files).forEach((key) => {
            _totalSize += files[key].size || 0;
        });

        setTotalSize(_totalSize);
    };

    const onTemplateRemove = (file, callback) => {
        setTotalSize(totalSize - file.size);
        callback();
    };

    const onTemplateClear = () => {
        setTotalSize(0);
    };

    const headerTemplate = (options) => {
        const { className, chooseButton, uploadButton, cancelButton } = options;
        const value = totalSize / 800;
        const formatedValue = fileUploadRef && fileUploadRef.current ? fileUploadRef.current.formatSize(totalSize) : '0 B';

        return (
            <div className={className} style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center' }}>
                {chooseButton}
                {uploadButton}
                {cancelButton}
                <div className="flex align-items-center gap-3 ml-auto bg-red-200">
                    <span className={``}>{formatedValue} / 800 KB</span>
                    <ProgressBar value={value} showValue={false} style={{ width: '10rem', height: '12px' }}></ProgressBar>
                </div>
            </div>
        );
    };

    const itemTemplate = (file, props) => {
        return (
            <div className="flex align-items-center flex-wrap">
                <div className="flex align-items-center" style={{ width: '40%' }}>
                    <img alt={file.name} role="presentation" src={file.objectURL} width={100} />
                    <span className="flex flex-column text-left ml-3">
                        {file.name}
                        <small>{new Date().toLocaleDateString()}</small>
                    </span>
                </div>
                <Tag value={props.formatSize} severity="warning" className="px-3 py-2" />
                <Button type="button" icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger ml-auto" onClick={() => onTemplateRemove(file, props.onRemove)} />
            </div>
        );
    };

    const emptyTemplate = () => {
        return (
            <div className="flex align-items-center flex-column">
                <i className="pi pi-image mt-3 p-5" style={{ fontSize: '5em', borderRadius: '50%', backgroundColor: 'var(--surface-b)', color: 'var(--surface-d)' }}></i>
                <span style={{ fontSize: '1.2em', color: 'var(--text-color-secondary)' }} className="my-5">
                    Drag and Drop Image Here
                </span>
            </div>
        );
    };
    const chooseOptions = { icon: 'pi pi-fw pi-images', iconOnly: true, className: 'custom-choose-btn p-button-rounded p-button-outlined' };
    const uploadOptions = { icon: 'pi pi-fw pi-cloud-upload', iconOnly: true, className: 'custom-upload-btn p-button-success p-button-rounded p-button-outlined' };
    const cancelOptions = { icon: 'pi pi-fw pi-times', iconOnly: true, className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined' };
    const files = [];
    const fd = new FormData();
    function  uploadImages(fd){
        axios.post("http://localhost:8084/api/seller/upload/allimages",fd)
            .then(response => {
                    let _totalSize = 0;
                    files.forEach((file) => {
                        _totalSize += file.length || 0;
                    });
                    setTotalSize(_totalSize);
                    toast.current.show({ severity: 'info', summary: response.data, detail: 'ارسال فایل' });
            })
            .catch(error => console.log("axios error",error));
    }
    function getAll(){
        console.log("inside files",files.length);
        for(let i=0;i< files.length;i++){
            let fName = files[i].name;
            if(fName.slice((fName.lastIndexOf(".")-1 >>> 0)+2) === "png"){
                fd.append("files",files[i],files[i].name);
            }else if (fName.slice((fName.lastIndexOf(".")-1 >>> 0)+2) === "jpg"){
                fd.append("files",files[i],files[i].name);
            }else if(fName.slice((fName.lastIndexOf(".")-1 >>> 0)+2) === "jpeg"){
                fd.append("files",files[i],files[i].name);
            }
                setTotalSize(0);
                toast.current.show({ severity:'error', summary:`${fName.slice((fName.lastIndexOf(".")-1 >>> 0)+2)}فرمت عکس نمی باشد.`, detail: 'خطا در ارسال فایل' });

        }
    }
    return(
        <React.Fragment>
            <Toast ref={toast}></Toast>
            <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
            <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
            <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />
            <FileUpload ref={fileUploadRef}
                        multiple
                        onClear={onTemplateClear}
                        onUpload={()=>console.log("On upload",fileUploadRef.current.getFiles())}
                        onError={()=>console.log("On error",fileUploadRef.current.getFiles())}
                        cancelOptions={cancelOptions}
                        uploadOptions={uploadOptions}
                        chooseOptions={chooseOptions}
                        onBeforeUpload={()=>{
                            const uploadedFiles = fileUploadRef.current.getFiles();
                            uploadedFiles.forEach((file) => {
                                files.push(file);
                            });
                             getAll();
                        }}
                        headerTemplate={headerTemplate}
                        onProgress={()=>uploadImages(fd)}
            />
        </React.Fragment>
    )
}
export default MuliProductFile