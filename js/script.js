const loginBtn = document.getElementById("login-btn");
const loginPageSection = document.getElementById("login-page-section");
const homeSection = document.getElementById("home-section");
const loginStatus = document.getElementById("status");
loginStatus.classList.add("display-none");
loginBtn.addEventListener("click", function () {
  const mobileNumberField = document.getElementById("mobile-number");
  const passwordField = document.getElementById("password");

  if (
    mobileNumberField.value.length === 10 &&
    passwordField.value.length === 4
  ) {
    console.log("password match");

    loginPageSection.classList.add("display-none");
    setTimeout(() => {
      console.log("after 2 seconds");
      loginStatus.classList.add("display-none");
      homeSection.classList.remove("display-none");
    }, 2000);

    loginStatus.classList.remove("display-none");
  } else {
    console.log("not match");
  }
  mobileNumberField.value = "";
  passwordField.value = "";
});
