"use client"
import Dashboard from "@/components/dashboard-admin/Dashboard";
import Link from "next/link";
import React, {useEffect, useRef, useState} from 'react';
import { useForm, Controller } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Dropdown } from 'primereact/dropdown';
import { ProgressBar } from 'primereact/progressbar';
import { Tag } from 'primereact/tag';
import { Calendar } from 'primereact/calendar';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { InputTextarea } from 'primereact/inputtextarea';
import { classNames } from 'primereact/utils';
import { MultiSelect } from 'primereact/multiselect';
import { Editor } from 'primereact/editor';
import axios from "axios";
import {getCookie} from "cookies-next";
import {Toast} from "primereact/toast";

const Seller = () => {
    const [totalSize, setTotalSize] = useState(0);
    const fileUploadRef = useRef(null);
    const [formData, setFormData] = useState({});
    const toast = useRef(null);
    const panelsSelectItems = [
        {label: 'فیروزه ای', value: 'Firoze'},
        {label: 'طلایی', value: 'Gold'},
        {label: 'نقره ای', value: 'Silver'},
        {label: 'برنزی', value: 'Bronze'},
        {label: 'عادی', value: 'Adi'}
    ];
    const fieldTypes = [
        {name: 'لوستر بلوری', code: 'LUSTERBLURY'},
        {name: 'لوستر چوبی', code: 'LUSTERWOOD'},
        {name: 'لوستر سانتی', code: 'LUSTERSANTI'},
        {name: 'لوستر حبابی', code: 'LUSTERBOBLE'}
    ];
    const shopOwnerShip = [
        {label: 'مالکیت', value: 'مالکیت'},
        {label: 'سرقفلی', value: 'سرقفلی'},
        {label: 'اوقافی', value: 'اوقافی'},
        {label: 'استیجاری', value: 'استیجاری'}
    ];
    const orderRegister = [
        {label: 'صاحب پروانه', value: 'SAHEB_PARVANEH'},
        {label: 'مستاجر', value: 'MOSTAGER'}
    ];
    const hasMostajer = [
        {label: 'دارد', value: true},
        {label: 'ندارد', value: false}
    ];
    const mojtame = [
        {label: 'مجتمع 1', value: 'مجتمع 1'},
        {label: 'مجتمع 2', value: 'مجتمع 2'}
    ];
    const defaultValues = {
        mobile: '',
        ownerName: '',
        shopNamePersian: '',
        shopNameEnglish: '',
        ssn: '',
        panelType: 'Adi',
        ownerBirthday: '',
        about: '',
        tagdir: '',
        instagram: '',
        telegram: '',
        phone: '',
        website: '',
        email: '',
        fax: '',
        salesManagerName: '',
        salesManagerMobile: '',
        address: '',
        vageDar: '',
        postCode: '',
        metaDescription: '',
        metaKeywords: '',
        hasMalekiat: false,
        orderRegister: 'SAHEB_PARVANEH',
        hasMostager: true,
        mohlateEjare: '',
        mastajerName: '',
        mostagerBirthDay: '',
        mastajerSsn: '',
        mastajerMobile: '',
        shomarehJavaz: '',
        tarikhEtebar: '',
        hasMobasher: false,
        mobasherName: '',
        rabetName: '',
        semateRabet: '',
        rabetMobile: '',
        socialMobile: '',
        mojtame: ''
    }
    const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });
    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>
    };
    let formData1 = new FormData();
    let formData2 = new FormData();
    let formData3 = new FormData();
    let formData4 = new FormData();
    let formData5 = new FormData();

    const onSubmit = (data) => {
        console.log(data);
        setFormData(data);
        axios
            .post("http://localhost:8084/api/admin/add", data ,
                {
                    headers : {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + getCookie('auth-keycloak')
                    }
                })
            .then((response) =>
                toast.current.show({severity: 'success', summary: 'ثبت نام با موفقیت انجام شد .'})
            )
            .catch((error) => console.log(error));
    };
        const upErr = () =>{
            toast.current.show({severity: 'error', summary: 'reeeee', sticky: true});
        }

    const onTemplateUpload = (e) => {
        let _totalSize = 0;
        e.files.forEach(file => {
            _totalSize += (file.size || 0);
        });

        setTotalSize(_totalSize);
        toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    }

    const onTemplateRemove = (file, callback) => {
        setTotalSize(totalSize - file.size);
        callback();
    }

    const onTemplateClear = () => {
        setTotalSize(0);
    }

    const onBasicUpload = () => {
        toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
    }

    const onBasicUploadAuto = () => {
        toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode'});
    }
    const headerTemplate = (options) => {
        const { className, chooseButton, uploadButton, cancelButton } = options;
        const value = totalSize/10000;
        const formatedValue = fileUploadRef && fileUploadRef.current ? fileUploadRef.current.formatSize(totalSize) : '0 B';

        return (
            <div className={className} style={{backgroundColor: 'transparent', display: 'flex', alignItems: 'center'}}>
                {chooseButton}
                {uploadButton}
                {cancelButton}
                <ProgressBar value={value} displayValueTemplate={() => `${formatedValue} / 1 MB`} style={{width: '300px', height: '20px', marginLeft: 'auto'}}></ProgressBar>
            </div>
        );
    }

    const itemTemplate = (file, props) => {
        return (
            <div className="flex align-items-center flex-wrap">
                <div className="flex align-items-center" style={{width: '40%'}}>
                    <img alt={file.name} role="presentation" src={file.objectURL} width={100} />
                    <span className="flex flex-column text-left ml-3">
                        {file.name}
                        <small>{new Date().toLocaleDateString()}</small>
                    </span>
                </div>
                <Tag value={props.formatSize} severity="warning" className="px-3 py-2" />
                <Button type="button" icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger ml-auto" onClick={() => onTemplateRemove(file, props.onRemove)} />
            </div>
        )
    }

    const emptyTemplate = () => {
        return (
            <div className="flex align-items-center flex-column">
                <i className="pi pi-image mt-3 p-5" style={{'fontSize': '5em', borderRadius: '50%', backgroundColor: 'var(--surface-b)', color: 'var(--surface-d)'}}></i>
                <span style={{'fontSize': '1.2em', color: 'var(--text-color-secondary)'}} className="my-5">Drag and Drop Image Here</span>
            </div>
        )
    }
    const chooseOptions = {icon: 'pi pi-fw pi-images', iconOnly: true, className: 'custom-choose-btn p-button-rounded p-button-outlined'};
    const uploadOptions = {icon: 'pi pi-fw pi-cloud-upload', iconOnly: true, className: 'custom-upload-btn p-button-success p-button-rounded p-button-outlined'};
    const cancelOptions = {icon: 'pi pi-fw pi-times', iconOnly: true, className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined'};
    return(
        <>
            <Dashboard>
                <Toast ref={toast} />
                <form role="form text-left" onSubmit={handleSubmit(onSubmit)}>
                <section className=" container mx-auto px-10 font-bold mt-0 md:mt-20 font-vazir">
                    <div className="lg:grid lg:grid-cols-4 gap-2 md:grid md:grid-cols-2">
                        <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="mobile" className={classNames({ 'p-error': !!errors.email })}>موبایل </label>
                                <br/>
                                <Controller name="mobile" control={control}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                            {getFormErrorMessage('mobile')}
                        </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="ownerName" className={classNames({ 'p-error': !!errors.email })}>نام ونام خانوادگی صاحب واحد صنفی </label>
                                <br/>
                                <Controller name="ownerName" control={control}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                            {getFormErrorMessage('ownerName')}
                            </div>

                        <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="shopNamePersian" className={classNames({ 'p-error': !!errors.email })}>نام فروشگاه فارسی</label>
                                <br/>
                                <Controller name="shopNamePersian" control={control}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                            {getFormErrorMessage('shopNamePersian')}
                        </div>

                        <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="shopNameEnglish" className={classNames({ 'p-error': !!errors.email })}>نام فروشگاه انگلیسی </label>
                                <br/>
                                <Controller name="shopNameEnglish" control={control}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                            {getFormErrorMessage('shopNameEnglish')}
                        </div>
                    </div>
                </section>

                    <section className=" container mx-auto px-10 font-bold mt-0 md:mt-20 font-vazir">
                        <div className="lg:grid lg:grid-cols-4 gap-2 md:grid md:grid-cols-2">
                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="ssn" className={classNames({ 'p-error': !!errors.email })}>کد ملی </label>
                                <br/>
                                <Controller name="ssn" control={control}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('ssn')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="panelType" className={classNames({ 'p-error': !!errors.email })}>نوع پنل</label>
                                <br/>
                                <Controller name="panelType" control={control}
                                            render={({ field, fieldState }) => (
                                                <Dropdown id={field.name} value={field.value} options={panelsSelectItems} onChange={(e) => field.onChange(e.value)} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('panelType')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="fieldType" className={classNames({ 'p-error': !!errors.email })}>نوع فعالیت</label>
                                <br/>
                                <Controller name="fieldType" control={control}
                                            render={({ field, fieldState }) => (
                                                <InputTextarea rows={5} cols={30}  id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}} />
                                            )} />
                            </span>
                                {getFormErrorMessage('fieldType')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="ownerBirthday" className={classNames({ 'p-error': !!errors.email })}>تاریخ تولد فروشنده</label>
                                <br/>
                                <Controller name="ownerBirthday" control={control}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('ownerBirthday')}
                            </div>
                        </div>
                    </section>

                    <section className=" container mx-auto px-10 font-bold mt-0 md:mt-20 font-vazir">
                        <div className="lg:grid lg:grid-cols-1 gap-2 md:grid md:grid-cols-1">
                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="about" className={classNames({ 'p-error': !!errors.email })}>درباره ما</label>
                                <br/>
                                <Controller name="about" control={control}
                                            render={({ field, fieldState }) => (
                                                <InputTextarea rows={5} cols={30}  id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}} />
                                            )} />
                            </span>
                                {getFormErrorMessage('about')}
                            </div>
                        </div>
                    </section>

                    <section className=" container mx-auto px-10 font-bold mt-0 md:mt-20 font-vazir">
                        <div className="lg:grid lg:grid-cols-1 gap-2 md:grid md:grid-cols-1">
                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="tagdir" className={classNames({ 'p-error': !!errors.email })}>تقدیرنامه ها</label>
                                <br/>
                                <Controller name="tagdir" control={control}
                                            render={({ field, fieldState }) => (
                                                <InputTextarea rows={5} cols={30}  id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}} />
                                            )} />
                            </span>
                                {getFormErrorMessage('tagdir')}
                            </div>
                        </div>
                    </section>

                    <section className=" container mx-auto px-10 font-bold mt-0 md:mt-20 font-vazir">
                        <div className="lg:grid lg:grid-cols-4 gap-2 md:grid md:grid-cols-2">
                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="instagram" className={classNames({ 'p-error': !!errors.email })}>اینستاگرام </label>
                                <br/>
                                <Controller name="instagram" control={control}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('instagram')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="telegram" className={classNames({ 'p-error': !!errors.email })}>تلگرام</label>
                                <br/>
                                <Controller name="telegram" control={control}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>                                            )} />
                            </span>
                                {getFormErrorMessage('telegram')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="phone" className={classNames({ 'p-error': !!errors.email })}>شماره تلفن</label>
                                <br/>
                                <Controller name="phone" control={control}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>                                            )} />
                            </span>
                                {getFormErrorMessage('phone')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="website" className={classNames({ 'p-error': !!errors.email })}>وبسایت</label>
                                <br/>
                                <Controller name="website" control={control}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('website')}
                            </div>
                        </div>
                    </section>

                    <section className=" container mx-auto px-10 font-bold mt-0 md:mt-20 font-vazir">
                        <div className="lg:grid lg:grid-cols-4 gap-2 md:grid md:grid-cols-2">
                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>ایمیل </label>
                                <br/>
                                <Controller name="email" control={control}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('email')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="fax" className={classNames({ 'p-error': !!errors.email })}>فکس</label>
                                <br/>
                                <Controller name="fax" control={control}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>                                            )} />
                            </span>
                                {getFormErrorMessage('fax')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="salesManagerName" className={classNames({ 'p-error': !!errors.email })}>نام مدیر فروش</label>
                                <br/>
                                <Controller name="salesManagerName" control={control}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>                                            )} />
                            </span>
                                {getFormErrorMessage('salesManagerName')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="salesManagerMobile" className={classNames({ 'p-error': !!errors.email })}>شماره مدیر فروش</label>
                                <br/>
                                <Controller name="salesManagerMobile" control={control}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('salesManagerMobile')}
                            </div>
                        </div>
                    </section>

                    <section className=" container mx-auto px-10 font-bold mt-0 md:mt-20 font-vazir">
                        <div className="lg:grid lg:grid-cols-4 gap-2 md:grid md:grid-cols-2">
                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="address" className={classNames({ 'p-error': !!errors.email })}>آدرس </label>
                                <br/>
                                <Controller name="address" control={control}
                                            render={({ field, fieldState }) => (
                                                <InputTextarea rows={5} cols={30}  id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}} />
                                            )} />
                            </span>
                                {getFormErrorMessage('address')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="vageDar" className={classNames({ 'p-error': !!errors.email })}>واقع در</label>
                                <br/>
                                <Controller name="vageDar" control={control}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>                                            )} />
                            </span>
                                {getFormErrorMessage('vageDar')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="postCode" className={classNames({ 'p-error': !!errors.email })}>کد پستی</label>
                                <br/>
                                <Controller name="postCode" control={control}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>                                            )} />
                            </span>
                                {getFormErrorMessage('postCode')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="metaDescription" className={classNames({ 'p-error': !!errors.email })}>meta description</label>
                                <br/>
                                <Controller name="metaDescription" control={control}
                                            render={({ field, fieldState }) => (
                                                <InputTextarea rows={5} cols={30}  id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}} />
                                            )} />
                            </span>
                                {getFormErrorMessage('metaDescription')}
                            </div>
                        </div>
                    </section>

                    <section className=" container mx-auto px-10 font-bold mt-0 md:mt-20 font-vazir">
                        <div className="lg:grid lg:grid-cols-4 gap-2 md:grid md:grid-cols-2">
                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="metaKeywords" className={classNames({ 'p-error': !!errors.email })}>meta keywords </label>
                                <br/>
                                <Controller name="metaKeywords" control={control}
                                            render={({ field, fieldState }) => (
                                                <InputTextarea rows={5} cols={30}  id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}} />
                                            )} />
                            </span>
                                {getFormErrorMessage('metaKeywords')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="hasMalekiat" className={classNames({ 'p-error': !!errors.email })}>مالکیت مغازه</label>
                                <br/>
                                <Controller name="hasMalekiat" control={control}
                                            render={({ field, fieldState }) => (
                                                <Dropdown id={field.name} value={field.value} options={hasMostajer} onChange={(e) => field.onChange(e.value)} style={{width:'100%'}}/>                                          )} />
                            </span>
                                {getFormErrorMessage('hasMalekiat')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="orderRegister" className={classNames({ 'p-error': !!errors.email })}>ثبت سفارش از سوی</label>
                                <br/>
                                <Controller name="orderRegister" control={control}
                                            render={({ field, fieldState }) => (
                                                <Dropdown id={field.name} value={field.value} options={orderRegister} onChange={(e) => field.onChange(e.value)} style={{width:'100%'}}/>                                          )} />
                            </span>
                                {getFormErrorMessage('orderRegister')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="hasMostager" className={classNames({ 'p-error': !!errors.email })}>مستاجر</label>
                                <br/>
                                <Controller name="hasMostager" control={control}
                                            render={({ field, fieldState }) => (
                                                <Dropdown id={field.name} value={field.value} options={hasMostajer} onChange={(e) => field.onChange(e.value)} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('hasMostager')}
                            </div>
                        </div>
                    </section>

                    <section className=" container mx-auto px-10 font-bold mt-0 md:mt-20 font-vazir">
                        <div className="lg:grid lg:grid-cols-4 gap-2 md:grid md:grid-cols-2">
                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="mohlateEjare" className={classNames({ 'p-error': !!errors.email })}>مهلت اجاره </label>
                                <br/>
                                <Controller name="mohlateEjare" control={control}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('mohlateEjare')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="mastajerName" className={classNames({ 'p-error': !!errors.email })}>نام و نام خانوادگی مستاجر </label>
                                <br/>
                                <Controller name="mastajerName" control={control}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('mastajerName')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="mostagerBirthDay" className={classNames({ 'p-error': !!errors.email })}>تاریخ تولد مستاجر</label>
                                <br/>
                                <Controller name="mostagerBirthDay" control={control}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('mostagerBirthDay')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="mastajerSsn" className={classNames({ 'p-error': !!errors.email })}>کد ملی مستاجر </label>
                                <br/>
                                <Controller name="mastajerSsn" control={control}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('mastajerSsn')}
                            </div>
                        </div>
                    </section>

                    <section className=" container mx-auto px-10 font-bold mt-0 md:mt-20 font-vazir">
                        <div className="lg:grid lg:grid-cols-4 gap-2 md:grid md:grid-cols-2">
                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="mastajerMobile" className={classNames({ 'p-error': !!errors.email })}>موبایل مستاجر </label>
                                <br/>
                                <Controller name="mastajerMobile" control={control}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('mastajerMobile')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="shomarehJavaz" className={classNames({ 'p-error': !!errors.email })}>شماره جواز</label>
                                <br/>
                                <Controller name="shomarehJavaz" control={control}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('shomarehJavaz')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="tarikhEtebar" className={classNames({ 'p-error': !!errors.email })}>تاریخ اعتبار</label>
                                <br/>
                                <Controller name="tarikhEtebar" control={control}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('tarikhEtebar')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="hasMobasher" className={classNames({ 'p-error': !!errors.email })}>مباشر</label>
                                <br/>
                                <Controller name="hasMobasher" control={control}
                                            render={({ field, fieldState }) => (
                                                <Dropdown id={field.name} value={field.value} options={hasMostajer} onChange={(e) => field.onChange(e.value)} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('hasMobasher')}
                            </div>
                        </div>
                    </section>

                    <section className=" container mx-auto px-10 font-bold mt-0 md:mt-20 font-vazir">
                        <div className="lg:grid lg:grid-cols-4 gap-2 md:grid md:grid-cols-2">
                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="mobasherName" className={classNames({ 'p-error': !!errors.email })}>نام مباشر </label>
                                <br/>
                                <Controller name="mobasherName" control={control}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('mobasherName')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="rabetName" className={classNames({ 'p-error': !!errors.email })}>نام رابط</label>
                                <br/>
                                <Controller name="rabetName" control={control}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('rabetName')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="semateRabet" className={classNames({ 'p-error': !!errors.email })}>سمت رابط</label>
                                <br/>
                                <Controller name="semateRabet" control={control}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('semateRabet')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="rabetMobile" className={classNames({ 'p-error': !!errors.email })}>موبایل رابط </label>
                                <br/>
                                <Controller name="rabetMobile" control={control}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('rabetMobile')}
                            </div>
                        </div>
                    </section>

                    <section className=" container mx-auto px-10 font-bold mt-0 md:mt-20 font-vazir">
                        <div className="lg:grid lg:grid-cols-2 gap-2 md:grid md:grid-cols-2">
                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="socialMobile" className={classNames({ 'p-error': !!errors.email })}>موبایل شبکه مجازی</label>
                                <br/>
                                <Controller name="socialMobile" control={control}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('socialMobile')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="mojtame" className={classNames({ 'p-error': !!errors.email })}>مجتمع تجاری</label>
                                <br/>
                                <Controller name="mojtame" control={control}
                                            render={({ field, fieldState }) => (
                                                <Dropdown id={field.name} value={field.value} options={mojtame} onChange={(e) => field.onChange(e.value)} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('mojtame')}
                            </div>
                            <div>
                                <span style={{direction:"ltr"}}>
                                <label>عکس بالای صفحه</label>
                                <br/>
{/*                                 <FileUpload mode="basic" name="file" url="http://localhost:8084/api/admin/uploadImageTop" accept="image/jpeg" maxFileSize={150000} chooseLabel="Browse" auto onError={upErr} onValidationFail={upErr}/>
                                    <img src="http://localhost:8084/api/admin/imageTop"/>*/}
                                    <FileUpload ref={fileUploadRef} name="file" url="http://localhost:8084/api/admin/uploadImageTop" accept="image/jpeg" maxFileSize={150000} chooseLabel="Browse" onError={upErr} onValidationFail={upErr}
                                                onUpload={onTemplateUpload} onError={onTemplateClear} onClear={onTemplateClear}
                                                headerTemplate={headerTemplate} itemTemplate={itemTemplate} emptyTemplate={emptyTemplate}
                                                chooseOptions={chooseOptions} uploadOptions={uploadOptions} cancelOptions={cancelOptions} />
                            </span>
                            </div>
                        </div>
                    </section>

                    <section className=" container mx-auto px-10 font-bold mt-0 md:mt-20 font-vazir">
                        <div className="lg:grid lg:grid-cols-4 gap-2 md:grid md:grid-cols-2">
                            <div>
                                <span style={{direction:"ltr"}}>
                                <label>عکس دوم </label>
                                <br/>
                                                                        <FileUpload ref={fileUploadRef} name="file" url="http://localhost:8084/api/admin/uploadImageTop2" accept="image/jpeg" maxFileSize={150000} chooseLabel="Browse" onError={upErr} onValidationFail={upErr}
                                                                                    onUpload={onTemplateUpload} onError={onTemplateClear} onClear={onTemplateClear}
                                                                                    headerTemplate={headerTemplate} itemTemplate={itemTemplate} emptyTemplate={emptyTemplate}
                                                                                    chooseOptions={chooseOptions} uploadOptions={uploadOptions} cancelOptions={cancelOptions} />
                            </span>
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label>عکس لوگو</label>
                                <br/>
                             <FileUpload ref={fileUploadRef} name="file" url="http://localhost:8084/api/admin/uploadImageLogo" accept="image/jpeg" maxFileSize={150000} chooseLabel="Browse" onError={upErr} onValidationFail={upErr}
                                         onUpload={onTemplateUpload} onError={onTemplateClear} onClear={onTemplateClear}
                                         headerTemplate={headerTemplate} itemTemplate={itemTemplate} emptyTemplate={emptyTemplate}
                                         chooseOptions={chooseOptions} uploadOptions={uploadOptions} cancelOptions={cancelOptions} />
                            </span>
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label>عکس درباره ما</label>
                                <br/>
                                                                 <FileUpload ref={fileUploadRef} name="file" url="http://localhost:8084/api/admin/uploadImageAbout" accept="image/jpeg" maxFileSize={150000} chooseLabel="Browse" onError={upErr} onValidationFail={upErr}
                                                                             onUpload={onTemplateUpload} onError={onTemplateClear} onClear={onTemplateClear}
                                                                             headerTemplate={headerTemplate} itemTemplate={itemTemplate} emptyTemplate={emptyTemplate}
                                                                             chooseOptions={chooseOptions} uploadOptions={uploadOptions} cancelOptions={cancelOptions} />
                            </span>
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label>عکس گواهینامه </label>
                                <br/>
                                       <FileUpload ref={fileUploadRef} name="file" url="http://localhost:8084/api/admin/uploadImageGovahi" accept="image/jpeg" maxFileSize={150000} chooseLabel="Browse" onError={upErr} onValidationFail={upErr}
                                                   onUpload={onTemplateUpload} onError={onTemplateClear} onClear={onTemplateClear}
                                                   headerTemplate={headerTemplate} itemTemplate={itemTemplate} emptyTemplate={emptyTemplate}
                                                   chooseOptions={chooseOptions} uploadOptions={uploadOptions} cancelOptions={cancelOptions} />
                            </span>
                            </div>
                        </div>
                    </section>
                    <div className="text-center">
                        <Button type="submit" label="ثبت نام" className="p-button-outlined p-button-success"  style={{width:'100%'}}/>
                    </div>
                </form>
            </Dashboard>
        </>
    )
}
export default Seller;