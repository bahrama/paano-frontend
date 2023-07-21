"use client"
import React, {useState} from "react";
import { InputText } from 'primereact/inputtext';
import { GrCircleInformation } from "react-icons/gr";
import { RiCalendarEventFill } from "react-icons/ri";
import { TfiLayoutSlider ,TfiLayoutSliderAlt ,TfiLayoutListLargeImage} from "react-icons/tfi";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Dashboard = ({children}) =>{
    const { data: session } = useSession();
    const [humbergerMenuState,setHumbergerMenuState] = useState(true);
    const [humbergerMenuExpand1,setHumbergerMenuExpand1] = useState('max-w-62.5 ease-nav-brand z-990 fixed inset-y-0 my-4 mr-4 block w-full translate-x-full flex-wrap items-center ' +
        'justify-between overflow-y-auto rounded-2xl border-0 bg-white p-0 antialiased' +
        ' shadow-none transition-transform duration-200 xl:right-0 xl:translate-x-0 xl:bg-transparent ps ps__rtl');
    const backImg = '/assets/img/curved-images/white-curved.jpeg';
    const backImg2 = '/assets/img/ivancik.jpg';
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
                <div class="h-19.5 font-vazir">
                    <i class="absolute top-0 right-0 hidden p-4 opacity-50 cursor-pointer fas fa-times text-slate-400 xl:hidden"
                       sidenav-close></i>
                    <a className="block px-8 py-6 m-0 text-sm whitespace-nowrap text-slate-700"
                       href="../pages/dashboard.html" target="_blank">
                        <img src="/image/6-1.png"
                             className="inline h-full max-w-full transition-all duration-200 ease-nav-brand max-h-8"
                             alt="main_logo"/>
                        <span
                            class="mr-1 font-semibold transition-all duration-200 ease-nav-brand">پنل ادمین</span>
                    </a>
                </div>

                <hr class="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent"/>
                <div class="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full font-vazir">
                    <ul class="flex flex-col pl-0 mb-0">
                        <li className="mt-0.5 w-full bg-white">
                        <Link href={"/dashboard/profile"}>
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
                        <Link href={"/dashboard/merchant"}>
                            <div className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors">
                                <div
                                    class="shadow-soft-2xl ml-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                                    <i className={`pi pi-users`}></i>
                                </div>
                                    <span class="mr-1 duration-300 opacity-100 pointer-events-none ease-soft">فروشنده ها</span>
                            </div>
                        </Link>
                        </li>

                        <li className="mt-0.5 w-full bg-white">
                        <Link href={"/dashboard/news"}>
                            <div className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors">
                                <div
                                    class="shadow-soft-2xl ml-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current stroke-0 text-center xl:p-2.5">
                                    <i className={`pi pi-ticket`}></i>
                                </div>
                                    <span class="mr-1 duration-300 opacity-100 pointer-events-none ease-soft">اخبار</span>
                            </div>
                        </Link>
                        </li>

                        <Link href={"/dashboard/sliders"}>
                            <li className="w-full bg-white">
                                <div className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors">
                                    <div
                                        class="shadow-soft-2xl ml-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current stroke-0 text-center xl:p-2.5">
                                        <i className={`text-lg`}><TfiLayoutSlider/></i>
                                    </div>
                                    <span class="mr-1 duration-300 opacity-100 pointer-events-none ease-soft">اسلایدر</span>
                                </div>
                            </li>
                        </Link>
                        <Link href={"/dashboard/sliders"}>
                            <li className="w-full bg-white">
                                <div className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors">
                                    <div
                                        class="shadow-soft-2xl ml-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current stroke-0 text-center xl:p-2.5">
                                        <i className={`text-lg`}><GrCircleInformation/></i>
                                    </div>
                                    <span class="mr-1 duration-300 opacity-100 pointer-events-none ease-soft">دانستنی ها</span>
                                </div>
                            </li>
                        </Link>

                        <Link href={"/dashboard/sliders"}>
                            <li className="w-full bg-white">
                                <div className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors">
                                    <div
                                        class="shadow-soft-2xl ml-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current stroke-0 text-center xl:p-2.5">
                                        <i className={`text-lg`}><RiCalendarEventFill/></i>
                                    </div>
                                    <span class="mr-1 duration-300 opacity-100 pointer-events-none ease-soft">اخبار نمایشگاهی</span>
                                </div>
                            </li>
                        </Link>

                        <li className=" w-full bg-white">
                            <a className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors">
                                <div
                                    class="shadow-soft-2xl ml-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                                    <i className={`pi pi-megaphone`}></i>
                                </div>
                                <span class="mr-1 duration-300 opacity-100 pointer-events-none ease-soft">شکایات</span>
                            </a>
                        </li>

                        <li className=" w-full bg-white">
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
                        <li className=" w-full bg-white">
                            <a className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors"
                               href="../pages/profile.html">
                                <div
                                    class="shadow-soft-2xl ml-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                                    <title>customer-support</title>
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g transform="translate(-1717.000000, -291.000000)" fill="#FFFFFF"
                                           fill-rule="nonzero">
                                            <g transform="translate(1716.000000, 291.000000)">
                                                <g transform="translate(1.000000, 0.000000)">
                                                    <path className="fill-slate-800 opacity-60"
                                                          d="M45,0 L26,0 C25.447,0 25,0.447 25,1 L25,20 C25,20.379 25.214,20.725 25.553,20.895 C25.694,20.965 25.848,21 26,21 C26.212,21 26.424,20.933 26.6,20.8 L34.333,15 L45,15 C45.553,15 46,14.553 46,14 L46,1 C46,0.447 45.553,0 45,0 Z"></path>
                                                    <path className="fill-slate-800"
                                                          d="M22.883,32.86 C20.761,32.012 17.324,31 13,31 C8.676,31 5.239,32.012 3.116,32.86 C1.224,33.619 0,35.438 0,37.494 L0,41 C0,41.553 0.447,42 1,42 L25,42 C25.553,42 26,41.553 26,41 L26,37.494 C26,35.438 24.776,33.619 22.883,32.86 Z"></path>
                                                    <path className="fill-slate-800"
                                                          d="M13,28 C17.432,28 21,22.529 21,18 C21,13.589 17.411,10 13,10 C8.589,10 5,13.589 5,18 C5,22.529 8.568,28 13,28 Z"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </div>
                                <span
                                    class="mr-1 duration-300 opacity-100 pointer-events-none ease-soft">نیروی کار</span>
                            </a>
                        </li>

                        <li className=" w-full bg-white">
                            <a className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors"
                               href="../pages/sign-in.html">
                                <div
                                    class="shadow-soft-2xl ml-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                                    <title>document</title>
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g transform="translate(-1870.000000, -591.000000)" fill="#FFFFFF"
                                           fill-rule="nonzero">
                                            <g transform="translate(1716.000000, 291.000000)">
                                                <g transform="translate(154.000000, 300.000000)">
                                                    <path className="fill-slate-800 opacity-60"
                                                          d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"></path>
                                                    <path className="fill-slate-800"
                                                          d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </div>
                                <span
                                    class="mr-1 duration-300 opacity-100 pointer-events-none ease-soft">املاک</span>
                            </a>
                        </li>

                        <li className=" w-full bg-white">
                            <a className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors"
                               href="../pages/sign-up.html">
                                <div
                                    class="shadow-soft-2xl ml-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                                    <title>پنل کاربری</title>
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g transform="translate(-1720.000000, -592.000000)" fill="#FFFFFF"
                                           fill-rule="nonzero">
                                            <g transform="translate(1716.000000, 291.000000)">
                                                <g transform="translate(4.000000, 301.000000)">
                                                    <path
                                                        className="fill-slate-800"
                                                        d="M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z"
                                                    ></path>
                                                    <path className="fill-slate-800 opacity-60"
                                                          d="M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z"></path>
                                                    <path className="fill-slate-800 opacity-60"
                                                          d="M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z"></path>
                                                    <path className="fill-slate-800 opacity-60"
                                                          d="M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </div>
                                <span class="mr-1 duration-300 opacity-100 pointer-events-none ease-soft">ابزارالات</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>


            <main
                class="ease-soft-in-out  xl:mr-68.5 relative h-full  rounded-xl transition-all duration-200 font-vazir">
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
                                    aria-current="page">پروفایل
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