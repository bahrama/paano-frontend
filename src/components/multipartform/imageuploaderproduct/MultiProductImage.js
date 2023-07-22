import React from "react";
import MultiProductFile from "../formproduct/MuliProductFile"
const MultiProductImage = ()=>{
    return(
        <div class={`grid grid-cols-2 px-10`}>
          <div>
              <label>عکس محصول 1</label>
              <MultiProductFile url={"http://localhost:8084/api/seller/upload/image1"}/>
          </div>
          <div>
              <label>عکس محصول 2</label>
              <MultiProductFile url={"http://localhost:8084/api/seller/upload/image2"}/>
          </div>
          <div>
              <label>عکس محصول 3</label>
              <MultiProductFile url={"http://localhost:8084/api/seller/upload/image3"}/>
          </div>
          <div>
              <label>عکس محصول 4</label>
              <MultiProductFile url={"http://localhost:8084/api/seller/upload/image4"}/>
          </div>
          <div>
              <label>عکس محصول 5</label>
              <MultiProductFile url={"http://localhost:8084/api/seller/upload/image5"}/>
          </div>
        </div>
    );
}
export default MultiProductImage