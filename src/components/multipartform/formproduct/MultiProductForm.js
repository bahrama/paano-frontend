import React, {useState} from "react";
import MultiProductFile from "../formproduct/MuliProductFile";
import MultiProductImage from "../imageuploaderproduct/MultiProductImage";
import MultiProductInformation from "../informationuploadproduct/MultiProductInformation"
const MultiProductForm = ()=>{
    const [page,setPage] = useState(0);
    const FormTitles = ["آپلود عکس","اطلاعات محصول","قیمت محصول"];
    const PageDisplay=()=>{
       switch (page){
           case 0: return <MultiProductFile/>;
           case 1: return <MultiProductInformation/>
           default: return <h1>Hellow World!</h1>
       }
    };
    function handleOnClickBtn(){
        setPage(page+1);
    }
    return(
        <div className={`product-form-parent`}>
            <div>{FormTitles[page]}</div>
            <div>{PageDisplay()}</div>
            <div>
                {
                    page > 0 && <button onClick={() => setPage(page - 1)} className={`product-btn`}>قبلی</button>
                }
                <button onClick={handleOnClickBtn} className={`product-btn`}>{page ===0|| page===1?"بعدی":"ارسال"}</button>
            </div>
        </div>
    );
}
export default MultiProductForm