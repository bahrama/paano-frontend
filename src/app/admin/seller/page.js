"use client"
import Dashboard from "@/components/dashboard-admin/Dashboard";
import Link from "next/link";
import React, {useEffect, useRef, useState} from 'react';
import { useForm, Controller } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { InputTextarea } from 'primereact/inputtextarea';
import { classNames } from 'primereact/utils';
import { MultiSelect } from 'primereact/multiselect';
import { Editor } from 'primereact/editor';

const Seller = () => {
    const toast = useRef(null);
    const panelsSelectItems = [
        {label: 'فیروزه ای', value: 'فیروزه ای'},
        {label: 'طلایی', value: 'طلایی'},
        {label: 'نقره ای', value: 'نقره ای'},
        {label: 'برنزی', value: 'برنزی'},
        {label: 'عادی', value: 'عادی'}
    ];
    const fieldTypes = [
        {name: 'لوستر بلوری', code: 'لوستر بلوری'},
        {name: 'لوستر پوسته ای', code: 'لوستر پوسته ای'},
        {name: 'لوستر سانتی', code: 'لوستر سانتی'},
        {name: 'لوستر حبابی', code: 'لوستر حبابی'},
        {name: 'تک شعله', code: 'تک شعله'},
        {name: 'چراغ های باغی', code: 'چراغ های باغی'}
    ];
    const shopOwnerShip = [
        {label: 'مالکیت', value: 'مالکیت'},
        {label: 'سرقفلی', value: 'سرقفلی'},
        {label: 'اوقافی', value: 'اوقافی'},
        {label: 'استیجاری', value: 'استیجاری'}
    ];
    const orderRegister = [
        {label: 'صاحب پروانه', value: 'صاحب پروانه'},
        {label: 'مستاجر', value: 'مستاجر'}
    ];
    const hasMostajer = [
        {label: 'دارد', value: 'دارد'},
        {label: 'ندارد', value: 'ندارد'}
    ];
    const mojtame = [
        {label: 'مجتمع 1', value: 'مجتمع 1'},
        {label: 'مجتمع 2', value: 'مجتمع 2'}
    ];
    const defaultValues = {
        email: '',
        password: ''
    }
    const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });
    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>
    };


    return(
        <>
            <Dashboard>
                <form role="form text-left">
                <section className=" container mx-auto px-10 font-bold mt-0 md:mt-20 font-vazir">
                    <div className="lg:grid lg:grid-cols-4 gap-2 md:grid md:grid-cols-2">
                        <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>موبایل </label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                            {getFormErrorMessage('email')}
                        </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>نام ونام خانوادگی صاحب واحد صنفی </label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                            {getFormErrorMessage('email')}
                            </div>

                        <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>نام فروشگاه فارسی</label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                            {getFormErrorMessage('email')}
                        </div>

                        <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>نام فروشگاه انگلیسی </label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                            {getFormErrorMessage('email')}
                        </div>
                    </div>
                </section>

                    <section className=" container mx-auto px-10 font-bold mt-0 md:mt-20 font-vazir">
                        <div className="lg:grid lg:grid-cols-4 gap-2 md:grid md:grid-cols-2">
                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>کد ملی </label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('email')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>نوع پنل</label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <Dropdown id={field.name} value={field.value} options={panelsSelectItems} onChange={(e) => field.onChange(e.value)} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('email')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>نوع فعالیت</label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <MultiSelect optionLabel="name" optionValue="code" id={field.name} value={field.value} options={fieldTypes} onChange={(e) => field.onChange(e.value)} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('email')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>تاریخ تولد فروشنده</label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('email')}
                            </div>
                        </div>
                    </section>

                    <section className=" container mx-auto px-10 font-bold mt-0 md:mt-20 font-vazir">
                        <div className="lg:grid lg:grid-cols-1 gap-2 md:grid md:grid-cols-1">
                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>درباره ما</label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <Editor style={{height:'320px'}} id={field.name} value={field.value} onTextChange={(e) => field.onTextChange(field.value)} />
                                            )} />
                            </span>
                                {getFormErrorMessage('email')}
                            </div>
                        </div>
                    </section>

                    <section className=" container mx-auto px-10 font-bold mt-0 md:mt-20 font-vazir">
                        <div className="lg:grid lg:grid-cols-1 gap-2 md:grid md:grid-cols-1">
                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>تقدیرنامه ها</label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <Editor style={{height:'320px'}} id={field.name} value={field.value} onTextChange={(e) => field.onTextChange(field.value)} />
                                            )} />
                            </span>
                                {getFormErrorMessage('email')}
                            </div>
                        </div>
                    </section>

                    <section className=" container mx-auto px-10 font-bold mt-0 md:mt-20 font-vazir">
                        <div className="lg:grid lg:grid-cols-4 gap-2 md:grid md:grid-cols-2">
                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>اینستاگرام </label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('email')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>تلگرام</label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>                                            )} />
                            </span>
                                {getFormErrorMessage('email')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>شماره تلفن</label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>                                            )} />
                            </span>
                                {getFormErrorMessage('email')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>وبسایت</label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('email')}
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
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('email')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>فکس</label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>                                            )} />
                            </span>
                                {getFormErrorMessage('email')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>نام مدیر فروش</label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>                                            )} />
                            </span>
                                {getFormErrorMessage('email')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>شماره مدیر فروش</label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('email')}
                            </div>
                        </div>
                    </section>

                    <section className=" container mx-auto px-10 font-bold mt-0 md:mt-20 font-vazir">
                        <div className="lg:grid lg:grid-cols-4 gap-2 md:grid md:grid-cols-2">
                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>آدرس </label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <InputTextarea rows={5} cols={30}  id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}} />
                                            )} />
                            </span>
                                {getFormErrorMessage('email')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>واقع در</label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>                                            )} />
                            </span>
                                {getFormErrorMessage('email')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>کد پستی</label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>                                            )} />
                            </span>
                                {getFormErrorMessage('email')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>meta description</label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <InputTextarea rows={5} cols={30}  id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}} />
                                            )} />
                            </span>
                                {getFormErrorMessage('email')}
                            </div>
                        </div>
                    </section>

                    <section className=" container mx-auto px-10 font-bold mt-0 md:mt-20 font-vazir">
                        <div className="lg:grid lg:grid-cols-4 gap-2 md:grid md:grid-cols-2">
                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>meta keywords </label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <InputTextarea rows={5} cols={30}  id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}} />
                                            )} />
                            </span>
                                {getFormErrorMessage('email')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>مالکیت مغازه</label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <Dropdown id={field.name} value={field.value} options={shopOwnerShip} onChange={(e) => field.onChange(e.value)} style={{width:'100%'}}/>                                          )} />
                            </span>
                                {getFormErrorMessage('email')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>ثبت سفارش از سوی</label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <Dropdown id={field.name} value={field.value} options={orderRegister} onChange={(e) => field.onChange(e.value)} style={{width:'100%'}}/>                                          )} />
                            </span>
                                {getFormErrorMessage('email')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>مستاجر</label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <Dropdown id={field.name} value={field.value} options={hasMostajer} onChange={(e) => field.onChange(e.value)} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('email')}
                            </div>
                        </div>
                    </section>

                    <section className=" container mx-auto px-10 font-bold mt-0 md:mt-20 font-vazir">
                        <div className="lg:grid lg:grid-cols-4 gap-2 md:grid md:grid-cols-2">
                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>مهلت اجاره </label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('email')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>نام و نام خانوادگی مستاجر </label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('email')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>تاریخ تولد مستاجر</label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('email')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>کد ملی مستاجر </label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('email')}
                            </div>
                        </div>
                    </section>

                    <section className=" container mx-auto px-10 font-bold mt-0 md:mt-20 font-vazir">
                        <div className="lg:grid lg:grid-cols-4 gap-2 md:grid md:grid-cols-2">
                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>موبایل مستاجر </label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('email')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>شماره جواز</label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('email')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>تاریخ اعتبار</label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('email')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>مباشر</label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <Dropdown id={field.name} value={field.value} options={hasMostajer} onChange={(e) => field.onChange(e.value)} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('email')}
                            </div>
                        </div>
                    </section>

                    <section className=" container mx-auto px-10 font-bold mt-0 md:mt-20 font-vazir">
                        <div className="lg:grid lg:grid-cols-4 gap-2 md:grid md:grid-cols-2">
                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>نام مباشر </label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('email')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>نام رابط</label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('email')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>سمت رابط</label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('email')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>موبایل رابط </label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('email')}
                            </div>
                        </div>
                    </section>

                    <section className=" container mx-auto px-10 font-bold mt-0 md:mt-20 font-vazir">
                        <div className="lg:grid lg:grid-cols-2 gap-2 md:grid md:grid-cols-2">
                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>موبایل شبکه مجازی</label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <InputText id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('email')}
                            </div>

                            <div>
                                <span style={{direction:"ltr"}}>
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>مجتمع تجاری</label>
                                <br/>
                                <Controller name="email" control={control}
                                            rules={{ required: 'ایمیل را وارد نمایید', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'فرمت ایمیل صحیح نمی باشد' }}}
                                            render={({ field, fieldState }) => (
                                                <Dropdown id={field.name} value={field.value} options={mojtame} onChange={(e) => field.onChange(e.value)} style={{width:'100%'}}/>
                                            )} />
                            </span>
                                {getFormErrorMessage('email')}
                            </div>

                        </div>
                    </section>
                </form>
            </Dashboard>
        </>
    )
}
export default Seller;