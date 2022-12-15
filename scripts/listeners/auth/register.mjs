import { registerFunc } from "../../API/auth/registerfunction.mjs";

const registerBTN = document.getElementById('register-btn')

registerBTN.addEventListener("click", function(event){
    event.preventDefault();
    registerFunc();
});