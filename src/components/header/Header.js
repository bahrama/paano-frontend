"use client"
import {useEffect, useRef, useState} from "react";
import { useClickOutside } from 'primereact/hooks';
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { setCookie ,getCookie , deleteCookie} from 'cookies-next';
import { useSessionStorage } from 'primereact/hooks';
import axios from "axios";
const Header = () =>{
    const [userInfo, setUserInfo] = useSessionStorage('', 'userInfo');
    const [humbergerMenuState,setHumbergerMenuState] = useState(true);
    const [sideBarMenuState,setSideBarMenuState] = useState(true);
    const [humbergerMenuExpand1,setHumbergerMenuExpand1] = useState('w-5.5 rounded-xs relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300');
    const [humbergerMenuExpand2,setHumbergerMenuExpand2] = useState('w-5.5 rounded-xs mt-1.75 relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300');
    const [humbergerMenuExpand3,setHumbergerMenuExpand3] = useState('w-5.5 rounded-xs relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300 mt-1.75');
    const [humbergerMenuExpand4,setHumbergerMenuExpand4] = useState('items-center flex-grow overflow-hidden transition-all duration-500 ease-soft basis-full lg:flex lg:basis-auto lg-max:max-h-0');
    const [humbergerMenuExpand5,setHumbergerMenuExpand5] = useState('block px-4 py-2 mr-2 font-normal transition-all duration-250 ease-soft-in-out text-sm text-slate-700 lg:px-2 lg-max:opacity-0');
    const [sideBar,setSideBar] = useState('mtop50 w-full text-sm before:font-awesome before:leading-default before:duration-350 before:ease-soft lg:shadow-soft-3xl duration-250 min-w-44 before:text-5.5 absolute left-0' +
        ' top-0 z-50 origin-top list-none rounded-lg border-0 ' +
        'border-solid border-transparent bg-black bg-clip-padding px-2 py-4 text-left text-slate-500 transition-all before:absolute before:right-auto before:top-0 before:left-2 before:z-50 before:inline-block before:font-normal before:text-white before:antialiased before:transition-all before:content-[\'\\f0d8\'] ' +
        'sm:-mr-6 before:sm:left-3 lg:absolute lg:mt-2 lg:block lg:cursor-pointer opacity-0 pointer-events-none transform-dropdown');
    const overlayRef = useRef(null);
    const handleHumbergerMenuExpand = () =>{
        setHumbergerMenuState(!humbergerMenuState);
        if(humbergerMenuState)
        {
            setHumbergerMenuExpand1('w-5.5 rounded-xs relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300 rotate-45 origin-10-10 mt-1');
            setHumbergerMenuExpand2('w-5.5 rounded-xs mt-1.75 relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300 opacity-0');
            setHumbergerMenuExpand3('w-5.5 rounded-xs relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300 -rotate-45 origin-10-90 mt-0.75');
            setHumbergerMenuExpand4('items-center flex-grow overflow-hidden transition-all duration-500 ease-soft basis-full lg:flex lg:basis-auto lg-max:max-h-54');
            setHumbergerMenuExpand5('block px-4 py-2 mr-2 font-normal transition-all duration-250 ease-soft-in-out text-sm text-slate-700 lg:px-2');
        }else {
            setHumbergerMenuExpand1('w-5.5 rounded-xs relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300');
            setHumbergerMenuExpand2('w-5.5 rounded-xs mt-1.75 relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300');
            setHumbergerMenuExpand3('w-5.5 rounded-xs relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300 mt-1.75');
            setHumbergerMenuExpand4('items-center flex-grow overflow-hidden transition-all duration-500 ease-soft basis-full lg:flex lg:basis-auto lg-max:max-h-0');
            setHumbergerMenuExpand5('block px-4 py-2 mr-2 font-normal transition-all duration-250 ease-soft-in-out text-sm text-slate-700 lg:px-2 lg-max:opacity-0');
        }
    }
    const handleSideBarExpand = () =>{
        console.log(sideBarMenuState);
        setSideBarMenuState(!sideBarMenuState);
        if(sideBarMenuState)
        {
            setSideBar('mtop50 w-full text-sm before:font-awesome before:leading-default before:duration-350 before:ease-soft lg:shadow-soft-3xl duration-250 min-w-44 before:text-5.5 absolute left-0 top-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent bg-luster-2 bg-clip-padding px-2 py-4 text-left text-slate-500 transition-all before:absolute before:right-auto before:top-0 before:left-2 before:z-50 before:inline-block before:font-normal before:text-white before:antialiased before:transition-all before:content-[\'\\f0d8\'] sm:-mr-6 before:sm:left-3 lg:absolute lg:mt-2 lg:block lg:cursor-pointer before:-top-5 transform-dropdown-show');
        }else {
            setSideBar('mtop50 w-full text-sm before:font-awesome before:leading-default before:duration-350 before:ease-soft lg:shadow-soft-3xl duration-250 min-w-44 before:text-5.5 absolute left-0 top-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent bg-luster-2 bg-clip-padding px-2 py-4 text-left text-slate-500 transition-all before:absolute before:right-auto before:top-0 before:left-2 before:z-50 before:inline-block before:font-normal before:text-white before:antialiased before:transition-all before:content-[\'\\f0d8\'] sm:-mr-6 before:sm:left-3 lg:absolute lg:mt-2 lg:block lg:cursor-pointer opacity-0 pointer-events-none transform-dropdown');
        }
    }
    useClickOutside(overlayRef, () => {
            setSideBar('mtop50 w-full text-sm before:font-awesome before:leading-default before:duration-350 before:ease-soft lg:shadow-soft-3xl duration-250 min-w-44 before:text-5.5 absolute left-0 top-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent bg-luster-2 bg-clip-padding px-2 py-4 text-left text-slate-500 transition-all before:absolute before:right-auto before:top-0 before:left-2 before:z-50 before:inline-block before:font-normal before:text-white before:antialiased before:transition-all before:content-[\'\\f0d8\'] sm:-mr-6 before:sm:left-3 lg:absolute lg:mt-2 lg:block lg:cursor-pointer opacity-0 pointer-events-none transform-dropdown');
            setSideBarMenuState(true);
    });
    const exitApp = () =>{
        deleteCookie('auth');
        setUserInfo('');
    }
    const findUserByCookie = () => {
        console.log("KKKKKKKKKKKKKKKKKKKKKKKKKKKK");
        console.log(getCookie('auth'));
        axios
            .post("https://tehranch.com/api/user", {} ,
                {
                    headers : {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + getCookie('auth')
                    }
                })
            .then((response) =>
                {
                    console.log("MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM");
                    console.log(response.data);
                    setUserInfo(response.data.username)
                }
            )
            .catch((error) =>{
                console.log(error.response.data.message);
                exitApp();
                }
            );
    }
    useEffect(() => {
            findUserByCookie();
        console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
        console.log(userInfo);
        console.log("signWithGoogleFirst");
    }, []);

   const showProfile = () =>{
       if(userInfo===''){
           return(
               <>
                   <li>
                       <Link className={humbergerMenuExpand5}
                             href={"/register"}>
                           <i className="mr-3 fas fa-user-circle text-white"></i>
                           <span className="mr-3 text-white">عضویت</span>
                       </Link>
                   </li>
                   <li>
                       <Link className={humbergerMenuExpand5}
                             href={"/login"}>
                           <i className="mr-3 fas fa-key text-white"></i>
                           <button className="mr-3 text-white"
                           >
                               ورود
                           </button>
                       </Link>
                   </li>
               </>
           )
       }else {
           return (
               <>
                   <li>
                       <Link className={humbergerMenuExpand5}
                             href={"#"}>
                           <i className="mr-3 fas fa-key text-white"></i>
                           <button className="mr-3 text-white"
                           >
                               پروفایل
                           </button>
                       </Link>
                   </li>
                   <li>
                       <Link className={humbergerMenuExpand5}
                             href={"#"}>
                           <i className="mr-3 fas fa-key text-white"></i>
                           <button onClick={exitApp}  className="mr-3 text-white"
                           >
                               خروج
                           </button>
                       </Link>
                   </li>
               </>
           )
       }
   }

   const showUserDetail = () =>{
       if(userInfo===''){
           return(
               <>
                   <li>
                       <img src="/image/6-1.png" className="h-16 "/>
                   </li>
               </>
           )
       }else {
           return (
               <>
                   <li>
                      {/* <img src={session.user.image} className="h-10 rounded-lg"/>*/}
                           <span className="text-blue-50">{userInfo}</span>
                   </li>
               </>
           )
       }
   }
    return (
            <div className="container sticky top-0 z-sticky  text-white">
                <div className="flex flex-wrap">
                    <div className="w-full max-w-full px-3 flex-0">
                        <nav
                            className="absolute top-0 left-0 right-0 z-30 flex flex-wrap items-center px-4 py-2 mx-6 my-4 shadow-soft-2xl rounded-lg border-b-[10px] border-b-luster-1 bg-luster-2  backdrop-blur-2xl backdrop-saturate-200 lg:flex-nowrap lg:justify-start">
                            <div className="flex items-center justify-between w-full p-0 pl-6 mx-auto flex-wrap-inherit">

                                <button
                                    className="px-3 py-1 ml-2 leading-none transition-all bg-transparent border border-transparent border-solid rounded-lg shadow-none cursor-pointer text-lg ease-soft-in-out lg:hidden"
                                    type="button" aria-controls="navigation" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                                <span onClick={handleHumbergerMenuExpand} className="inline-block mt-2 align-middle bg-center bg-no-repeat bg-cover w-6 h-6 bg-none">
                                                  <span
                                                      className={humbergerMenuExpand1}></span>
                                                  <span
                                                      className={humbergerMenuExpand2}></span>
                                                  <span
                                                      className={humbergerMenuExpand3}></span>
                                                </span>
                                </button>
                                <div
                                    className={humbergerMenuExpand4}>
                                    <ul className="flex flex-col pl-0 mx-auto mb-0 list-none lg:flex-row xl:ml-auto ">
                                        <li>
                                            <Link className={humbergerMenuExpand5}
                                               aria-current="page" href={"/"}>
                                                <i className="mr-3 fa fa-chart-pie text-white"></i>
                                                <span className="mr-3 text-white">خانه</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <a className={humbergerMenuExpand5}>
                                                <i className="mr-3 fa fa-user text-white"></i>
                                                <span onClick={handleSideBarExpand} className="mr-3 cursor-pointer text-white">دسته بندی ها</span>
                                            </a>
                                            <ul dropdown-menu ref={overlayRef}
                                                className={sideBar}>
                                                <li className="relative mb-2 w-[200px]">
                                                    <a className="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 hover:bg-gray-200 hover:text-slate-700 lg:transition-colors"
                                                       href="javascript:;">
                                                        <div className="flex py-1">
                                                            <div className="my-auto">
                                                                <img src="/image/product/luster-menu.jpg"
                                                                     className="object-center object-fill items-center justify-center ml-4  h-9 w-9 max-w-none rounded-xl"/>
                                                            </div>
                                                            <div className="flex flex-col justify-center">
                                                                <h6 className="mb-1 font-normal leading-normal text-sm">
                                                                    <span
                                                                        className="font-semibold text-white">لوستر اتاق خواب</span></h6>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>

                                                <li className="relative mb-2 w-[200px]">
                                                    <a className="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700"
                                                       href="javascript:;">
                                                        <div className="flex py-1">
                                                            <div className="my-auto">
                                                                <img src="/image/product/abajor.jpg"
                                                                     className="inline-flex items-center justify-center ml-4 text-white text-sm bg-gradient-to-tl from-gray-900 to-slate-800 h-9 w-9 max-w-none rounded-xl"/>
                                                            </div>
                                                            <div className="flex flex-col justify-center">
                                                                <h6 className="mb-1 font-normal leading-normal text-sm">
                                                                    <span
                                                                        className="font-semibold text-white">آباژور</span></h6>

                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="relative mb-2 w-[200px]">
                                                    <a className="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700"
                                                       href="javascript:;">
                                                        <div className="flex py-1">
                                                            <div className="my-auto">
                                                                <img src="/image/product/luster-top.jpg"
                                                                     className="object-center object-fill items-center justify-center ml-4  h-9 w-9 max-w-none rounded-xl"/>
                                                            </div>
                                                            <div className="flex flex-col justify-center">
                                                                <h6 className="mb-1 font-normal leading-normal text-sm">
                                                                    <span
                                                                        className="font-semibold text-white">لوستر سقفی</span></h6>

                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>

                                            </ul>
                                        </li>
                                        <li>
                                            <Link  className={humbergerMenuExpand5}
                                               aria-current="page" href={"/about"}>
                                                <i className="mr-3 fa fa-chart-pie text-white"></i>
                                                <span className="mr-3 text-white">درباره ما</span>
                                            </Link>
                                        </li>
                                        {showProfile()}
                                    </ul>
                                    <ul className="hidden pl-0 mb-0 list-none lg:block lg:flex-row">
                                        {showUserDetail()}
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

            </div>
      );
}

export default Header;