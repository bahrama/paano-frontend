import React, {useContext} from "react";
import {InputText} from "primereact/inputtext";
import {Dropdown} from "primereact/dropdown";
import {InputNumber} from "primereact/inputnumber";
import {Checkbox} from "primereact/checkbox";
import { InputTextarea } from "primereact/inputtextarea";
import {InformationContext} from "@/components/multipartform/formproduct/MultiProductForm";
const MultiProductDescription = ()=>{
    const [informationState,dispatch] = useContext(InformationContext);
    return(
        <div className='my-2 border-none h-auto  w-auto shadow-3xl py-5 px-5 rounded-3 font-vazir'>
            <div className={`grid grid-cols-1 gap-4`}>
                <div>
                    <InputNumber placeholder="قیمت محصول"  className={`rounded-r-2xl`} onValueChange={(e)=>dispatch({type:'SET_PRICE',value:e.target.value})} value={informationState.price}/>
                    <span className="bg-gray-300 w-[50px] h-[50px] p-3 rounded-l-2xl text-black">ریال</span>
                </div>
                <div>
                    <InputTextarea value={informationState.description} onChange={(e) =>dispatch({type:'SET_DESCRIPTION',value:e.target.value})} rows={5} cols={30} />
                </div>
            </div>
        </div>
    );
}
export default MultiProductDescription