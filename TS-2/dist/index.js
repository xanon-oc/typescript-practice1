"use strict";
const userForm = document.querySelector(".user-form");
const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const userCountry = document.querySelector("#country");
const userFeedback = document.querySelector("#feedback");
userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
        username: userName.value,
        email: userEmail.value,
        country: userCountry.value,
        message: userFeedback.value,
    };
    console.log(data);
});
