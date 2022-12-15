import { loginFunc } from "../../API/auth/loginfunction.mjs";

const loginBTN = document.getElementById("login-btn")

loginBTN.addEventListener("click", function(event){
    event.preventDefault();
    loginFunc();
});