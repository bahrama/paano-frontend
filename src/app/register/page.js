"use client"
import {useState,useRef} from "react";
import {useSession , signIn , signOut} from "next-auth/react";
import {useForm , Controller} from "react-hook-form";
import Link from "next/link";
import axios from "axios";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';
import {useEffect} from "react";
import './register.css';
import { useRouter } from 'next/navigation';
import { setCookie ,getCookie} from 'cookies-next';
import { useSessionStorage } from 'primereact/hooks';
const Register = () => {
    const [userInfo, setUserInfo] = useSessionStorage('', 'userInfo');
    const router = useRouter();
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const [signWithGoogleFirst , setSignWithGoogleFirst] = useState(false);
    const toast = useRef(null);
    const defaultValues = {
        email: '',
        password: ''
    }
    const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });

    useEffect(() => {
        if(getCookie('auth')!=null)
        {
            router.push('/');
        }
    }, []);
    const backImg = '/assets/img/curved-images/curved14.jpg';
    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>
    };
    const onSubmit = (data) => {
        setFormData(data);
        axios
            .post("https://tehranch.com/api/user/register", data)
            .then((response) =>
            {
                toast.current.show({severity: 'success', summary: 'ثبت نام با موفقیت انجام شد .'});
                setTimeout(function() {
                    router.push('/login');
                }, 2000);
            }
            )
            .catch((error) =>{
                    toast.current.show({severity: 'error', summary: error.response.data.message, sticky: true});
                }
                );
        setShowMessage(true);
        reset();
    };

    return (
        <main className="mt-0 transition-all duration-200 ease-soft-in-out">
            <Toast ref={toast} />
            <section className="min-h-screen mb-32">
                <div
                    className="relative flex items-start pt-12 pb-56 m-4 overflow-hidden bg-center bg-cover min-h-50-screen rounded-xl"
                    style={{backgroundImage: `url(${backImg})`}}>
                    <span
                        className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-60"></span>
                    <div className="container z-10">
                        <div className="flex flex-wrap justify-center -mx-3">
                            <div
                                className="w-full max-w-full px-3 mx-auto mt-0 text-center lg:flex-0 shrink-0 lg:w-5/12">
                                <h1 className="mt-12 mb-2 pb-3 text-white rounded-lg bg-luster-1">عضویت</h1>
                                <p className="text-white">عضویت در سایت اتحادیه لوستر سازان تهران</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="flex flex-wrap -mx-3 -mt-48 md:-mt-56 lg:-mt-48">
                        <div
                            className="w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0 md:w-7/12 lg:w-5/12 xl:w-4/12">
                            <div
                                className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                                <div className="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl">
                                    <h5>عضویت با</h5>
                                </div>
                                <div className="flex flex-wrap px-3 -mx-3 sm:px-6 xl:px-12">
                                    <div className="w-3/12 max-w-full px-1 ml-auto flex-0">
                                        <button disabled className="inline-block h-16 w-full mb-4 font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75"
                                           >
                                            <img src="/google_cover.jpg" className="w-full h-full"/>
                                        </button>
                                    </div>
                                    <div className="w-3/12 max-w-full px-1 ml-auto flex-0">
                                        <Button style={{padding:'0px!important'}} className="inline-block h-16 w-full mb-4 font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75"
                                           disabled>
                                            <img src="/github2.png" className="w-full h-full"/>
                                        </Button>
                                    </div>
                                    <div className="w-3/12 max-w-full px-1 ml-auto flex-0">
                                        <Button disabled style={{padding:'0px!important'}} className="inline-block h-16 w-full mb-4 font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75"
                                           href="#">
                                            <img src="/linkdin.png" className="w-full h-full"/>
                                        </Button>
                                    </div>
                                    <div className="w-3/12 max-w-full px-1 ml-auto flex-0">
                                        <Button disabled style={{padding:'0px!important'}} className="inline-block w-full h-16 mb-4 font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75"
                                           href="#">
                                            <img src="/insta.jpg" className="w-full h-full"/>
                                        </Button>
                                    </div>
                                    <div className="relative w-full max-w-full px-3 mt-2 text-center shrink-0">
                                        <p className="z-20 inline px-4 mb-2 font-semibold leading-normal bg-white text-sm text-slate-400">یا</p>
                                    </div>
                                </div>
                                <div className="flex-auto p-6 space-x-4">
                                    <form role="form text-left " onSubmit={handleSubmit(onSubmit)}>
                                        <div className="mb-4">
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
                                        <div className="mb-4">
                                             <span>
                                            <label htmlFor="password">رمز عبور </label>
                                            <Controller name="password" control={control} rules={{ required: 'رمز عبور را وارد نمایید' }} render={({ field, fieldState }) => (
                                                <Password id={field.name} {...field} toggleMask  className={classNames({ 'p-invalid': fieldState.invalid })}  style={{width:'100%'}}/>
                                            )} />
                                             </span>
                                            {getFormErrorMessage('password')}
                                        </div>
                                        <div className="mb-4">
                                            <span>
                                            <label htmlFor="confirmPassword">تکرار رمز عبور </label>
                                            <Controller name="confirmPassword" control={control} rules={{ required: 'تکرار رمز عبور را وارد نمایید' }} render={({ field, fieldState }) => (
                                                <Password id={field.name} {...field}  className={classNames({ 'p-invalid': fieldState.invalid })} feedback={false} style={{width:'100%'}}/>
                                            )} />
                                            </span>
                                            {getFormErrorMessage('password')}
                                        </div>
                                        <div className="text-center">
{/*                                            <button onClick={() => postData(data)} type="button"
                                                    className="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white">
                                                عضویت
                                            </button>*/}
                                            <Button type="submit" label="ثبت نام" className="p-button-outlined p-button-success"  style={{width:'100%'}}/>
                                        </div>
                                        <p className="mt-4 mb-0 leading-normal text-sm">اگر قبلا عضو شده اید <Link
                                            href={"/login"} className="font-bold text-slate-700">ورود</Link></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Register;