"use client"

import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";

interface ModalProps
{
    title:string,
    description:string,
    isOpen:boolean,
    onClose:()=>void,
    children?:React.ReactNode
}
export const Modal = ({title,description,isOpen,onClose,children}:ModalProps)=>
    {
    return(
                <div>
                    <Dialog open={isOpen}>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>{title}</DialogTitle>
                                <DialogDescription>{description}</DialogDescription>
                            </DialogHeader>
                                <div>{children}</div>
                        </DialogContent>
                    </Dialog>
                </div>
            )
}