"use client"
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Link from "next/link";
import {InputText} from "primereact/inputtext";
import {classNames} from "primereact/utils";
import {useForm , Controller} from "react-hook-form";
import axios from "axios";
import {Password} from "primereact/password";
import { Toast } from 'primereact/toast';
import './login.css';
import {useEffect, useRef, useState} from "react";
import { setCookie ,getCookie} from 'cookies-next';
import { useRouter } from 'next/navigation';
const Login = () => {
    const router = useRouter();
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const toast = useRef(null);
    useEffect(() => {
        if(getCookie('auth')!=null)
        {
            router.push('/');
        }
    }, []);
    const defaultValues = {
        email: '',
        password: ''
    }
    const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });
    const backImg = '/assets/img/curved-images/curved6.jpg';
    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>
    };
    const onSubmit = (data) => {
        console.log(data);
        setFormData(data);
        axios
            .post("https://tehranch.com/api/user/login", data)
            .then((response) => {
                toast.current.show({severity: 'success', summary: 'ورود با موفقیت انجام شد .'});
                console.log(response.data.token);
                setCookie('auth',response.data.token.replace("Bearer ", "") , {maxAge: 60 * 60 * 24 * 30 });
                setTimeout(function() {
                    location.reload();
                }, 2000);
                }
            )
            .catch((error) =>
                toast.current.show({severity: 'error', summary: error.response.data.message, sticky: true})
            );
        setShowMessage(true);
        reset();
    };
    return (
        <main class="mt-0 transition-all duration-200 ease-soft-in-out">
            <Toast ref={toast} />
            <section style={{direction : "initial"}}>
                <div class="relative flex items-center p-0 overflow-hidden bg-center bg-cover min-h-75-screen">
                    <div class="container z-10">
                        <div class="flex flex-wrap mt-0 -mx-3">
                            <div
                                class="flex flex-col w-full max-w-full px-3 mx-auto md:flex-0 shrink-0 md:w-6/12 lg:w-5/12 xl:w-4/12">
                                <div
                                    class="relative flex flex-col min-w-0 mt-32 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                                    <div class="p-6 pb-0 mb-0 bg-transparent border-b-0 rounded-t-2xl">
                                        <h3 class="relative z-10 font-bold text-transparent bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text text-center text-4xl pb-5">ورود به سامانه</h3>
                                        <p class="mb-0 text-right">برای ورود لطفا ایمیل و رمز عبور خود را وارد نمایید</p>
                                    </div>
                                    <div class="flex-auto p-6">
                                        <form role="form" style={{direction:"rtl"}} onSubmit={handleSubmit(onSubmit)}>
                                            <div class="mb-4">
                                                                                <span style={{direction:"ltr"}}>
                                            <i className="pi pi-envelope" />
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
                                            <div class="mb-4">
                                                <span>
                                            <label htmlFor="password">رمز عبور </label>
                                                <Controller name="password" control={control} rules={{ required: 'رمز عبور را وارد نمایید' }} render={({ field, fieldState }) => (
                                                    <Password id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} feedback={false} style={{width:'100%'}}/>                                                )} />
                                                </span>
                                                {getFormErrorMessage('password')}
                                            </div>
                                            <div class="text-center">
                                                <Button type="submit" label="ورود" className="p-button-outlined p-button-success" style={{width:'100%'}}/>
                                            </div>
                                        </form>
                                    </div>
                                    <div
                                        class="p-6 px-1 pt-0 text-center bg-transparent border-t-0 border-t-solid rounded-b-2xl lg:px-2">
                                        <p class="mx-auto mb-6 leading-normal text-sm">
                                            آیا عضو نیستید ؟
                                            <Link href = {"/register"}
                                               className="relative z-10 font-semibold text-transparent bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text">
                                                عضویت</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full max-w-full px-3 lg:flex-0 shrink-0 md:w-6/12">
                                <div
                                    class="absolute top-0 hidden w-3/5 h-full -mr-32 overflow-hidden -skew-x-10 -right-40 rounded-bl-xl md:block">
                                    <div class="absolute inset-x-0 top-0 z-0 h-full -ml-16 bg-cover skew-x-10"
                                         style={{backgroundImage: `url(${backImg})`}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Login;