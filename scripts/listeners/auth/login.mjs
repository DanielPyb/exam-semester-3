import { loginFunc } from "../../API/auth/loginfunction.mjs";

const loginBTN = document.getElementById("login-btn")

loginBTN.addEventListener("click", function(event){
    console.log("hello");
    event.preventDefault();
    loginFunc();
});