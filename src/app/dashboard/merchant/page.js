"use client"
import CustomGrid from "@/components/customGrid/CustomGrid";
import Dashboard from "@/components/dashboard/Dashboard";
import {useRef, useState} from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from "primereact/inputtext";
import { MultiSelect } from 'primereact/multiselect';
import { ListBox } from 'primereact/listbox';
import {Panel} from "primereact/panel";
const Merchant = () =>{
    const toast = useRef(null);
    const [selectedPlan,setPlan] = useState(null);
    const [selectedOccupation,setOccupation] = useState(null);
    const [selectedHouseNow,setHouseNow] = useState(null);
    const plans = [
        { name: 'فیروزه ای', code: 'Turquoise' },
        { name: 'طلایی', code: 'Gold' },
        { name: 'نقره ای', code: 'ُSilver' },
        { name: 'برنزی', code: 'Bronze' },
        { name: 'عادی', code: 'Normal' }
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
                <div className="container">
                 <CustomGrid dataGrd = {ProductService}/>
                </div>
                <div className="container">
                    <section className=" container  mx-auto px-10  mt-0 md:mt-20 font-vazir">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Toast ref={toast} />
                        <div className="lg:grid lg:grid-cols-4 gap-2 md:grid md:grid-cols-2">
                            <div>
                            <Controller
                                name="nameAndLastName"
                                control={control}
                                rules={{ required: 'این اسم تکراری است.' }}
                                render={({ field, fieldState }) => (
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
                            </div>
                            <div>
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
                            </div>
                            <div>
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
                            </div>
                            <div>
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
                        </div>
                            <div className="lg:grid lg:grid-cols-3 gap-2 md:grid md:grid-cols-2">
                                <div>
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
                                </div>
                                <div>
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
                                </div>
                                <div>
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
                                </div>
                            </div>
                            <div className="lg:grid lg:grid-cols-4 gap-2 md:grid md:grid-cols-2">
                                <div>
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
                                <div>
                                    <Controller
                                        name="address"
                                        control={control}
                                        rules={{ required: 'این بخش تکمیل شود.' }}
                                        render={({ field, fieldState }) => (
                                            <>
                                                <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={`relative w-[300px]`+classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name} className={`absolute right-1`}>آدرس</label>
                                            </span>
                                                {getFormErrorMessage(field.name)}
                                            </>
                                        )}
                                    />
                                </div>
                                <div>
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
                                </div>
                                <div>
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
                            </div>
                            {/*Dropdown panel */}

                            <Panel header="فرم طلاعات مسکونی" toggleable className={`w-[100%] bg-red-200`}>
                                <div className="lg:grid lg:grid-cols-4 gap-2 md:grid md:grid-cols-2">
                                    <div>
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
                                    <div>
                                        <Controller
                                            name="address"
                                            control={control}
                                            rules={{ required: 'این بخش تکمیل شود.' }}
                                            render={({ field, fieldState }) => (
                                                <>
                                                    <label htmlFor={field.name} className={classNames({ 'p-error': errors.value })}></label>
                                                    <span className="p-float-label">
                                                <InputText id={field.name} value={field.value} className={`relative w-[300px]`+classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                                <label htmlFor={field.name} className={`absolute right-1`}>آدرس</label>
                                            </span>
                                                    {getFormErrorMessage(field.name)}
                                                </>
                                            )}
                                        />
                                    </div>
                                    <div>
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
                                    </div>
                                    <div>
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
                                </div>
                            </Panel>
                            <Button label="ذخیره" type="submit" icon="pi pi-check"/>
                        </form>
                    </section>
                </div>
            </Dashboard>

            </>
    )
}
export default Merchant;