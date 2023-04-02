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
const Main = () =>{
    return(
      <>
      <section>
      <div className='container mx-auto py-2 px-10'>
          <div className="flex flex-col sm:flex-row gap-5 items-center">
            <div className="bg-blue-100 basis-1/3 h-96 w-full">
              <div className='grid grid-cols-1 gap-4 place-items-center h-96 rounded-lg border'>
              <a className="border" href='#'>لوستر خانگی</a>
              <a href='#'>لوستر اداری</a>
              <a href='#'>لوستر سازی </a>
              <a href='#'>آینه و شمعدان</a>
              <a href='#'>ست روشنایی و لوستر</a>
              <a href='#'>لوستر امارت</a>
              </div>
            </div>
            <div className="bg-slate-400 basis-2/3 h-96 w-full">
              <div className='grid grid-cols-1 gap-4 place-items-center h-96 max-w-md max-h-full'>
           <img className='object-cover h-full w-full' src='https://www.tehcfu.com/Images/f4e4f84a-eab3-4334-b417-66ea32401607.jpg;jsessionid=edWbNJ1ZrZulGmxQ1oKuZ9qdRYGKBjydn_Ds6Qk5.alikhah'/>
            {/*<CustomSlider/>*/}
              </div>
            </div>
          </div>
      </div>
      </section>
<br/>
<section>
      <div className='container mx-auto py-2 px-10'>
          <div className="flex flex-col sm:flex-row gap-5 h-96 items-center">
          <div className="bg-red-600 basis-1/3 h-96 w-full">sdsd
              </div>
            <div className="bg-orange-900 basis-1/3 h-96 w-full">dssd
              </div>
              <div className="bg-fuchsia-900 basis-1/3 h-96 w-full">dssd
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