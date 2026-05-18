// const loginBtn = document.getElementById("login-btn");
// const loginPageSection = document.getElementById("login-page-section");
// const homeSection = document.getElementById("home-section");
// const loginStatus = document.getElementById("status");
// loginStatus.classList.add("display-none");
// loginBtn.addEventListener("click", function () {
//   const mobileNumberField = document.getElementById("mobile-number");
//   const passwordField = document.getElementById("password");

//   if (
//     mobileNumberField.value.length === 10 &&
//     passwordField.value.length === 4
//   ) {
//     console.log("password match");

//     loginPageSection.classList.add("display-none");
//     setTimeout(() => {
//       console.log("after 2 seconds");
//       loginStatus.classList.add("display-none");
//       homeSection.classList.remove("display-none");
//     }, 2000);

//     loginStatus.classList.remove("display-none");
//   } else {
//     console.log("not match");
//   }
//   mobileNumberField.value = "";
//   passwordField.value = "";
// });
// ************ Current Balance *****************
const currentBalance = document.getElementById("current-balance");

// ************ Pin Number **********************
const pinNumber = 1234;
// Add Money Feature Card Id
const addMoneyFeature = document.getElementById("add-money-feature");
// Cash Out Feature Card Id
const cashOutFeature = document.getElementById("cash-out-feature");
// Transfer Money Feature Card Id
const transferMoneyFeature = document.getElementById("transfer-money-feature");
// Get Bonus Feature Card Id
const bonusFeature = document.getElementById("bonus-feature");
// Pay Bill Feature Card Id
const payBillFeature = document.getElementById("pay-bill-feature");
// Transaction Feature Card Id
const transactionFeature = document.getElementById("transaction-feature");
// Payment history section Id
const paymentHistory = document.getElementById("payment-history");

// Add Money Input Sectiion Id
const addMoneyParent = document.getElementById("add-money-parent");
// Cash Out Input Section Id
const cashOutParent = document.getElementById("cash-out-parent");
// Transfer Money Input Section Id
const transferMoneyParent = document.getElementById("transfer-money-parent");
// Get Bonus Input Section Id
const bonusParent = document.getElementById("bonus-parent");
// Pay Bill Input Section Id
const payBillParent = document.getElementById("pay-bill-parent");
// Add Money Handler
addMoneyFeature.addEventListener("click", function () {
  addMoneyFeature.classList.add("active");

  cashOutFeature.classList.remove("active");
  transferMoneyFeature.classList.remove("active");
  bonusFeature.classList.remove("active");
  payBillFeature.classList.remove("active");
  transactionFeature.classList.remove("active");
  paymentHistory.classList.add("display-none");
  cashOutParent.classList.add("display-none");
  transferMoneyParent.classList.add("display-none");
  bonusParent.classList.add("display-none");
  payBillParent.classList.add("display-none");
  addMoneyParent.classList.remove("display-none");

  document
    .getElementById("add-money-btn")
    .addEventListener("click", function () {
      const bankNameLists = [
        "Islami Bank",
        "Jonota Bank",
        "Jonota Bank",
        "Nogod",
      ];
      const bankNameField = document.getElementById("bank-names");
      const addMoneyAcountNumberField = document.getElementById(
        "add-money-acount-number",
      );
      const addMoneyAmountField = document.getElementById("add-money-amount");
      const addMoneyPinNumberField = document.getElementById(
        "add-money-pin-number",
      );
      // console.log(addMoneyAcountNumberField.value.length);
      // console.log(typeof parseInt(addMoneyAcountNumberField.value));
      if (
        bankNameLists.includes(bankNameField.value) &&
        parseInt(addMoneyAcountNumberField.value.length) === 11 &&
        parseInt(addMoneyAmountField.value) > 0 &&
        parseInt(addMoneyPinNumberField.value) === pinNumber
      ) {
        const currentBalanceNumber = parseInt(currentBalance.innerText);
        const addNewMoney = parseInt(addMoneyAmountField.value);
        const updatedCurrentMoney = currentBalanceNumber + addNewMoney;
        currentBalance.innerText = updatedCurrentMoney;
      }
    });
});

// Cash Out Handler
cashOutFeature.addEventListener("click", function () {
  addMoneyFeature.classList.remove("active");
  transferMoneyFeature.classList.remove("active");
  bonusFeature.classList.remove("active");
  payBillFeature.classList.remove("active");
  transactionFeature.classList.remove("active");
  cashOutFeature.classList.add("active");
  paymentHistory.classList.add("display-none");
  addMoneyParent.classList.add("display-none");
  transferMoneyParent.classList.add("display-none");
  bonusParent.classList.add("display-none");
  payBillParent.classList.add("display-none");
  cashOutParent.classList.remove("display-none");
});

transferMoneyFeature.addEventListener("click", function () {
  addMoneyFeature.classList.remove("active");
  cashOutFeature.classList.remove("active");
  transferMoneyFeature.classList.add("active");
  bonusFeature.classList.remove("active");
  payBillFeature.classList.remove("active");
  paymentHistory.classList.add("display-none");
  addMoneyParent.classList.add("display-none");
  cashOutParent.classList.add("display-none");
  bonusParent.classList.add("display-none");
  payBillParent.classList.add("display-none");
  transferMoneyParent.classList.remove("display-none");
});

bonusFeature.addEventListener("click", function () {
  addMoneyFeature.classList.remove("active");
  cashOutFeature.classList.remove("active");
  transferMoneyFeature.classList.remove("active");
  payBillFeature.classList.remove("active");
  transactionFeature.classList.remove("active");
  bonusFeature.classList.add("active");
  paymentHistory.classList.add("display-none");
  addMoneyParent.classList.add("display-none");
  cashOutParent.classList.add("display-none");
  transferMoneyParent.classList.add("display-none");
  payBillParent.classList.add("display-none");
  bonusParent.classList.remove("display-none");
});

payBillFeature.addEventListener("click", function () {
  addMoneyFeature.classList.remove("active");
  cashOutFeature.classList.remove("active");
  transferMoneyFeature.classList.remove("active");
  transactionFeature.classList.remove("active");
  bonusFeature.classList.remove("active");
  payBillFeature.classList.add("active");
  paymentHistory.classList.add("display-none");
  addMoneyParent.classList.add("display-none");
  cashOutParent.classList.add("display-none");
  transferMoneyParent.classList.add("display-none");
  bonusParent.classList.add("display-none");
  payBillParent.classList.remove("display-none");
});

transactionFeature.addEventListener("click", function () {
  addMoneyFeature.classList.remove("active");
  cashOutFeature.classList.remove("active");
  transferMoneyFeature.classList.remove("active");
  bonusFeature.classList.remove("active");
  payBillFeature.classList.remove("active");
  transactionFeature.classList.add("active");

  paymentHistory.classList.remove("display-none");
  addMoneyParent.classList.add("display-none");
  cashOutParent.classList.add("display-none");
  transferMoneyParent.classList.add("display-none");
  bonusParent.classList.add("display-none");
  payBillParent.classList.add("display-none");
});
