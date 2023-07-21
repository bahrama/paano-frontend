"use client"
import React, {useState, useEffect, useRef, useLayoutEffect} from 'react';
import axios from "axios";
import Dashboard from '@/components/dashboard-admin-seller/Dashboard'
import {getCookie, getCookies} from "cookies-next";
import {Toast} from "primereact/toast";
import {ProductTable} from "@/components/product-seller-table/ProductTable";
import {useRouter} from "next/navigation";

const  ProductsDemo=()=> {
    const cookie = getCookies("auth-keycloak");
    const toast = useRef(null);
    const [data,setData] = useState([]);
    const [countError,setCountError] = useState(0);
    const [isLoading,setIsLoading] = useState(true);
    const route = useRouter();
    useLayoutEffect(() => {
       fetchData();
    }, []);
    const fetchData = ()=>{
        console.log("cooooooooooooooooockckckcccccccc",Object.values(cookie)[0])
        axios.post("http://localhost:8084/api/seller/all",null,{
            headers:{
                'Authorization': 'Bearer '+Object.values(cookie)[0]
            }})
            .then((res)=>{
                setData(res.data)
            })
            .catch((error)=>{
                console.log("axios message error",error)
            })
    }
    console.log("dataaaaaaaaaaa",data)
    const custome = [
        {
        description:"لوستر اصلی مشکی ایتالیایی",
        haveFlame:true,
        haveHook:true,
        materialType:"FOLADI",
        powerSourceType:"BARGH_SHARI",
        powerSourceVoltage:0,
        productId:2,
        productName:"لوستر حبابی مشکی ایتالیایی",
        productType:"LUSTERHOBABY",
        totalFlames:4
        }
    ]
    return(
        <Dashboard path={"جدول محصولات"} >
            <Toast ref={toast}></Toast>
            <div>
                <ProductTable data={data}/>
            </div>
        </Dashboard>
    );
}
export default  ProductsDemo