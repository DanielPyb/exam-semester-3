import { getProfile } from "../API/profile/getProfile.mjs";
import { isLoggedIn } from "../Validation/loginCheck.mjs";

export async function avatarDisplay(){
    const avatarContainer = document.getElementById("avatar-photo-container");
    if(isLoggedIn()){
        const username = localStorage.getItem("username");
        const avatarInfo = await getProfile(username);
        avatarContainer.innerHTML = `<img src="${avatarInfo.avatar}" style="width:100%">`
    }else{
    avatarContainer.innerHTML = `<img src="img/gavel_purple.png" style="width:100%">`
    }
}