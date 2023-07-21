"use client"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { red } from '@mui/material/colors';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";   
import { Button } from 'primereact/button';
import CustomSlider from "@/components/slider/CustomSlider";
import AdvertismentSlider from "@/components/slider/AdvertismentSlider";
import React from 'react';
import Link from 'next/link';
import ProductCarousel from "@/components/productCarousel/ProductCarousel";
const Main = () =>{
    return(
      <>
      <section className="container mx-auto px-10 mt-1">
            <div className="main-header-logo">
                <div className="relative mx-auto">
                    <img className="main-header-logo-1" src="/image/ir.png" alt="main-header-logo-1"/>
                    <img className="main-header-logo-2" src="/image/6.jpg" alt="main-header-logo-2"/>
                    <div className="flex flex-row">
                        <img className="main-header-logo-3" src="/image/134.jpg" alt="main-header-logo-3"/>
                        <p className="main-header-logo-title">
                            اتحادیه تولید کنندگان و فروشندگان لوستر شهرستان تهران
                        </p>
                    </div>
                </div>
            </div>
      </section>
      <section className=" container mx-auto px-10 font-bold mt-0 md:mt-20 font-vazir">
          <div className="lg:grid lg:grid-cols-4 gap-2 md:grid md:grid-cols-2">
              <Link href={"/news"}>
              <div className="header-btn">
                  <p className="leading-10 pt-3 mb-0">
                            اخبار
                  </p>
              </div>
              </Link>
              <Link href={"/members/unionmembers"}>
              <div className="header-btn">
                  <p className="leading-10 pt-3 mb-0">اعضای هیئت مدیره</p>
              </div>
              </Link>
              <Link href={"/members/unioncolleagues"}>
              <div className="header-btn">
                  <p className="leading-10 pt-3 mb-0">همکاران اتحادیه</p>
              </div>
              </Link>

              <Link href={"/preside"}>
              <div className="header-btn">
                  <img className="float-left w-16 z-40 object-" src="/image/133.png"/>
                   <p className="leading-10 pt-4 md:text-base lg:text-base">
                       سخن رئيس اتحاديه
                   </p>
              </div>
              </Link>
          </div>
      </section>
      <section>
              <div className='container mx-auto  py-2 px-10'>
                  <div className="flex flex-col-reverse sm:flex-row gap-5 items-center">
                      <div className="basis-1/3 mt-0 sm:mt-[100px] md:mt-0 w-full rounded-lg font-vazir">
                            <div className="text-white  bg-luster-2 text-center py-5 mb-[42px]">
                                رسته های شغلی
                            </div>
                          <div
                              className='grid grid-cols-1 gap-4 place-items-center h-96 rounded-lg  items-stretch overflow-y-scroll scrollbar-hide'>
                              <a className="border w-full text-center hover:border-luster-1 rounded-lg " href='#'> <span
                                  className="block mt-2">لوستر بلوری</span></a>
                              <a className="border w-full text-center hover:border-luster-1 rounded-lg" href='#'> <span
                                  className="block mt-2">لوستر پوسته ای</span></a>
                              <a className="border w-full text-center hover:border-luster-1 rounded-lg" href='#'><span
                                  className="block mt-2">لوستر سانتی </span></a>
                              <a className="border w-full text-center hover:border-luster-1 rounded-lg" href='#'><span
                                  className="block mt-2">لوستر حبابی </span></a>
                              <a className="border w-full text-center hover:border-luster-1 rounded-lg" href='#'><span
                                  className="block mt-2">تک شعله</span></a>
                              <a className="border w-full text-center hover:border-luster-1 rounded-lg" href='#'><span
                                  className="block mt-2">چراغ های باغی</span></a>
                              <a className="border w-full text-center hover:border-luster-1 rounded-lg" href='#'><span
                                  className="block mt-2">لوستر کریستالی</span></a>
                              <a className="border w-full text-center hover:border-luster-1 rounded-lg" href='#'> <span
                                  className="block mt-2">لوستر بلوری</span></a>
                              <a className="border w-full text-center hover:border-luster-1 rounded-lg" href='#'> <span
                                  className="block mt-2">لوستر چوبی</span></a>
                              <a className="border w-full text-center hover:border-luster-1 rounded-lg" href='#'> <span
                                  className="block mt-2">لوستر مدرن</span></a>
                              <a className="border w-full text-center hover:border-luster-1 rounded-lg" href='#'> <span
                                  className="block mt-2">اینه و شعمدان و کنسول</span></a>
                              <a className="border w-full text-center hover:border-luster-1 rounded-lg" href='#'> <span
                                  className="block mt-2">ساعت شمعدان برنزی</span></a>
                              <a className="border w-full text-center hover:border-luster-1 rounded-lg" href='#'> <span
                                  className="block mt-2">آباژور</span></a>
                          </div>
                      </div>
                      <div className="basis-2/3 h-[500px] w-full ">
                          <div className='grid grid-cols-1 gap-4 place-items-center  rounded-lg'>
                              <CustomSlider />
                          </div>
                      </div>
                  </div>
              </div>
      </section>
          <br/>
      <section className=" container mx-auto px-10 font-vazir font-bold">
              <div className="small-menu-item">
                  <div className="header-btn ">
                      <p className="leading-[4rem] mb-0 p-0 ">صدور پروانه کسب</p>
                  </div>
                  <div className="header-btn ">
                      <p className="leading-[4rem] mb-0">تمدید پروانه کسب</p>
                  </div>
                  <div className="header-btn">
                      <p className="leading-[4rem] mb-0">مدارک مورد نیاز مباشرت</p>
                  </div>
              </div>
      </section>
          <br/>
        <section>
      <div className='container font-vazir'>
          <div class="md:w-[500px]  lg:w-auto my-auto lg:grid lg:grid-cols-3 gap-4 sm:grid sm:grid-cols-1 sm:mx-auto items-center">
              <Link href={'/'}>
                  <div className=" basis-1/3 md:h-96 md:py-3 w-full">
                      <img className="lg:mr-0 h-full rounded-lg w-full" src="/image/location.jpg"/>
                      <h5 className='text-center border-2'>نزدیک ترین ها</h5>
                  </div>
              </Link>
              <Link href={'/'}>
                    <div class="basis-1/3 md:h-96 md:py-3  w-full">
                            <img className="lg:mr-0 h-full rounded-lg mix-blend-multiply w-full" src="/image/image-for-members.jpg"/>
                            <h5 className='text-center border-2'>اعضای صنفی اتحادیه</h5>
                    </div>
              </Link>
              <Link href={'/'}>
                    <div class=" basis-1/3 md:h-96 md:py-3 w-full">
                        <img className="lg:mr-0 h-full rounded-lg w-full" src="/image/9.jpg"/>
                        <h5 className='text-center border-2'>نیازمندی ها</h5>
                    </div>
              </Link>
          </div>
      </div>
</section>
          <section>
              <div className="container mt-12">
                  <AdvertismentSlider/>
              </div>
          </section>
      <br/>
          <section>
              <div className={`container mx-auto px-10`}>
                  <ProductCarousel/>
                  {/*product  carousel*/}
              </div>
          </section>
      <br/>
          <section>
              <div className='container font-vazir'>
                  <div class="md:w-[500px]  lg:w-auto my-auto lg:grid lg:grid-cols-3 gap-4 sm:grid sm:grid-cols-1 sm:mx-auto items-center">
                      <Link href={'/'}>
                          <div className=" basis-1/3 md:h-96 md:py-3 w-full">
                              <img className="lg:mr-0 h-full rounded-lg w-full" src="/image/pic/banner1.jpg"/>
                              <h5 className='text-center border-2'>طرح های خلاقیت</h5>
                          </div>
                      </Link>
                      <Link href={'/'}>
                          <div class="basis-1/3 md:h-96 md:py-3  w-full">
                              <img className="lg:mr-0 h-full rounded-lg mix-blend-multiply w-full" src="/image/calender.jpg"/>
                              <h5 className='text-center border-2'>خبرنامه نمایشگاهی</h5>
                          </div>
                      </Link>
                      <Link href={'/'}>
                          <div class=" basis-1/3 md:h-96 md:py-3 w-full">
                              <img className="lg:mr-0 h-full rounded-lg w-full " src="/image/pic/banner3.jpg"/>
                              <h5 className='text-center border-2'>دانستنی ها</h5>
                          </div>
                      </Link>
                  </div>
              </div>
          </section>
      <br/>
</>
    )
}

export default Main;