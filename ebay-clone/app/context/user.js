"use client"

import {createContext, useState, useEffect, useContext} from "react";
import {useRouter} from "next/navigation";
import {createClientComponentClient} from "@supabase/auth-helpers-nextjs";

const Context = createContext()

const Provider = ({children}) => {
    const router = useRouter()
}