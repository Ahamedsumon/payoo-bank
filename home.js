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
      bankNameField.value = "";
      addMoneyAcountNumberField.value = "";
      addMoneyAmountField.value = "";
      addMoneyPinNumberField.value = "";
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

  document
    .getElementById("withdraw-money-btn")
    .addEventListener("click", function () {
      const withdrawAgentNumberField = document.getElementById(
        "withdraw-agent-number",
      );
      const withdrawAmountField = document.getElementById("withdraw-amount");
      const withdrawPinNumberField = document.getElementById("withdraw-pin");
      if (
        parseInt(withdrawAgentNumberField.value.length) === 11 &&
        parseInt(withdrawAmountField.value) > 0 &&
        parseInt(withdrawPinNumberField.value) === pinNumber
      ) {
        const currentBalanceNumber = parseInt(currentBalance.innerText);
        const amountToBeDecrease = parseInt(withdrawAmountField.value);
        if (currentBalanceNumber >= amountToBeDecrease) {
          const updatedCurrentMoney = currentBalanceNumber - amountToBeDecrease;
          currentBalance.innerText = updatedCurrentMoney;
        } else {
          alert("Incufficient Balance");
        }
      }
      withdrawAgentNumberField.value = "";
      withdrawAmountField.value = "";
      withdrawPinNumberField.value = "";
    });
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

  document
    .getElementById("transfer-money-btn")
    .addEventListener("click", function () {
      const transferAccountNumber = document.getElementById(
        "transfer-account-number",
      );
      const transferAmount = document.getElementById("transfer-amount");
      const transferPinNumber = document.getElementById("transfer-pin");
      if (
        parseInt(transferAccountNumber.value.length) === 11 &&
        parseInt(transferAmount.value) > 0 &&
        parseInt(transferPinNumber.value) === pinNumber
      ) {
        const currentBalanceNumber = parseInt(currentBalance.innerText);
        const amountToBeDecrease = parseInt(transferAmount.value);
        const updatedCurrentMoney = currentBalanceNumber - amountToBeDecrease;
        currentBalance.innerText = updatedCurrentMoney;
      }
      transferAccountNumber.value = "";
      transferAmount.value = "";
      transferPinNumber.value = "";
    });
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

  document.getElementById("bonus-btn").addEventListener("click", function () {
    const bonusCoupon = document.getElementById("bonus-coupon");
    const coupon = "Eid2026";
    if (bonusCoupon.value === coupon) {
      const currentBalanceNumber = parseInt(currentBalance.innerText);
      const updatedCurrentMoney = currentBalanceNumber + 1000;
      currentBalance.innerText = updatedCurrentMoney;
    }
    bonusCoupon.value = "";
  });
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

  document
    .getElementById("pay-bill-btn")
    .addEventListener("click", function () {
      const bankNameLists = ["Islami Bank", "Jonota Bank", "Bikash", "Nogod"];
      const bankNameField = document.getElementById("pay-bill-bank-names");
      const billerAcountNumberField = document.getElementById(
        "biller-acount-number",
      );
      const totalBillAmount = document.getElementById("total-bill-amount");
      const billPinNumber = document.getElementById("bill-pin-number");
      // console.log(billerAcountNumberField.value.length);
      // console.log(typeof parseInt(billerAcountNumberField.value));
      if (
        bankNameLists.includes(bankNameField.value) &&
        parseInt(billerAcountNumberField.value.length) === 11 &&
        parseInt(totalBillAmount.value) > 0 &&
        parseInt(billPinNumber.value) === pinNumber
      ) {
        const currentBalanceNumber = parseInt(currentBalance.innerText);
        const addNewMoney = parseInt(totalBillAmount.value);
        const updatedCurrentMoney = currentBalanceNumber - addNewMoney;
        currentBalance.innerText = updatedCurrentMoney;
        console.log("working");
      } else {
        console.log("not working");
      }
      bankNameField.value = "";
      billerAcountNumberField.value = "";
      totalBillAmount.value = "";
      billPinNumber.value = "";
    });
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

const logOutBtn = document.getElementById("log-out-btn");
logOutBtn.addEventListener("click", function () {
  window.location.href = "./index.html";
});
