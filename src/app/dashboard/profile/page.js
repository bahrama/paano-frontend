"use client"
import { InputText } from 'primereact/inputtext';
import Dashboard from "@/components/dashboard-user/Dashboard";
import {Controller} from "react-hook-form";
import {classNames} from "primereact/utils";
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
const Profile = () =>{
    return(
        <>

        <Dashboard>
            <section className="container-profile-dashboard ">
                <div className={`grid grid-cols-1 md:grid-cols-2`}>
                    <div className={`col-profile`}>
                        <img src={"/image/user.jpeg"}/>
                        <h3>نوع کاربر: ادمین</h3>
                    </div>
                    <div className={`col-profile-2`}>
                        <h4 className={`md:col-span-3`}>مشخصات فردی</h4>
                        <div className="span-profile">
                            <label htmlFor="firstName" className={`w-full`}>نام:</label>
                            <InputText   id="firstName" className={`w-full`}/>
                        </div>
                        <div className="relative span-profile">
                            <label htmlFor="lastName" className={`w-full`}>نام خانوادگی:</label>
                            <InputText   id="lastName" className={`w-full`}/>
                        </div>
                        <div className="relative  ">
                            <label htmlFor="phone" className={`w-full`}>تلفن همراه:</label>
                            <InputText   id="phone" className={`w-full`} />
                        </div>
                        <div className=" md:col-profile-address lg:col-profile-address lg:pr-0 w-full">
                            <label htmlFor="address" className={``}>آدرس:</label>
                            <InputText   id="address" className={`hidden md:block md:w-full lg:w-full`} />
                            <InputTextarea className={`block md:hidden lg:hidden w-full`} rows={5} cols={30} />
                        </div>
                        <div className={`md:col-span-3 md:flex md:justify-center`}>
                            <Button label="ذخیره" className={`items-center text-center`}/>
                        </div>
                    </div>
                </div>
            </section>
        </Dashboard>

        </>
    )
}

export default Profile;