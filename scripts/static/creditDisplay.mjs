import { getProfile } from "./getProfile.mjs"
import { isLoggedIn } from "./loginCheck.mjs"

export async function creditDisplay(){
    const credit = document.getElementById("credit-btn")
    if(isLoggedIn){
        const username = localStorage.getItem("username")
        const avatarInfo = await getProfile(username)
        credit.innerHTML = `Credit: ${avatarInfo.credits}`
    } else {
        credit.style.display = "hidden";
    }
}