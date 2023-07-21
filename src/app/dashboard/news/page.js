"use client"
import Dashboard from "@/components/dashboard-user/Dashboard";
import React, {createElement, useEffect, useState} from "react";
import {Panel} from "primereact/panel";
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import { Editor } from 'primereact/editor';
//todo this page need to be complete
const News = ()=>{
    const [text, setText] = useState('');
    function create(props){
        console.log("proooops",props)
        return <props.element placeholder={props.place}></props.element>;
    }
    return(
        <Dashboard>
            <div className={`px-10`}  onContextMenu={(e)=>e.preventDefault()}>
                <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }}/>
            </div>
            <div>
                {
                    text
                }
            </div>
        </Dashboard>
    );
}
export default News;