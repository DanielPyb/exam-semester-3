import { isLoggedIn } from "../Validation/loginCheck.mjs";

export async function loginDisplay(){
    const logoutBTN = document.getElementById("log-out-btn");
    const loginBTN = document.getElementById("log-in-btn")
    if(isLoggedIn()){
        logoutBTN.style.display = "block";
        loginBTN.style.display = "none";
    }else{
        logoutBTN.style.display = "none";
        loginBTN.style.display = "block";
    }
}