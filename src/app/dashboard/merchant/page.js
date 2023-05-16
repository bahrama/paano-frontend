"use client"
import CustomGrid from "@/components/customGrid/CustomGrid";
import Dashboard from "@/components/dashboard-user/Dashboard";
import {useRef, useState} from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from "primereact/inputtext";
import { MultiSelect } from 'primereact/multiselect';
import { ListBox } from 'primereact/listbox';
import { Calendar } from 'primereact/calendar';
import { Panel } from 'primereact/panel';
import { Ripple } from 'primereact/ripple';
import { FileUpload } from 'primereact/fileupload';
const Merchant = () =>{
    const toast = useRef(null);
    const [selectedPlan,setPlan] = useState(null);
    const [selectedOccupation,setOccupation] = useState(null);
    const [selectedHouseNow,setHouseNow] = useState(null);
    const [answer,setAnswer] = useState('');
    const plans = [
        { name: 'فیروزه ای', code: 'Turquoise' },
        { name: 'طلایی', code: 'Gold' },
        { name: 'نقره ای', code: 'ُSilver' },
        { name: 'برنزی', code: 'Bronze' },
        { name: 'عادی', code: 'Normal' }
    ]

    const malls = [
        {name:'بازار مبل خلیج فارس',code:'A1'},
        {name:'بازار مبل ونوس',code:'A2'},
        {name:'بازار مبل کاسپین',code:'A3'},
        {name:'بازار مبل پاسارگاد',code:'A3'},
        {name:'بازار مبل پاسارگاد',code:'A3'},
        {name:'بازار مبل نگارستان',code:'A3'},
    ]

    const templateDropDownMenu = (options) => {
        const toggleIcon = options.collapsed ? 'pi pi-chevron-down' : 'pi pi-chevron-up';
        const className = `${options.className} justify-content-start`;
        const titleClassName = `${options.titleClassName} ml-2 text-primary`;
        const style = { fontSize: '1.25rem' };

        return (
            <div className={className}>
                <button className={options.togglerClassName} onClick={options.onTogglerClick}>
                    <span className={toggleIcon}></span>
                    <Ripple />
                </button>
                <span className={titleClassName} style={style}>آپلود عکس</span>
            </div>
        );
    };

    const question = [
        {name:'بله', code:'Y'},
        {name: 'خیر', code:'N'}
    ]
    const occupation=[
        {name:'مبلمان راحتی',code:'a'},
        {name:'مبلمان کلاسیک',code:'b'},
        {name:'مبلمان استیل',code:'c'},
        {name:'مبلمان فضای باز',code:'d'},
        {name:'مبلمان مدرن',code:'e'},
        {name:'مبلمان تخت شو',code:'f'},
        {name:'سرویس خواب',code:'g'},
        {name:'ناهار خوری',code:'h'},
        {name:'میز تلویزیون',code:'i'},
        {name:'آینه و کنسول',code:'j'},
        {name:'عسلی میز یا میل جلو میز',code:'k'},
        {name:'میز اداری',code:'l'},
        {name:'صندلی اداری',code:'m'},
        {name:'پارتیشن',code:'n'},
        {name:'سیسمونی',code:'o'},
        {name:'کابینت',code:'p'},
        {name:'دکوراسیون تخصیصی',code:'q'},
    ]

    const ProductService = [
        {
            id: '1000',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
        {
            id: '1000',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: '666666666-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
        {
            id: '1000',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'ttttttttttt-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: 'INSTOCK',
            rating: 5
        }
    ];
    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: getValues('value') });
    };

    const defaultValues = {
        value: ''
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        getValues,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        data.value && show();

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };
    return(
        <>

            <Dashboard>
                <section className={`container mx-auto`}>
                    <div className="container">
                        <CustomGrid dataGrd = {ProductService}/>
                    </div>
                    <div className="container">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Toast ref={toast} />
                            <div className={`grid grid-cols-1 grid-rows-1  md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-2`}>
                                <div className={`grid grid-cols-1 `}>
                                    <Controller name="nameAndLastName" control={control} rules={{ required: 'این اسم تکراری است.' }} render={({ field, fieldState }) => (
                                        <>
                                            <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                            <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={`relative`+classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name} className={`absolute right-1 text-sm`}>نام ونام خانوادگی صاحب واحد صنفی</label>
                                            </span>
                                            {getFormErrorMessage(field.name)}
                                        </>
                                    )}
                                    />
                                    <Controller
                                        name="shopNamePer"
                                        control={control}
                                        rules={{ required: 'نام فروشگاه تکراری است!' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={`relative`+classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name} className={`absolute right-1`}>نام فروشگاه فارسی</label>
                                            </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                    <Controller
                                        name="shopNameEng"
                                        control={control}
                                        rules={{ required: 'نام فروشگاه تکراری است!' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={`relative`+classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name} className={`absolute right-1`}>نام فروشگاه به انگلیسی</label>
                                            </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                    <Controller
                                        name="personalId"
                                        control={control}
                                        rules={{ required: 'کد ملی وارد شده صحیح نیست یا تکراری است.' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={`relative`+classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name} className={`absolute right-1`}>کد ملی</label>
                                            </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                </div>
                                <div className={``}>
                                    <Controller
                                        name="phoneNumber"
                                        control={control}
                                        rules={{ required: 'شماره تلفن وارد شده تکراری است!' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={`relative`+classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name} className={`absolute right-1`}>تلفن همراه</label>
                                            </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                    <Controller
                                        name="planType"
                                        control={control}
                                        rules={{ required: 'لطفا یک مورد را انتخواب کنید.' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="p-float-label">
                                                {/*<InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />*/}
                                                    <Dropdown
                                                        value={field.name=selectedPlan}
                                                        className={`relative w-[210px]`+classNames({'p-invalid':fieldState.error})}
                                                        onChange={(e)=>setPlan(e.value)} options={plans} optionLabel="name" />
                                                 <label htmlFor={field.name} className={`absolute right-0`}>نوع پنل</label>
                                            </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                    <Controller
                                        name="occupation"
                                        control={control}
                                        rules={{ required: 'یک مورد از رسته ها را انتخواب کنید.' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="p-float-label">
                                                {/*<InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />*/}
                                                    <MultiSelect
                                                        filter
                                                        className={`relative`+classNames({'p-error':errors.value})}
                                                        value={field.name=selectedOccupation}
                                                        maxSelectedLabels={4}
                                                        onChange={(e)=>setOccupation(e.value)}
                                                        options={occupation}
                                                        optionLabel="name"
                                                        placeholder="رسته شغلی انتخواب کنید"/>
                                                <label htmlFor={field.name} className={`absolute right-1`}>رسته شغلی</label>
                                            </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                    <Controller
                                        name="post"
                                        control={control}
                                        rules={{ required: 'کد پستی وارده صحیح نمی باشد.' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={`relative`+classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name} className={`absolute right-1`}>کد پستی</label>
                                            </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                </div>
                                <div className={`grid grid-cols-1`}>
                                    <Controller
                                        name="address"
                                        control={control}
                                        rules={{ required: 'این بخش تکمیل شود.' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={`relative`+classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name} className={`absolute right-1`}>آدرس</label>
                                            </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                    <Controller
                                        name="value"
                                        control={control}
                                        rules={{ required: 'این بخش باید کامل باشد.' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="relative">
                                                     <ListBox
                                                         value={selectedHouseNow}
                                                         onChange={(e) => setHouseNow(e.value)}
                                                         options={
                                                             [
                                                                 {name:"دارنده پروانه کسب",code:"c0"},
                                                                 {name:"مستجر",code:"c1"},
                                                             ]}
                                                         optionLabel="name"
                                                         className="w-[200px]" />
                                                    <label htmlFor={field.name} className={`absolute top-0 right-1 w-[200px]`}>ثبت سفارش از سوی</label>
                                                 </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                    <Controller
                                        name="value"
                                        control={control}
                                        rules={{ required: 'لطفا این بخش تکمیل شود.' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="p-float-label">
                                                  <InputText id={field.name} value={field.value} className={`relative mx-auto`+classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                  <label htmlFor={field.name} className={`absolute right-1`}>مالکیت سر قفلی</label>
                                                </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                </div>
                                <div className={``}>
                                    <Controller name="nameAndLastName" control={control} rules={{ required: 'این اسم تکراری است.' }} render={({ field, fieldState }) => (
                                        <>
                                            <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                            <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={`relative`+classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name} className={`absolute right-1 text-sm`}>نام مستجر</label>
                                            </span>
                                            {getFormErrorMessage(field.name)}
                                        </>
                                    )}
                                    />
                                    <Controller
                                        name="shopNamePer"
                                        control={control}
                                        rules={{ required: 'نام فروشگاه تکراری است!' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={`relative`+classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name} className={`absolute right-1`}>نام خانوادگی مستجر</label>
                                            </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                    <Controller
                                        name="shopNameEng"
                                        control={control}
                                        rules={{ required: 'نام فروشگاه تکراری است!' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="p-float-label">
                                                <Calendar id={field.name} value={field.value} className={`relative`+classNames({ 'p-invalid': fieldState.error })} onChange={(e) => filed.onChange(e.target.value)} />
                                                <label htmlFor={field.name} className={`absolute right-1`}>تاریخ تولد مستجر</label>
                                            </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                    <Controller
                                        name="personalId"
                                        control={control}
                                        rules={{ required: 'کد ملی وارد شده صحیح نیست یا تکراری است.' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={`relative`+classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name} className={`absolute right-1`}>کد ملی مستجر</label>
                                            </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                </div>
                                <div className={``}>
                                    <Controller
                                        name="personalId"
                                        control={control}
                                        rules={{ required: 'تلفن همراه وارد شده صحیح نیست یا تکراری است.' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={`relative`+classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name} className={`absolute right-1`}>تلفن همراه مستجر</label>
                                            </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                    <Controller
                                        name="personalId"
                                        control={control}
                                        rules={{ required: 'تلفن همراه وارد شده صحیح نیست یا تکراری است.' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={`relative`+classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name} className={`absolute right-1`}>شماره جواز</label>
                                            </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                    <Controller
                                        name="shopNameEng"
                                        control={control}
                                        rules={{ required: 'این تاریخ معتبر نمی باشد !' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="p-float-label">
                                                <Calendar id={field.name} value={field.value} className={`relative`+classNames({ 'p-invalid': fieldState.error })} onChange={(e) => filed.onChange(e.target.value)} />
                                                <label htmlFor={field.name} className={`absolute right-1`}>تاریخ معتبر جواز</label>
                                            </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                    <Controller
                                        name="planType"
                                        control={control}
                                        rules={{ required: 'لطفا یک مورد را انتخواب کنید.' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="p-float-label">
                                                {/*<InputText id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />*/}
                                                    <Dropdown
                                                        value={field.name=answer}
                                                        className={`relative w-[210px]`+classNames({'p-invalid':fieldState.error})}
                                                        onChange={(e)=>setAnswer(e.value)} options={question}  optionLabel="name" />
                                                 <label htmlFor={field.name} className={`absolute right-0`}>مباشر</label>
                                            </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                </div>
                                <div className={``}>
                                    <Controller
                                        name="personalId"
                                        control={control}
                                        rules={{ required: 'تلفن همراه وارد شده صحیح نیست یا تکراری است.' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={`relative`+classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name} className={`absolute right-1`}>نام مباشر</label>
                                            </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                    <Controller
                                        name="personalId"
                                        control={control}
                                        rules={{ required: 'تلفن همراه وارد شده صحیح نیست یا تکراری است.' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={`relative`+classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name} className={`absolute right-1`}>نام رابط</label>
                                            </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                    <Controller
                                        name="personalId"
                                        control={control}
                                        rules={{ required: 'تلفن همراه وارد شده صحیح نیست یا تکراری است.' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={`relative`+classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name} className={`absolute right-1`}>سمت رابط</label>
                                            </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                    <Controller
                                        name="personalId"
                                        control={control}
                                        rules={{ required: 'تلفن همراه وارد شده صحیح نیست یا تکراری است.' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={`relative`+classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name} className={`absolute right-1`}>موبایل رابط</label>
                                            </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                </div>
                                <div className={``}>
                                    <Controller
                                        name="personalId"
                                        control={control}
                                        rules={{ required: 'تلفن همراه وارد شده صحیح نیست یا تکراری است.' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={`relative`+classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name} className={`absolute right-1`}> شماره شبکه های مجازی</label>
                                            </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                    <Controller
                                        name="personalId"
                                        control={control}
                                        rules={{ required: 'تلفن همراه وارد شده صحیح نیست یا تکراری است.' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={`relative`+classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name} className={`absolute right-1`}> شماره شبکه های مجازی</label>
                                            </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                    <Controller
                                        name="personalId"
                                        control={control}
                                        rules={{ required: 'تلفن همراه وارد شده صحیح نیست یا تکراری است.' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={`relative`+classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name} className={`absolute right-1`}> شماره شبکه های مجازی</label>
                                            </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                    <Controller
                                        name="personalId"
                                        control={control}
                                        rules={{ required: 'تلفن همراه وارد شده صحیح نیست یا تکراری است.' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={`relative`+classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name} className={`absolute right-1`}> شماره شبکه های مجازی</label>
                                            </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                </div>
                                <div className={``}>
                                    <Controller
                                        name="personalId"
                                        control={control}
                                        rules={{ required: 'تلفن همراه وارد شده صحیح نیست یا تکراری است.' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={`relative`+classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name} className={`absolute right-1`}>تلگرام</label>
                                            </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                    <Controller
                                        name="personalId"
                                        control={control}
                                        rules={{ required: 'تلفن همراه وارد شده صحیح نیست یا تکراری است.' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={`relative`+classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name} className={`absolute right-1`}>اینستاگرام</label>
                                            </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                    <Controller
                                        name="personalId"
                                        control={control}
                                        rules={{ required: 'تلفن همراه وارد شده صحیح نیست یا تکراری است.' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={`relative`+classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name} className={`absolute right-1`}>وب سایت</label>
                                            </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                    <Controller
                                        name="personalId"
                                        control={control}
                                        rules={{ required: 'تلفن همراه وارد شده صحیح نیست یا تکراری است.' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={`relative`+classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name} className={`absolute right-1`}>ایتا</label>
                                            </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                </div>
                                <div className={`col-span-4 bg-red-200`}>
                                    <Panel headerTemplate={templateDropDownMenu} toggleable>
                                        <FileUpload name="demo[]" url={'/api/upload'}  multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
                                    </Panel>
                                </div>
                            </div>
                            <Button label="ذخیره" type="submit" icon="pi pi-check"severity="success"/>
                        </form>
                    </div>
                </section>
            </Dashboard>

            </>
    )
}
export default Merchant;