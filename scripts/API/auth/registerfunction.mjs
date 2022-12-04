import { baseURL } from "../links.mjs";
import {
  validateEmail,
  validatePassword,
  validateURL,
  validateUsername,
} from "../../Validation/validate.mjs";

export async function registerFunc() {
  const registerUsername = document.getElementById("register-username");
  const registerEmail = document.getElementById("register-email");
  const registerAvatar = document.getElementById("register-avatar");
  const registerPassword = document.getElementById("register-password-1");
  const registerPasswordConfirm = document.getElementById(
    "register-password-2"
  );

  const registerObject = {
    name: registerUsername.value,
    email: registerEmail.value,
    avatar: registerAvatar.value,
    password: registerPassword.value,
  };
  if (
    validateUsername(registerUsername.value) &&
    validateURL(registerAvatar.value) &&
    validateEmail(registerEmail.value) &&
    validatePassword(registerPassword, registerPasswordConfirm)
  ) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerObject),
    };
    try {
      const response = await fetch(`${baseURL}/auction/auth/register`, options);
      const result = await response.json();
      if (response.status == 201) {
        alert("new profile created");
        toggleRegister();
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
