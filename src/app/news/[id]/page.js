"use client"
import axios  from "axios";
import SinglePageNews from "@/components/news-components/single-page/SinglePageNews";
import {useEffect, useState} from "react";

const NewsPageHome = ({params})=>{
    const [data,setData] = useState();
    useEffect(()=>{
       axios.get('http://localhost:8084/api/news/find',{params:{id:params.id}})
            .then(res => console.log(res))
            .catch(err => console.log(err))
    },[]);
    document.title = "newwwwsssss";
    return(
        <div className={`container h-screen mx-auto px-10 mt-1`}>
            <SinglePageNews data={data}/>
        </div>
    );
}
export default NewsPageHome