const userForm = document.querySelector(".user-form") as HTMLFormElement;
const userName = document.querySelector("#name") as HTMLInputElement;
const userEmail = document.querySelector("#email") as HTMLInputElement;
const userCountry = document.querySelector("#country") as HTMLOptionElement;
const userFeedback = document.querySelector("#feedback") as HTMLTextAreaElement;
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
