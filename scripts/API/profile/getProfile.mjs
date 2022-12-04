import { baseURL } from "../links.mjs";

export async function getProfile(username){
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    }
    try {
        const response = await fetch(`${baseURL}/auction/profiles/${username}`, options);
        const result = await response.json();
        return result;
    }
    catch(error){
        alert(error);
    }
}
