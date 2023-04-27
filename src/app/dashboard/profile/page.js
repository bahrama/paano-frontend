"use client"
import { InputText } from 'primereact/inputtext';
import Dashboard from "@/components/dashboard/Dashboard";

const Profile = () =>{
    return(
        <>
        <Dashboard>
            <section className=" container mx-auto px-10 font-bold mt-0 md:mt-20 font-vazir">
                <InputText type="text" className="p-inputtext-sm" placeholder="Small" /><br/>
                <InputText type="text" placeholder="Normal" /><br/>
                <InputText type="text" className="p-inputtext-lg" placeholder="Large" /><br/>
                <InputText type="text" className="p-inputtext-lg" placeholder="Large" /><br/>
                <InputText type="text" className="p-inputtext-lg" placeholder="Large" /><br/>
                <InputText type="text" className="p-inputtext-lg" placeholder="Large" /><br/>
            </section>
        </Dashboard>
        </>
    )
}

export default Profile;