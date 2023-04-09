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
const Main = () =>{
    return(
      <>
      <section className="hidden md:block container mx-auto px-10">
          <div className="grid grid-cols-4 gap-2">
              <div className="text-center align-middle border-2 shadow-xl min-h-[30px]">
                  <p className="leading-10 pt-3">اخبار</p>
              </div>
              <div className="text-center align-middle border-2 shadow-xl min-h-[30px]">
                  <p className="leading-10 pt-3">همکاران اتحادیه</p>
              </div>
              <div className="text-center align-middle border-2 shadow-xl min-h-[30px]">
                  <p className="leading-10 pt-3">اعضای هیئت مدیره</p>
              </div>
              <div className="text-center align-middle border-2 shadow-xl min-h-[30px]">
                  <img className="float-left w-16 z-40" src="https://www.tehcfu.com/resources/pic/133.jpg"/>
                   <p className="leading-10 pt-3">
                       سخن رئيس اتحاديه
                   </p>
              </div>
          </div>
      </section>
      <section>
      <div className='container mx-auto py-2 px-10'>
          <div class="flex flex-col-reverse sm:flex-row gap-5 items-center">
            <div class=" basis-1/3 h-96 w-6 ">
              <div className='grid grid-cols-1 gap-4 place-items-center h-96 rounded-lg  items-stretch '>
                  <a className="border w-full text-center hover:border-luster-1 rounded-lg " href='#'> <span className="block mt-2">لوستر خانگی</span></a>
                  <a className="border w-full text-center hover:border-luster-1 rounded-lg" href='#'> <span className="block mt-2">لوستر اداری</span></a>
                  <a className="border w-full text-center hover:border-luster-1 rounded-lg" href='#'><span className="block mt-2">لوستر سازی </span></a>
                  <a className="border w-full text-center hover:border-luster-1 rounded-lg" href='#'> <span className="block mt-2">آینه و شمعدان</span></a>
                  <a className="border w-full text-center hover:border-luster-1 rounded-lg" href='#'> <span className="block mt-2">ست روشنایی و لوستر</span></a>
                  <a className="border w-full text-center hover:border-luster-1 rounded-lg" href='#'> <span className="block mt-2">لوستر امارت</span></a>
              </div>
            </div>
            <div class="basis-2/3 h-96 w-full ">
              <div className='grid grid-cols-1 gap-4 place-items-center h-96 rounded-lg'>
            <CustomSlider/>
              </div>
            </div>
          </div>
      </div>
      </section>
<br/>
<section>
      <div className='container mx-auto py-2 px-10'>
          <div class="flex flex-col sm:flex-row gap-5 h-96 items-center">
          <div class=" basis-1/3 h-96 w-full">
              <img className="h-full rounded-lg" src="https://www.tehcfu.com/Images/1e78e80e-4d9d-4546-b12f-7e9dbfd0d0af.jpg"/>
              </div>
            <div class=" basis-1/3 h-96 w-full">
                <img className="h-full rounded-lg" src="https://www.tehcfu.com/Images/47f61c7b-9b93-4110-8b3b-7f40547eaa6a.jpg"/>
              </div>
              <div class=" basis-1/3 h-96 w-full">
                  <img className="h-full rounded-lg" src="https://www.tehcfu.com/Images/a7bb456a-ebdf-4f2e-a640-a1a204754520.jpg"/>
              </div>
          </div>
      </div>
      </section>
      <br/>
      <br/>
</>
    )
}

export default Main;