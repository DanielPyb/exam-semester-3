const loginForm = document.getElementById("login-div");
const email = document.getElementById("login-email");
const password = document.getElementById("login-password");


export async function loginFunc() {
    //login object with values from the login fields ready to be parsed
    const loginObject = {
      email: email.value,
      password: password.value,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginObject),
    };
    try {
      const response = await fetch(`${baseURL}auction/auth/login`, options);
      const result = await response.json();
      console.log(result)
      localStorage.setItem("accessToken", result.accessToken);
      localStorage.setItem("username", result.name);
      if(response.status == 200){
        location.replace("index.html")
      } else{
        alert(result.message);
      }
    } catch (error) {
        alert("something went wrong");
    }
  }