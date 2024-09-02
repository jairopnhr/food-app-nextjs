"use client"

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useStoreModal } from "../../hook/use-store-modal";
import { Modal } from "../modal";
const formSchema = z.object({
    name: z.string().min(4,{message:"Store name should be minimum 4 characters "})


  });
 const StoreModel = () => {

    const storeModal =  useStoreModal();
    const[isLoading,setIsLoading] = useState(false);
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            name:""
        }


    })
    const onSubmit = async(values:z.infer<typeof formSchema>)=>
        {
            console.log(values)
        }
    return (
    <Modal 
    title ="Create a new Store"
    description="Add a new store to menage the products and categories" 
    isOpen={storeModal.isOpen}
    onClose={storeModal.onClose}>
       <div>
        <div className=" space-y-4 py-2 pb-4 ">
            <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField control={form.control} name="name" render={({field})=>(
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input 
                                    disabled={isLoading}
                                    placeholder="Your name store" 
                                    {...field}   
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                    />

                    <div className="pt-6 space-x-2 flex items-center justify-end w-full ">
                        <Button type="button"  variant={"outline"} size={"sm"}>Cancel</Button>
                        <Button type="submit"  size={"sm"}>continue</Button>
                    </div>
                  </form>
            </Form>
        </div>
       </div>
    </Modal>  
    

);
 }
  
 export default StoreModel;