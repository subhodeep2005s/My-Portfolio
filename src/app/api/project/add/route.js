import Home from "@/models/Home";
import connectToDB from "../../../../../database";
import { NextResponse } from "next/server";
import Project from "@/models/Project";
export const dynamic="force-dynamic"


export async function post(req){
 
try {
    connectToDB()
    const extractData=req.json()
    const saveData= await Project.create(extractData)
    if(saveData){
        NextResponse.json({
            success:true,
            message:'Data saved successfull'
        })
    }else{
        return NextResponse.json({
            success:false,
            message:"please try again later"
        })
    }
} catch (error) {
    console.log(e);
    return NextResponse.json({
        sucess:false,
        message:"please try again later"
    })
}

}