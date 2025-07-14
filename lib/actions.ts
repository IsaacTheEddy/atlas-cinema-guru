"use server"
import { insertFavorite, deleteFavorite } from "./data"
import { signOut } from "@/lib/auth";
import { auth } from "./auth"

export async function insertFav(FormData: FormData){
    const title_id = FormData.get("title_id") as string
    const user_id = FormData.get("user_id") as string
    if (!title_id || !user_id){    
        throw new Error("Invalid form data")
        }
    
    await insertFavorite(title_id, user_id)
    return console.log(title_id, user_id)

}
export async function deleteFav(FormData: FormData){
    const title_id = FormData.get("title_id") as string
    const user_id = FormData.get("user_id") as string
   if (!title_id || !user_id){    
        throw new Error("Invalid form data")
        }
    
    await deleteFavorite(title_id, user_id)
    return console.log(title_id)

}
export async function nextPage(FormData: FormData){
    const page = FormData.get("next") as string
    console.log(page)
    return page

}

export async function signOutUser(email: string){
    await signOut()

}