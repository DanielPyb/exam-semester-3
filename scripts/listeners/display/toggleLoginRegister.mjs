const toggleBtn = document.querySelectorAll(".toggle-register");

const loginDiv = document.getElementById("login-div");
const registerDiv = document.getElementById("register-div");

function toggleLoginRegister(){
    if(registerDiv.style.display === "none"){
        loginDiv.style.display = "none"
        registerDiv.style.display = "block";
    } else {
        registerDiv.style.display = "none";
        loginDiv.style.display ="block"
    }
}

toggleBtn.forEach(btn => {
    btn.addEventListener("click", function(event){
        toggleLoginRegister();
    });
})
