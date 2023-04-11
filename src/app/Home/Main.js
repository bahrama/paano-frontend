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
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import React from 'react';
import Link from 'next/link';
const Main = () =>{
    return(
      <>
      <section className="md:block container mx-auto px-0 font-bold">
          <div className="lg:grid lg:grid-cols-5 gap-2 md:grid md:grid-cols-2">
              <div className="text-center bg-luster-1 text-white align-middle border-2 shadow-xl ">
                  <p className="leading-10 pt-3">شکابات</p>
              </div>
              <div className="text-center text bg-luster-1 text-white align-middle border-2 shadow-xl ">
                  <p className="leading-10 pt-3">اخبار</p>
              </div>
              <div className="text-center text-white bg-luster-1 align-middle border-2 shadow-xl ">
                  <p className="leading-10 pt-3 text-">اعضای هیئت مدیره</p>
              </div>
              <div className="text-center text-white bg-luster-1 align-middle border-2 shadow-xl ">
                  <p className="leading-10 pt-3">همکاران اتحادیه</p>
              </div>
              <Link href={"/"}>
              <div className="text-center h-[68px] text-white align-middle border-2 bg-luster-1 shadow-xl">
                  <img className="float-left w-16 z-40 object-" src="/image/133.png"/>
                   <p className="leading-10 pt-4 md:text-base lg:text-base">
                       سخن رئيس اتحاديه
                   </p>
              </div>
              </Link>
          </div>
      </section>
      <section>
          <div className="container grid grid-cols-1 xl:relative xl:h-[385px]">
              <div className="w-auto xl:absolute xl:left-0 xl:top-0 xl:w-[1100px]">
                  <CustomSlider />
              </div>
              <div>
                  <div className='grid grid-cols-2 pt-2 xl:gap-1 xl:absolute xl:grid xl:grid-cols-1 xl:right-0 xl:top-3'>
                      <a className=" border text-center hover:border-luster-1 rounded-lg smallphone:w-20 smallphone:h-14 sm:w-60 sm:h-10" href='#'> <span className="block mt-2">لوستر خانگی</span></a>
                      <a className=" border text-center hover:border-luster-1 rounded-lg smallphone:w-20 smallphone:h-14 sm:w-60 sm:h-10" href='#'> <span className="block mt-2">لوستر اداری</span></a>
                      <a className=" border text-center hover:border-luster-1 rounded-lg smallphone:w-20 smallphone:h-14 sm:w-60 sm:h-10" href='#'><span className="block mt-2">لوستر سازی </span></a>
                      <a className=" border text-center hover:border-luster-1 rounded-lg smallphone:w-20 smallphone:h-14 sm:w-60 sm:h-10" href='#'> <span className="block mt-2">آینه و شمعدان</span></a>
                      <a className=" border text-center hover:border-luster-1 rounded-lg smallphone:w-20 smallphone:h-14 sm:w-60 sm:h-10" href='#'> <span className="block mt-2">ست روشنایی و لوستر</span></a>
                      <a className=" border text-center hover:border-luster-1 rounded-lg smallphone:w-20 smallphone:h-14 sm:w-60 sm:h-10" href='#'> <span className="block mt-2">لوستر امارت</span></a>
                      <a className=" border text-center hover:border-luster-1 rounded-lg smallphone:w-20 smallphone:h-14 sm:w-60 sm:h-10" href='#'> <span className="block mt-2">لوستر امارت</span></a>
                      <a className=" border text-center hover:border-luster-1 rounded-lg smallphone:w-20 smallphone:h-14 sm:w-60 sm:h-10" href='#'> <span className="block mt-2">لوستر امارت</span></a>
                  </div>
              </div>
          </div>
      </section>
<br/>
<section>
      <div className='container font-vazir'>
          <div class="md:w-[500px] md:mr-[100px] lg:w-auto my-auto lg:grid lg:grid-cols-3 gap-4 sm:grid sm:grid-cols-1 items-center">
              <Link href={'/'}>
                  <div className=" basis-1/3 md:h-96 md:py-3 w-full">
                      <img className="md:mr-4 lg:mr-0 h-full rounded-lg" src="/svg/ir.svg"/>
                      <h5 className='text-center border-2'>نزدیک ترین ها</h5>
                  </div>
              </Link>
              <Link href={'/'}>
                    <div class="basis-1/3 md:h-96 md:py-3  w-full">
                            <img className="md:mr-16 lg:mr-0 h-full rounded-lg mix-blend-multiply" src="/image/partmentship.jpg"/>
                            <h5 className='text-center border-2'>اعضای صنفی اتحادیه</h5>
                    </div>
              </Link>
              <Link href={'/'}>
                    <div class=" basis-1/3 md:h-96 md:py-3 w-full">
                        <img className="md:mr-6 lg:mr-0 h-full rounded-lg" src="/image/9.jpg"/>
                        <h5 className='text-center border-2'>نیازمندی ها</h5>
                    </div>
              </Link>
          </div>
      </div>
      </section>
      <br/>
      <br/>
</>
    )
}

export default Main;