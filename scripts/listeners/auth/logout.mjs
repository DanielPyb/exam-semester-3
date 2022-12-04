import { logOut } from "../../API/auth/logoutfunction.mjs";
const logOutBTN = document.getElementById("log-out-btn")

logOutBTN.addEventListener("click", function(event){
    event.preventDefault()
    logOut();
})