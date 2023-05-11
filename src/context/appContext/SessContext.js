"use client"
import {createContext,useContext} from "react";

export const SessContext = createContext();
export const useAppContext = () => useContext(SessContext);