import { baseURL } from "../links.mjs";
import {
  validateEmail,
  validatePassword,
  validateURL,
  validateUsername,
} from "../../Validation/validate.mjs";
import { errorTextDisplayToggle } from "../../Validation/errorMessages/errorDisplay.mjs";

export async function registerFunc() {
  const registerUsername = document.getElementById("register-username");
  const registerEmail = document.getElementById("register-email");
  const registerAvatar = document.getElementById("register-avatar");
  const registerPassword = document.getElementById("register-password-1");
  const registerPasswordConfirm = document.getElementById(
    "register-password-2"
  );
  let API_REQUEST = false;
  const registerObject = {
    name: registerUsername.value,
    email: registerEmail.value,
    avatar: registerAvatar.value,
    password: registerPassword.value,
  };
  const registerEmailErrorText = document.getElementById(
    "email-register-error"
  );
  if (validateEmail(registerEmail.value) === true)
    errorTextDisplayToggle(registerEmailErrorText, true);
  else {
    errorTextDisplayToggle(registerEmailErrorText, false);
  }
  const registerUsernameErrorText = document.getElementById(
    "username-register-error"
  );
  if (validateUsername(registerUsername.value) === true)
    errorTextDisplayToggle(registerUsernameErrorText, true);
  else {
    errorTextDisplayToggle(registerUsernameErrorText, false);
  }
  const avatarRegisterErrorText = document.getElementById(
    "avatar-register-error"
  );
  if (validateURL(registerAvatar.value) === true)
    errorTextDisplayToggle(avatarRegisterErrorText, true);
  else {
    errorTextDisplayToggle(avatarRegisterErrorText, false);
  }
  const ERRORpassword_1_register = document.getElementById("password-error");
  const ERRORpassword_2_register = document.getElementById("password-error-2");

  if (validatePassword(registerPassword === registerPasswordConfirm)) {
    errorTextDisplayToggle(ERRORpassword_1_register, true);
    errorTextDisplayToggle(ERRORpassword_2_register, true);
    API_REQUEST = true;
  } else {
    errorTextDisplayToggle(ERRORpassword_1_register, false);
    errorTextDisplayToggle(ERRORpassword_2_register, false);
    return;
  }
  if (API_REQUEST) {
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
