import { updateAvatar } from "../../API/auth/newavatar.mjs";

const newAvatrBTN = document.getElementById("confirm-avatar");

newAvatrBTN.addEventListener("click", function(event){
    event.preventDefault();
    updateAvatar();
})