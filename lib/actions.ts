"use server"
import { insertFavorite, deleteFavorite, fetchActivities, insertWatchLater } from "./data"
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
export async function insertWL(FormData: FormData){
    const title_id = FormData.get("title_id") as string
    const user_id = FormData.get("user_id") as string
    if (!title_id || !user_id){    
        throw new Error("Invalid form data")
        }
    
    await insertWatchLater(title_id, user_id)
    return console.log(title_id, user_id)

}


export async function signOutUser(){
    await signOut()
}

export async function getActivites(page: number, userEmail: string){
    const activities = await fetchActivities(page, userEmail)
    return activities
}
