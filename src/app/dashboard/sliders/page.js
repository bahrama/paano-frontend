"use client"
import React, {useRef, useState} from "react";
import Dashboard from "@/components/dashboard-user/Dashboard";
import {InputText} from "primereact/inputtext";
import { Toast } from 'primereact/toast';
import {InputSwitch} from "primereact/inputswitch";
import {Controller,useForm} from "react-hook-form";
import axios from "axios";
import {getCookies} from "cookies-next";

const DashboardSliders=()=>{
    const {register,setValue,handleSubmit,watch,formState:{errors},control} = useForm()
    const fd = new FormData()
    const toast = useRef(null);
    const [preview,setPreview] = useState(true)
    const [filess,setFiless] = useState()
    const fakeSlider=[
        {
            imageSlider:"http://localhost:3000/image/1.jpg",
            title:"لوستر جدید",
            link:"http:/localhost:3000/post/5560",
            status:"preview",
            isActive:true,
            isBlockLink:false
        },
        {
            imageSlider:"http://localhost:3000/image/3.jpg",
            title:"لوستر",
            link:"http:/localhost:3000/post/5563",
            status:"preview",
            isActive:true,
            isBlockLink:false
        },
        {
            imageSlider:"http://localhost:3000/image/12.png",
            title:"لوستر",
            link:"http:/localhost:3000/post/5563",
            status:"preview",
            isActive:true,
            isBlockLink:false
        },
        {
            imageSlider:"http://localhost:3000/image/11.jpg",
            title:"لوستر",
            link:"http:/localhost:3000/post/5563",
            status:"preview",
            isActive:true,
            isBlockLink:false
        },
        {
            imageSlider:"http://localhost:3000/image/10.jpg",
            title:"لوستر",
            link:"http:/localhost:3000/post/5563",
            status:"preview",
            isActive:true,
            isBlockLink:false
        }
    ];
    const myToken = getCookies('auth');
    const config = {
        headers: {
            'content-type': 'multipart/form-data',
            'Authorization':'Bearer '+ Object.values(myToken)[0]
        }};
    function getCheckFile(filename){
        if(filename.split('.')[1].toLowerCase() === "png"){
           return  true
        }else if (filename.split('.')[1].toLowerCase() === "jpeg"){
            return true
        }else if (filename.split('.')[1].toLowerCase() === "jpg"){
            return true
        }else {
            return false
        }
    }
    const letsCheck = (data)=>{
        if(data.file){
            if (getCheckFile(data.file[0].name)){
                if(data.checked == undefined) data.checked = false
                fd.append("header",data.header)
                fd.append("file",data.file[0],data.file[0].name)
                fd.append("checked",data.checked)
                fd.append("link",data.link)
                sendNewSlider(fd)
            }else {
                toast.current.show({severity: 'error', summary: 'عكس با فرمت png و jpg ارسال شود', life:5000});
            }
        }else {
            toast.current.show({severity: 'error', summary: 'ارسال بدون عکس ممکن نمی باشد', life:5000});
        }
    }

    const sendNewSlider = (fd)=>{
        axios.post("http://localhost:8082/api/panel-admin/slider/add/",fd,config)
            .then(response => console.log("response add new slider",response))
            .catch(error => console.log("error resonse new slider",error))
    }

    // const sendGetRequest=()=>{
    //     axios.get("http://localhost:8084/api/slider/")
    //         .then(res => console.log("response",res))
    //         .catch(error => console.log("error",error))
    // }
    return(
        <>
            <Dashboard>
                <Toast ref={toast}></Toast>
               <div className={`font-vazir`}>
                   <div className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center text-center font-vazir`}>
                       {
                           fakeSlider.map((slider,index)=>{
                               return(
                                   <div key={index} className={`w-[300px] mx-0 px-0 h-auto py-3 bg-white rounded-sm drop-shadow-xl mb-8 `}>
                                       <h2>{slider.title}</h2>
                                       <div className={`w-[300px] h-[200px] flex justify-center items-center`}>
                                           <img src={`${slider.imageSlider}`} alt={slider.title} className={`max-w-full max-h-full p-0 m-0`}/>
                                       </div>
                                       <div className={`py-2`}>
                                            <InputSwitch  key={index} checked={slider.isActive} onChange={e => console.log("valuee:",)}/>
                                       </div>
                                       <div className="p-input-icon-left">
                                            <i className="pi pi-link" />
                                            <InputText value={slider.link} />
                                        </div>
                                   </div>
                               );
                           })
                       }
                       <div className={`w-[300px] mx-0 px-0  py-3 bg-white rounded-sm drop-shadow-xl mb-8`}>
                           <form onSubmit={handleSubmit(letsCheck)} className={``}>
                               <InputText type="text"
                                          placeholder={`افزودن متن`}
                                          {...register("header",{required:true})}
                               />

                               <img src={filess} alt={`title`} className={`max-w-full bg-green-300`}/>
                               <input type="file"
                                      onChange={(e)=>{
                                          setValue("file",e.target.files)
                                          setFiless(URL.createObjectURL(e.target.files[0]))
                                      }}
                                      accept="image/*"
                               />

                               <div className={``}>
                                   <Controller
                                               name="checked"
                                               control={control}
                                               render={({ field, fieldState})=>(
                                                   <>
                                                        <InputSwitch checked={field.value}
                                                                     onChange={(e)=>field.onChange(e.value)}
                                                        />
                                                   </>
                                               )}
                                   />
                               </div>
                               <div className={`mx-auto`}>
                                   <Controller
                                       name="link"
                                       control={control}
                                       render={({ field, fieldState})=>(
                                           <>
                                               <InputText
                                                   placeholder="آدرس اسلایدر"
                                                   onChange={(e)=>field.onChange(e.target.value)}
                                               />
                                           </>
                                       )}
                                   />

                               </div>
                               <button type="submit"  className={`btn-slider-add hover:bg-green-300`}> افزودن</button>
                           </form>
                       </div>
                   </div>

               </div>
            </Dashboard>
        </>
    );
}
export default DashboardSliders