import { getProfile } from "../API/profile/getProfile.mjs";
import { isLoggedIn } from "../Validation/loginCheck.mjs";

export async function creditDisplay(){
    const credit = document.getElementById("credit-btn")
    if(isLoggedIn()){
        const username = localStorage.getItem("username")
        const avatarInfo = await getProfile(username)
        credit.innerHTML = `Credit: <span class="tabular-font">${avatarInfo.credits}</span>`
    } else {
        credit.style.display = "none";
    }
}