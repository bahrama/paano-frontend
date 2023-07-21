"use client"
import React, {useEffect, useRef, useState} from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { ProgressBar } from 'primereact/progressbar';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { Tag } from 'primereact/tag';
import DashboardSeller from "@/components/dashboard-admin-seller/Dashboard";
import {classNames} from "primereact/utils";
import {Controller} from "react-hook-form";
import {InputText} from "primereact/inputtext";
import MultiProductForm from "@/components/multipartform/formproduct/MultiProductForm";
import axios from "axios";
const SellerProduct = ()=>{
    useEffect(()=>{document.title="افزودن محصول جدید"},[])
    return (
       <DashboardSeller path={"افزودن محصول"}>
        <section>
            <MultiProductForm/>
        </section>
       </DashboardSeller>
    )
}
export default SellerProduct