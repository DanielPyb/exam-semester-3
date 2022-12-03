import { baseURL } from "../API/links.mjs";
import { validateURL } from "../API/validate.mjs"
const username = localStorage.getItem("username");

export async function updateAvatar(){
    const newAvatarIMG = document.getElementById("avatar-photo")
    console.log(newAvatarIMG)
    console.log(newAvatarIMG.value)
    console.log("hello")
    if(validateURL(newAvatarIMG.value)){
        const avatarUpdate = {
            "avatar": newAvatarIMG.value};
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(avatarUpdate)
        };
        try {
            const response = await fetch(`${baseURL}/auction/profiles/${username}/media`, options)
            const result = await response.json();
            if(response.status == 201 || 202 || 203 || 204 || 205 || 206){
                alert(response.status);
            } else{
                alert(result.message);
            }
        } catch (error){
            alert(error);
        }
    } else {
        console.log("something went wrong");
    }
}