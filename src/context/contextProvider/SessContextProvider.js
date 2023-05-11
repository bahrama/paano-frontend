"use client"
import {SessionProvider} from "next-auth/react";
import {SessContext} from "@/context/appContext/SessContext";
import {useState} from "react";
export default function SessContextProvider({ children }) {
    return <SessionProvider>{children}</SessionProvider>;
}