"use client"
import {SessionProvider} from "next-auth/react";
import {AppContext} from "@/context/appContext/AppContext";
import {useState} from "react";
export default function ContextProvider({ children }) {
    return <SessionProvider>{children}</SessionProvider>;
}