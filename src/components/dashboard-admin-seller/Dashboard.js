"use client"
import React, {useEffect, useState} from "react";
import { InputText } from 'primereact/inputtext';
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { IoNotificationsSharp } from "react-icons/io5";
import { useSession, signIn, signOut } from "next-auth/react";
import { IconContext } from "react-icons";
import Link from "next/link";

const Dashboard = ({children,path}) =>{
    const { data: session } = useSession();
    const [humbergerMenuState,setHumbergerMenuState] = useState(true);
    const [dropDownProduct,setDropDownProduct] = useState(false);
    const [humbergerMenuExpand1,setHumbergerMenuExpand1] = useState('max-w-62.5 ease-nav-brand z-990 fixed inset-y-0 my-4 mr-4 block w-full translate-x-full flex-wrap items-center ' +
        'justify-between overflow-y-auto rounded-2xl border-0 bg-white p-0 antialiased' +
        ' shadow-none transition-transform duration-200 xl:right-0 xl:translate-x-0 xl:bg-transparent ps ps__rtl');
    const backImg = '/assets/img/curved-images/white-curved.jpeg';
    const backImg2 = '/assets/img/ivancik.jpg';
    const dropDownProductHandler = ()=>{
        setDropDownProduct(current => !current );
    }
    useEffect(()=>{
        console.log("dropdown",dropDownProduct)
    },[dropDownProduct])
    const handleHumbergerMenuExpand = () =>{
        setHumbergerMenuState(!humbergerMenuState);
        if(humbergerMenuState)
        {
            setHumbergerMenuExpand1('max-w-62.5 ease-nav-brand z-990 fixed inset-y-0' +
                ' my-4 mr-4 block w-full translate-x-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 bg-white p-0 antialiased shadow-none transition-transform duration-200 xl:right-0 ' +
                'xl:translate-x-0 xl:bg-transparent ps ps__rtl translate-x-0 shadow-soft-xl');
        }else {
            setHumbergerMenuExpand1('max-w-62.5 ease-nav-brand z-990 fixed inset-y-0 my-4 mr-4 block w-full translate-x-full flex-wrap items-center ' +
                'justify-between overflow-y-auto rounded-2xl border-0 bg-white p-0 antialiased' +
                ' shadow-none transition-transform duration-200 xl:right-0 xl:translate-x-0 xl:bg-transparent ps ps__rtl');
        }
    }
    const showUserDetail = () =>{
        if(session == undefined || session ==null){
            return(
                <>
                    <span class="sm:inline">username</span>
                </>
            )
        }else {
            return (
                <>
                    <span class="sm:inline">{session.user.name}</span>
                </>
            )
        }
    }
    return(
        <>
            <br/>
            <br/>
            <br/>
            <aside style={{top:`90px`}}
                   className={humbergerMenuExpand1}>
                <div class="h-19.5">
                    <i class="absolute top-0 right-0 hidden p-4 opacity-50 cursor-pointer fas fa-times text-slate-400 xl:hidden"
                       sidenav-close></i>
                    <a className="block px-8 py-6 m-0 text-sm whitespace-nowrap text-slate-700"
                       href="../pages/dashboard.html" target="_blank">
                        <img src="/image/6-1.png"
                             className="inline h-full max-w-full transition-all duration-200 ease-nav-brand max-h-8"
                             alt="main_logo"/>
                        <span
                            class="mr-1 font-semibold transition-all duration-200 ease-nav-brand">پنل کاربر</span>
                    </a>
                </div>

                <hr class="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent"/>
                <div class="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
                    <ul class="flex flex-col pl-0 mb-0">
                        <li className="mt-0.5 w-full bg-white">
                        <Link href={"/admin/seller/profile"}>
                            <div className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors">
                                <div
                                    class="shadow-soft-2xl ml-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                                    <i className={`pi pi-user`}></i>
                                </div>
                                    <span class="mr-1 duration-300 opacity-100 pointer-events-none ease-soft">پروفایل</span>
                            </div>
                        </Link>
                        </li>

                        <li className="mt-0.5 w-full bg-white">

                            <div className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex  items-center whitespace-nowrap px-4 transition-colors"
                                 onClick={dropDownProductHandler}>
                                <div class="shadow-soft-2xl ml-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                                    <i className={`pi pi-shopping-cart`}></i>
                                </div>
                                    <span class="mr-1 duration-300 opacity-100 pointer-events-none ease-soft">
                                        محصولات <i className={dropDownProduct?'pi pi-sort-up pr-16':'pi pi-sort-down pr-16'}></i>
                                    </span>
                            </div>
                            <ul className={dropDownProduct?`transition delay-700 text-center text-sm`:`hidden`}>
                                <Link href={"/admin/seller/product"}><li className={`pb-3`}><i className={`pi pi-pencil pl-3`}></i>افزودن محصول</li></Link>
                                <Link href={"/admin/seller/table"}><li><i className={`pi pi-table pl-3`}></i>جدول محصولات</li></Link>
                            </ul>
                        </li>
                        <li className="mt-0.5 w-full bg-white">
                        </li>

                        <li className="mt-0.5 w-full bg-white">
                            <a className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors">
                                <div
                                    class="shadow-soft-2xl ml-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                                    <i className={`pi pi-megaphone`}></i>
                                </div>
                                <span class="mr-1 duration-300 opacity-100 pointer-events-none ease-soft">شکایات</span>
                            </a>
                        </li>

                        <li className="mt-0.5 w-full bg-white">
                            <a className="py-2.7 shadow-soft-xl text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap rounded-lg bg-white px-4 font-semibold text-slate-700 transition-colors"
                               href="../pages/rtl.html">
                                <div
                                    class="bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl ml-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                                    <title>settings</title>
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g transform="translate(-2020.000000, -442.000000)" fill="#FFFFFF"
                                           fill-rule="nonzero">
                                            <g transform="translate(1716.000000, 291.000000)">
                                                <g transform="translate(304.000000, 151.000000)">
                                                    <polygon className="opacity-60"
                                                             points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"></polygon>
                                                    <path className="opacity-60"
                                                          d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z"></path>
                                                    <path className=""
                                                          d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </div>
                                <span class="mr-1 duration-300 opacity-100 pointer-events-none ease-soft">نیازمندی ها</span>
                            </a>
                        </li>
                        <li className="w-full bg-white">
                            <Link href={"/admin/seller/profile"}>
                                <div className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors">
                                    <div
                                        class="shadow-soft-2xl ml-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                                        <i className={`pi pi-users`}></i>
                                    </div>
                                    <span class="mr-1 duration-300 opacity-100 pointer-events-none ease-soft">نیروی کار</span>
                                </div>
                            </Link>
                        </li>

                        <li className="w-full bg-white">
                            <Link href={"/admin/seller/profile"}>
                                <div className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors">
                                    <div
                                        class="shadow-soft-2xl ml-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                                        <i className={`pi pi-home`}></i>
                                    </div>
                                    <span class="mr-1 duration-300 opacity-100 pointer-events-none ease-soft">املاک</span>
                                </div>
                            </Link>
                        </li>

                        <li className="w-full bg-white">
                            <Link href={"/admin/seller/profile"}>
                                <div className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors">
                                    <div
                                        class="shadow-soft-2xl ml-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                                        <HiWrenchScrewdriver/>
                                    </div>
                                    <span class="mr-1 duration-300 opacity-100 pointer-events-none ease-soft">ابزار الات</span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>


            <main
                class="ease-soft-in-out  xl:mr-68.5 relative h-full  rounded-xl transition-all duration-200">
                <nav
                    class="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start"
                    navbar-main navbar-scroll="true">
                    <div class="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
                        <nav>
                            <ol className="flex flex-wrap pt-1 bg-transparent rounded-lg">
                                <li className="pl-2 leading-normal text-sm">
                                    <a className="opacity-50 text-slate-700" href="#">پنل</a>
                                </li>
                                <li className="text-sm pl-2 capitalize leading-normal text-slate-700 before:float-right before:pl-2 before:text-gray-600 before:content-['/']"
                                    aria-current="page"><Link href="/admin/seller/profile">پروفایل</Link>
                                </li>
                                <li className="text-sm pl-2 capitalize leading-normal text-slate-700 before:float-right before:pl-2 before:text-gray-600 before:content-['/']"
                                        aria-current="page">{path}
                                </li>
                            </ol>
                        </nav>

                        <div class="flex items-center mt-2 grow sm:mt-0 md:mr-0 lg:flex lg:basis-auto">
                            <div class="flex items-center md:ml-auto md:pr-4">
                                <div
                                    class="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease-soft">
                <span
                    class="text-sm ease-soft leading-5.6 absolute z-50 -mr-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tl-none rounded-bl-none border border-l-0 border-solid border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                  <i class="fas fa-search" aria-hidden="true"></i>
                </span>
                                    <input type="text"
                                           className="text-sm focus:shadow-soft-primary-outline pr-8.75 ease-soft w-1/100 leading-5.6 relative -mr-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pl-0 text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                                           placeholder="جستجو"/>
                                </div>
                            </div>
                            <ul class="flex flex-row justify-end pl-0 pr-10 mb-0 ml-0 mr-auto list-none md-max:w-full">
                                <li className={`flex items-center`}>
                                   <IconContext.Provider value={{ color: "orange"}}>
                                       <span className={`py-2 px-5`}>
                                           <IoNotificationsSharp className={``}/>
                                       </span>
                                   </IconContext.Provider>
                                </li>
                                <li className="flex items-center">
                                    <a href="../pages/sign-in.html"
                                       className="block px-0 py-2 font-semibold transition-all ease-nav-brand text-sm text-slate-500">
                                        {showUserDetail()}
                                        <i class="fa fa-user sm:mr-1 pr-2" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li className="flex items-center pr-4 xl:hidden cursor-pointer">
                                    <a onClick={handleHumbergerMenuExpand}
                                       className="block p-0 transition-all ease-nav-brand text-sm text-slate-500"
                                       sidenav-trigger>
                                        <div class="w-4.5 overflow-hidden">
                                            <i class="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                                            <i class="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                                            <i class="ease-soft relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <section>
                    {children}
                </section>
            </main>
        </>
    )
}

export default Dashboard;