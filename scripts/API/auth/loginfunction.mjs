import { errorTextDisplayToggle } from "../../Validation/errorMessages/errorDisplay.mjs";
import { validateEmail } from "../../Validation/validate.mjs";
import { baseURL } from "../links.mjs";


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
    const response = await fetch(`${baseURL}/auction/auth/login`, options);
    const result = await response.json();
    if (response.status == 200) {
      localStorage.setItem("accessToken", result.accessToken);
      localStorage.setItem("username", result.name);
      location.replace("index.html");
    } else {
      const loginEmailErrorText = document.getElementById("email-login-error");
      const passwordLoginErrorText = document.getElementById("password-login-error");
      if (validateEmail(email.value) === true && password.value.length > 5){
        errorTextDisplayToggle(loginEmailErrorText, true);
        errorTextDisplayToggle(passwordLoginErrorText, true);}
      else {
        errorTextDisplayToggle(loginEmailErrorText, false);
        errorTextDisplayToggle(passwordLoginErrorText, false);
      }
    }
  } catch (error) {
    alert(error);
  }
}
