"use client"
import Dashboard from "@/components/dashboard-admin/Dashboard";
import base64url from "base64url";
import {useEffect} from "react";
import {sha256} from "js-sha256";
import axios from "axios";
import {getCookie} from "cookies-next";

const Seller = () => {



    return(
        <>
            <Dashboard>
{/*                {generateState(30)}<br/>
                {generateCodeVerifier()}<br/>
                {generateCodeChallenge()}*/}

            </Dashboard>
        </>
    )
}
export default Seller;