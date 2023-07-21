"use client"
import React, {useEffect} from "react";
import CustomSlider from "@/components/slider/CustomSlider";
import axios from "axios";

const News=()=>{
    const fakeData ={
        newsUrl:"",
        newsTitle:"",
        newsImages:''
    }

    useEffect(()=>{
        axios.get("http://localhost:8084/api/news",{
            headers:{
                "Content-Type":"application/json"
            }
        })
            .then(response => console.log("axios news Response:",response))
            .catch(error => console.log("error in news axios:",error))
    },[])

    return(
        <>
        <section className="container mx-auto pt-0 px-10 mt-1 font-vazir">
            <div className='lg:pt-11'>
                <div className="flex flex-col-reverse sm:flex-row gap-5 items-center pt-12">
                    <div className="basis-1/3  mt-0 sm:mt-[100px] md:mt-0 w-full rounded-lg font-vazir">
                        <div className="basis-1/3 mt-[100px] sm:mt-[100px] md:mt-0 w-full rounded-lg font-vazir">
                            <div className="text-white  bg-luster-2 text-center py-5 mb-[42px]">
                                آخرین اخبار
                            </div>
                            <div
                                className='grid grid-cols-1 gap-4 place-items-center h-96 rounded-lg  items-stretch'>
                                <a className=" w-full px-2 hover:text-luster-1 hover:border-r-4 hover:border-r-luster-1" href='#'> <span
                                    className="block mt-2">اخبار لوستر-موضوع</span></a>
                                <a className=" w-full px-2 hover:text-luster-1 hover:border-r-4 hover:border-r-luster-1" href='#'> <span
                                    className="block mt-2">اخبار لوستر-موضوع</span></a>
                                <a className="w-full px-2 hover:text-luster-1 hover:border-r-4 hover:border-r-luster-1" href='#'><span
                                    className="block mt-2">اخبار لوستر-موضوع</span></a>
                                <a className=" w-full px-2 hover:text-luster-1 hover:border-r-4 hover:border-r-luster-1" href='#'> <span
                                    className="block mt-2">اخبار لوستر-موضوع</span></a>
                                <a className=" w-full px-2 hover:text-luster-1 hover:border-r-4 hover:border-r-luster-1" href='#'> <span
                                    className="block mt-2">اخبار لوستر-موضوع</span></a>
                                <a className=" w-full px-2 hover:text-luster-1 hover:border-r-4 hover:border-r-luster-1" href='#'> <span
                                    className="block mt-2">اخبار لوستر-موضوع</span></a>
                                <a className=" w-full px-2 hover:text-luster-1 hover:border-r-4 hover:border-r-luster-1" href='#'> <span
                                    className="block mt-2">بیشتر...</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="basis-2/3 h-[500px] w-full ">
                        <div className='grid grid-cols-1 gap-4 place-items-center  md:h-96 rounded-lg'>
                            <CustomSlider />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="container mx-auto mt-5 flex flex-col-reverse">
            <div className="flex flex-row mx-auto grid grid-cols-2 md:grid md:grid-cols-4">
                <div className="px-5">
                    <img src="/image/flaticons/user-card.jpg" className="w-[100px] drop-shadow-md py-5 mx-auto"/>
                    <p className="text-center"> کارت مباشرت</p>
                </div>
                <div className="px-5">
                    <img src="/image/flaticons/flat-cert.jpg" className="w-[100px] drop-shadow-md py-5 mx-auto"/>
                    <p className="text-center">گواهینامه اماده تحویل</p>
                </div>
                <div className="px-5">
                    <img src="/image/flaticons/active-cert.jpg" className="w-[100px] drop-shadow-md py-5 mx-auto"/>
                    <p className="text-center">گواهینامه های فعال</p>
                </div>
                <div className="px-5">
                    <img src="/image/flaticons/scan-cert.jpg" className="w-[100px] drop-shadow-md py-5 mx-auto"/>
                    <p className="text-center">استعلام گواهی</p>
                </div>
            </div>
        </section>
        </>
    )
}
export default News;