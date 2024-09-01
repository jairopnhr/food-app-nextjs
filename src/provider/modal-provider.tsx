"use client"

import React, { useEffect, useState } from "react";
import StoreModel from "../components/modal/store-modal";

export const  ModalProvider = () => {
  const[isMounted , setIsMounted] = useState(false);


  useEffect(()=>{
    setIsMounted(true)
  },[]);
  if(!isMounted)
    {
        return null;
    }

    return ( 
         
        <StoreModel/>
        
    );
}