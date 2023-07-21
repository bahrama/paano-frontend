import React, {useContext, useEffect, useReducer, useState} from "react";
import {InputText} from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import {InputNumber} from "primereact/inputnumber"
import { Dropdown } from 'primereact/dropdown';
import {InformationContext} from "@/components/multipartform/formproduct/MultiProductForm";
import {useForm} from "react-hook-form";

const product_type=[
    { name: 'لوستر بلوری', code: 'LUSTERBLURY' },
    { name: 'لوستر پوسته ای', code: 'LUSTERPOSTEHY' },
    { name: 'لوستر سانتی', code: 'LUSTERSANTY'},
    { name: 'لوستر حبابی', code: 'LUSTERHOBABY' },
    { name: 'لوستر تک شعله', code: 'LUSTERTAKSHOLE' }
];
const material_type=[
    {name:'برنجی',code:'BRENGI'},
    {name:'شیشه ای',code:'SHISHEHI'},
    {name:'فولادی',code:'FOLADI'}
];
const power_source_type=[
    {name:'برق شهری',code:'BARGH_SHARI'},
    {name:'باتری',code:'BATTERY'}
];
const MultiProductInformation=()=>{
    const [informationState,dispatch] = useContext(InformationContext);
    const {register,formState:{errors}} = useForm()

    return(
        <div className='my-2 border-none h-auto  w-auto shadow-3xl py-5 px-5 rounded-3 font-vazir'>
            <div className={`grid grid-cols-1 gap-4`}>
                    <InputText placeholder="نام محصول"  className={`rounded-r-none`}
                               onChange={(e)=>dispatch({type:'SET_PRODUCT_NAME',value:e.target.value})}
                               value={informationState.productName}
                               required={true}/>
                    {errors.productName?.type === "required" && (<span className={`border border-red-300`}>نام محصول را وارد نمایید</span>)}
                    <Dropdown value={informationState.productType}
                              onChange={(e) =>dispatch({type:'SET_PRODUCT_TYPE',value:e.value})}
                              options={product_type}
                              optionLabel="name"
                              placeholder="نوع محصول" className="w-full md:w-14rem" />
                    <Dropdown value={informationState.materialType}
                              onChange={(e) =>dispatch({type:'SET_MATERIAL_TYPE',value:e.value})}
                              options={material_type}
                              optionLabel="name"
                              placeholder="نوع جنس محصول" className="w-full md:w-14rem" />
                    <div>
                        <InputNumber placeholder="عرض"  className={`rounded-r-2xl`} onValueChange={(e)=>dispatch({type:'SET_WIDTH',value:e.target.value})} value={informationState.width}/>
                        <span className="bg-gray-300 w-[50px] h-[50px] p-3 rounded-l-2xl text-black">سانتی متر</span>
                    </div>
                    <div>
                        <InputNumber placeholder="طول"  className={`rounded-r-2xl`} onValueChange={(e)=>dispatch({type:'SET_LENGTH',value:e.target.value})} value={informationState.length}/>
                        <span className="bg-gray-300 w-[50px] h-[50px] p-3 rounded-l-2xl text-black">سانتی متر</span>
                    </div>
                    <div>
                        <InputNumber placeholder="وزن"  className={`rounded-r-2xl`} onValueChange={(e)=>dispatch({type:'SET_WEIGHT',value:e.target.value})} value={informationState.weight}/>
                        <span className="bg-gray-300 w-[50px] h-[50px] p-3 rounded-l-2xl text-black ">گرم</span>
                    </div>
                    <div className={`px-8`}>
                        <span className="text-black">آویز سقفی</span>
                        <Checkbox onChange={(e)=>dispatch({type:'SET_HOOK',value:e.checked})} checked={informationState.haveHook}/>
                    </div><div className={`px-8`}>
                        <span className="text-black">لاله دارد</span>
                        <Checkbox onChange={(e)=>dispatch({type:'SET_FLAME',value:e.checked})} checked={informationState.haveFlame}/>
                    </div>
                    <div className={informationState.haveFlame?"block grid grid-cols-1":"hidden"}>
                        <span className="text-black">تعداد لاله ها:</span>
                        <InputNumber onValueChange={(e)=>dispatch({type:'SET_TOTAL_FLAMES',value:e.target.value})} value={informationState.totalFlames}/>
                    </div>
                    <Dropdown value={informationState.powerSourceType}
                          onChange={(e) =>dispatch({type:'SET_POWER_SOURCE_TYPE',value:e.value})}
                          options={power_source_type}
                          optionLabel="name"
                          placeholder="نوع برق محصول" className="w-full md:w-14rem" />
                    <div className={"grid grid-cols-1"}>
                        <span className="text-black">ولتاژ برق:</span>
                        <InputNumber onValueChange={(e)=>dispatch({type:'SET_POWER_SOURCE_VOLTAGE',value:e.target.value})} value={informationState.powerSourceVoltage}/>
                    </div>
            </div>
        </div>
    );
}
export default MultiProductInformation