import { create } from "zustand"


interface useStoreModelProps
{
    isOpen:boolean,
    onOpen:()=>void,
    onClose:()=>void
}
export const useStoreModal = create<useStoreModelProps>((set)=>({
    isOpen:true , 
    onClose: ()=>set({isOpen:false}),
    onOpen:()=>set({isOpen:true})
}))
