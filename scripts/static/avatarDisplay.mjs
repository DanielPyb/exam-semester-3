import { getProfile } from "./getProfile.mjs";
import { isLoggedIn } from "./loginCheck.mjs";


export async function avatarDisplay(){
    const avatarContainer = document.getElementById("avatar-photo-container");
    if(isLoggedIn()){
        const username = localStorage.getItem("username");
        const avatarInfo = await getProfile(username);
        avatarContainer.innerHTML = `<img src="${avatarInfo.avatar}" style="width:100%">`
    }else{
    avatarContainer.innerHTML = `<img src="img/Gavel_0001.png" style="width:100%">`
    }
}