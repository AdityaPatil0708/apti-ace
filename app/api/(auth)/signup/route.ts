import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    const {name, email, password} = await req.json();
    try {
        if(!name || !email || !password){
            
        }
    } catch (e) {
        
    }
}