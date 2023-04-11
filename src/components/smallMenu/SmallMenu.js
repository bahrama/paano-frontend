import React from "react";
import Link from "next/link";

const SmallMenu = () =>{
    return(
        <section className=" container mx-auto px-10 font-bold">
            <div className="small-menu-item">
                <div className="header-btn ">
                    <p className="leading-10 pt-1 ">صدور پروانه کسب</p>
                </div>
                <div className="header-btn ">
                    <p className="leading-10 pt-1">تمدید پروانه کسب</p>
                </div>
                <div className="header-btn">
                    <p className="leading-10 pt-1 ">مدارک مورد نیاز مباشرت</p>
                </div>
            </div>
        </section>
    )
}
export default SmallMenu;