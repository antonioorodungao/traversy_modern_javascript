const e_loan_amount = document.querySelector("#loan-amount");
const e_annual_percentage = document.querySelector("#annual-percentage");
const e_repayment_years = document.querySelector("#repayment-years");
const e_loan_form = document.querySelector("#loan-form");

const e_monthly_payment = document.querySelector("#monthly-payment");
const e_total_interest = document.querySelector("#total-interest");

const e_result = document.querySelector("#result");

(function () {
  e_loan_form.addEventListener("submit", calculateLoan);
})();

function calculateLoan(e) {
  e.preventDefault();
  if (
    e_loan_amount.value === "" ||
    e_annual_percentage.value === "" ||
    e_repayment_years.value === ""
  ) {
    hide_result();
    return;
  }

  let loan_amount = parseFloat(e_loan_amount.value);
  let annual_interest = parseFloat(e_annual_percentage.value);
  let repayment_years = parseFloat(e_repayment_years.value);

  let monthly_payment =
    ((loan_amount / repayment_years) * (1 + annual_interest / 100)) / 12;
  let total_interest = monthly_payment * 12 * repayment_years - loan_amount;
  //   alert(monthly_payment);
  e_total_interest.value = total_interest.toFixed(2);
  e_monthly_payment.value = monthly_payment.toFixed(2);
  show_result();
}

function hide_result() {
  e_result.style.display = "none";
}

function show_result() {
  e_result.style.display = "block";
}
