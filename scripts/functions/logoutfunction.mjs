const logOutBTN = document.getElementById("log-out-btn")

export async function logOut(){
    localStorage.removeItem("accessToken");
    localStorage.removeItem("username");
}

logOutBTN.addEventListener("click", function(event){
    event.preventDefault()
    logOut();
})