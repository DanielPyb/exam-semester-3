import { registerFunc } from "../functions/registerfunction.mjs";

const registerBTN = document.getElementById('register-btn')

registerBTN.addEventListener("click", function(event){
    console.log("hello");
    event.preventDefault();
    registerFunc();
});