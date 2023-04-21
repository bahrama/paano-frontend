"use client"
import {useRef, useState} from "react";
import { useClickOutside } from 'primereact/hooks';
const Header = () =>{
    const [humbergerMenuState,setHumbergerMenuState] = useState(true);
    const [sideBarMenuState,setSideBarMenuState] = useState(true);
    const [humbergerMenuExpand1,setHumbergerMenuExpand1] = useState('w-5.5 rounded-xs relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300');
    const [humbergerMenuExpand2,setHumbergerMenuExpand2] = useState('w-5.5 rounded-xs mt-1.75 relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300');
    const [humbergerMenuExpand3,setHumbergerMenuExpand3] = useState('w-5.5 rounded-xs relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300 mt-1.75');
    const [humbergerMenuExpand4,setHumbergerMenuExpand4] = useState('items-center flex-grow overflow-hidden transition-all duration-500 ease-soft basis-full lg:flex lg:basis-auto lg-max:max-h-0');
    const [humbergerMenuExpand5,setHumbergerMenuExpand5] = useState('block px-4 py-2 mr-2 font-normal transition-all duration-250 ease-soft-in-out text-sm  lg:px-2 lg-max:opacity-0');
    const [sideBar,setSideBar] = useState('mtop50 w-full text-sm before:font-awesome before:leading-default before:duration-350 before:ease-soft lg:shadow-soft-3xl duration-250 min-w-44 before:text-5.5 absolute left-0' +
        ' top-0 z-50 origin-top list-none rounded-lg border-0 ' +
        'border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 transition-all before:absolute before:right-auto before:top-0 before:left-2 before:z-50 before:inline-block before:font-normal before:text-white before:antialiased before:transition-all before:content-[\'\\f0d8\'] ' +
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
            setHumbergerMenuExpand5('block px-4 py-2 mr-2 font-normal transition-all duration-250 ease-soft-in-out text-sm  lg:px-2');
        }else {
            setHumbergerMenuExpand1('w-5.5 rounded-xs relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300');
            setHumbergerMenuExpand2('w-5.5 rounded-xs mt-1.75 relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300');
            setHumbergerMenuExpand3('w-5.5 rounded-xs relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300 mt-1.75');
            setHumbergerMenuExpand4('items-center flex-grow overflow-hidden transition-all duration-500 ease-soft basis-full lg:flex lg:basis-auto lg-max:max-h-0');
            setHumbergerMenuExpand5('block px-4 py-2 mr-2 font-normal transition-all duration-250 ease-soft-in-out text-sm  lg:px-2 lg-max:opacity-0');
        }
    }
    const handleSideBarExpand = () =>{
        console.log(sideBarMenuState);
        setSideBarMenuState(!sideBarMenuState);
        if(sideBarMenuState)
        {
            setSideBar('mtop50 w-full text-sm before:font-awesome before:leading-default before:duration-350 before:ease-soft lg:shadow-soft-3xl duration-250 min-w-44 before:text-5.5 absolute left-0 top-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 transition-all before:absolute before:right-auto before:top-0 before:left-2 before:z-50 before:inline-block before:font-normal before:text-white before:antialiased before:transition-all before:content-[\'\\f0d8\'] sm:-mr-6 before:sm:left-3 lg:absolute lg:mt-2 lg:block lg:cursor-pointer before:-top-5 transform-dropdown-show');
        }else {
            setSideBar('mtop50 w-full text-sm before:font-awesome before:leading-default before:duration-350 before:ease-soft lg:shadow-soft-3xl duration-250 min-w-44 before:text-5.5 absolute left-0 top-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 transition-all before:absolute before:right-auto before:top-0 before:left-2 before:z-50 before:inline-block before:font-normal before:text-white before:antialiased before:transition-all before:content-[\'\\f0d8\'] sm:-mr-6 before:sm:left-3 lg:absolute lg:mt-2 lg:block lg:cursor-pointer opacity-0 pointer-events-none transform-dropdown');
        }
    }
    useClickOutside(overlayRef, () => {
            setSideBar('mtop50 w-full text-sm before:font-awesome before:leading-default before:duration-350 before:ease-soft lg:shadow-soft-3xl duration-250 min-w-44 before:text-5.5 absolute left-0 top-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 transition-all before:absolute before:right-auto before:top-0 before:left-2 before:z-50 before:inline-block before:font-normal before:text-white before:antialiased before:transition-all before:content-[\'\\f0d8\'] sm:-mr-6 before:sm:left-3 lg:absolute lg:mt-2 lg:block lg:cursor-pointer opacity-0 pointer-events-none transform-dropdown');
            setSideBarMenuState(true);
    });
    return (
            <div className="container sticky top-0 z-sticky text-white w-full ">
                <div className="flex flex-wrap ">
                    <div className="w-full max-w-full px-3 flex-0">
                        <nav
                            className="navbar">
                            <div
                                className="flex items-center justify-between w-full p-0 pl-6 mx-auto flex-wrap-inherit">
                                <a className="hidden sm:header-text"
                                   href="#"> اتحادیه تولید کنندگان و فروشمدگان لوستر شهرستان تهران </a>
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
                                    <ul className="flex flex-col pl-0 mx-auto mb-0 list-none lg:flex-row xl:ml-auto">
                                        <li>
                                            <a className={humbergerMenuExpand5}
                                               aria-current="page" href="#">
                                                <i className="mr-3 fa fa-home opacity-60"></i>
                                                <span className="mr-3">خانه</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className={humbergerMenuExpand5}>
                                                <i className="mr-3 fa fa-list opacity-60"></i>
                                                <span onClick={handleSideBarExpand} className="mr-3 cursor-pointer">دسته بندی ها</span>
                                            </a>
                                            <ul dropdown-menu ref={overlayRef}
                                                className={sideBar}>
                                                <li className="relative mb-2">
                                                    <a className="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 hover:bg-gray-200 text-white lg:transition-colors"
                                                       href="javascript:;">
                                                        <div className="flex py-1">
                                                            <div className="my-auto">
                                                                <img src=""
                                                                     className="inline-flex items-center justify-center ml-4 text-white text-sm h-9 w-9 max-w-none rounded-xl"/>
                                                            </div>
                                                            <div className="flex flex-col justify-center">
                                                                <h6 className="mb-1 font-normal leading-normal text-sm">
                                                                    <span
                                                                        className="font-semibold">لوستر آپارتمان</span></h6>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>

                                                <li className="relative mb-2">
                                                    <a className="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 "
                                                       href="javascript:;">
                                                        <div className="flex py-1">
                                                            <div className="my-auto">
                                                                <img src="../assets/img/small-logos/logo-spotify.svg"
                                                                     className="inline-flex items-center justify-center ml-4 text-white text-sm bg-gradient-to-tl from-gray-900 to-slate-800 h-9 w-9 max-w-none rounded-xl"/>
                                                            </div>
                                                            <div className="flex flex-col justify-center">
                                                                <h6 className="mb-1 font-normal leading-normal text-sm">
                                                                    <span
                                                                        className="font-semibold">لوستر اداری</span></h6>

                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="relative mb-2">
                                                    <a className="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 "
                                                       href="javascript:;">
                                                        <div className="flex py-1">
                                                            <div className="my-auto">
                                                                <img src="../assets/img/small-logos/logo-spotify.svg"
                                                                     className="inline-flex items-center justify-center ml-4 text-white text-sm bg-gradient-to-tl from-gray-900 to-slate-800 h-9 w-9 max-w-none rounded-xl"/>
                                                            </div>
                                                            <div className="flex flex-col justify-center">
                                                                <h6 className="mb-1 font-normal leading-normal text-sm">
                                                                    <span
                                                                        className="font-semibold">لوستر مجتمع</span></h6>

                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>

                                            </ul>
                                        </li>
                                        <li>
                                            <a className={humbergerMenuExpand5}
                                               aria-current="page" href="#">
                                                <i className="mr-3 fa fa-chart-pie opacity-60"></i>
                                                <span className="mr-3">درباره ما</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className={humbergerMenuExpand5}
                                               href="#">
                                                <i className="mr-3 fas fa-user-circle opacity-60"></i>
                                                <span className="mr-3">عضویت</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className={humbergerMenuExpand5}
                                               href="#">
                                                <i className="mr-3 fas fa-key opacity-60"></i>
                                                <span className="mr-3">ورود</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="hidden pl-0 mb-0 list-none lg:block lg:flex-row">
                                        <li>
                                            <img src="/image/6-1.png" className="h-16 "/>
                                        </li>
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