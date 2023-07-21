import React, {useReducer, useRef, useState} from "react";
import MultiProductFile from "../formproduct/MuliProductFile";
import MultiProductDescription from "../descriptionuploaderproduct/MultiProductDescription";
import MultiProductInformation from "../informationuploadproduct/MultiProductInformation"
import {useRouter} from "next/navigation";
import axios from "axios";
import { Toast } from 'primereact/toast';
import {getCookies} from "cookies-next";

export const FileContext = React.createContext();
export const InformationContext = React.createContext();

const initialProductInfo = {
    productName:"",
    description:"",
    weight:null,
    width:null,
    length:null,
    materialType:"",
    powerSourceType:"",
    powerSourceVoltage:null,
    productType:"",
    haveHook:false,
    price:null,
    haveFlame:false,
    totalFlames:0
}
const reducer=(state,action)=>{
    switch (action.type){
        case "SET_PRICE":
            return{
                ...state,
                price:action.value
            };
            case "SET_POWER_SOURCE_VOLTAGE":
            return{
                ...state,
                powerSourceVoltage:action.value
            };
        case "SET_PRODUCT_NAME":
            return{
                ...state,
                productName:action.value
            };
        case "SET_WIDTH":
            return{
                ...state,
                width:action.value
            };
        case "SET_LENGTH":
            return{
                ...state,
                length:action.value
            };
        case "SET_MATERIAL_TYPE":
            return{
                ...state,
                materialType:action.value
            };
        case "SET_WEIGHT":
            return{
                ...state,
                weight:action.value
            };
        case "SET_FLAME":
            return{
                ...state,
                haveFlame:action.value
            };
        case "SET_DESCRIPTION":
            return{
                ...state,
                description:action.value
            };
        case "SET_TOTAL_FLAMES":
            return{
                ...state,
                totalFlames:action.value
            };
        case "SET_POWER_SOURCE_TYPE":
            return{
                ...state,
                powerSourceType:action.value
            };
        case "SET_PRODUCT_TYPE":
            return{
                ...state,
                productType:action.value
            };
        case "SET_HOOK":
            return{
                ...state,
                haveHook:action.value
            };

    }
}
const MultiProductForm = ()=>{
    const router = useRouter();

    const [informationState,dispatch] = useReducer(reducer,initialProductInfo )

    const [disableFile , setDisableFile] = useState(false);

    const [filesInfo,setFilesInfo] = useState([]);

    const [page,setPage] = useState(0);
    const [submitBtn,setsubmitBtn] = useState(false);

    const toast = useRef(null);

    const FormTitles = ["آپلود عکس","اطلاعات محصول","توضیحات محصول"];

    const PageDisplay=()=>{
       switch (page){
           case 0: return <MultiProductFile/>
           break;
           case 1: return <MultiProductInformation/>
               break;
           case 2: return <MultiProductDescription/>
               break;
       }
    };

    const myToken = getCookies('auth');
    const fd = new FormData();
    function uploadData(){
        getAll()
        uploadImages(fd)
    }
    function  uploadImages(fd){
        console.log("show token",typeof  myToken,Object.values(myToken)[0])
        const config = {
            headers: {
                       'Access-Control-Allow-Origin': '*',
                       'content-type': 'multipart/form-data',
                       'Authorization':'Bearer '+ Object.values(myToken)[0]
            }
        }
        axios.post("http://localhost:8084/api/seller/add",fd,config)
            .then(response => {
                console.log("axios response",response)
                // let _totalSize = 0;
                // files.forEach((file) => {
                //     _totalSize += file.length || 0;
                // });
                // setTotalSize(_totalSize);
                toast.current.show({ severity: 'success', summary: response.data, detail: 'ارسال فایل',life:3000});
                setTimeout(()=>{
                    router.push("/admin/seller/table")
                },3000)
            })
            .catch(error => {
                console.log("axios error",error)
               let messages = error.response.data
                console.log("messages:",messages)
                toast.current.show({  severity: 'warn', summary:messages.message, detail: 'خطا',life: 5000 })
            });
    }
    function getAll(){
        console.log("the state",informationState)
        fd.append("productName",informationState.productName);
        fd.append("description",informationState.description);
        fd.append("weight",informationState.weight);
        fd.append("width",informationState.width);
        fd.append("length",informationState.length);
        fd.append("materialType",informationState.materialType.code);
        fd.append("powerSourceType",informationState.powerSourceType.code);
        fd.append("powerSourceVoltage",informationState.powerSourceVoltage);
        fd.append("productType",informationState.productType.code);
        fd.append("haveHook",informationState.haveHook);
        fd.append("price",informationState.price);
        fd.append("haveFlame",informationState.haveFlame);
        fd.append("totalFlames",informationState.totalFlames);

        for(let i=0;i< filesInfo.length;i++){
            fd.append("files",filesInfo[i],filesInfo[i].name);
        }
        fd.append("headerAuth",myToken);
    }
    function handleOnClickBtn(){
        if(page != 2){
            setPage(page +1)
        }else if(page){
            setPage(2)
        }
    }


    return(
        <div className={`product-form-parent`}>
            <FileContext.Provider value={[filesInfo,setFilesInfo,disableFile , setDisableFile]}>
                <InformationContext.Provider value={[informationState,dispatch]}>
                    <Toast ref={toast}></Toast>
                    <div><h2>{FormTitles[page]}</h2></div>
                    <div>{PageDisplay()}</div>
                    <div className={`grid grid-cols-3 gap-x-3`}>
                        {
                            page > 1 && <button onClick={() => setPage(page - 1)} className={`product-btn`}>قبلی</button>
                        }
                        {
                            page == 2 && <button className={`product-btn bg-green-400 text-white hover:bg-green-500 hover:delay-200 drop-shadow-xl`} onClick={uploadData}>افزودن محصول</button>
                        }
                        <button onClick={handleOnClickBtn} className={disableFile?"block product-btn":"hidden"}>بعدی</button>
                    </div>
                </InformationContext.Provider>
            </FileContext.Provider>
       </div>
    );
}
export default MultiProductForm