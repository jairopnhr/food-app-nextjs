"use client"

import React from "react";
import { useStoreModal } from "../../hook/use-store-modal";
import { Modal } from "../modal";

 const StoreModel = () => {
    const storeModal =  useStoreModal();
    return (
    <Modal 
    title ="Create a new Store"
    description="Add a new store to menage the products and categories" 
    isOpen={storeModal.isOpen}
    onClose={storeModal.onClose}>
        Form to create a new store
    </Modal>  
    

);
 }
  
 export default StoreModel;