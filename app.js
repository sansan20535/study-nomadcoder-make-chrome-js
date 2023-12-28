const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

/*
const lologinInput = document.querySelector("#login-form input");
const lologinButton = document.querySelector("#login-form button");
*/

function onLoginBtnClick (){
   console.log(loginInput.value);
}

loginButton.addEventListener("click", onLoginBtnClick);