"use client"
import Dashboard from "@/components/dashboard/Dashboard";
import React,{ useState } from "react";
import {Panel} from "primereact/panel";
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import { Editor } from 'primereact/editor';
//todo this page need to be complete
const News = ()=>{
    const [text, setText] = useState('');
    return(
        <Dashboard>
            <section>
                <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} />
                <div>
                    <Button label="ذخیره" icon="pi pi-check" size="large"/>
                    <Button label="پاک کردن" severity="secondary" size="small" />
                </div>
            </section>
        </Dashboard>
    );
}
export default News;