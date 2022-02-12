function updateProductNumber(product, price, isIncresing) {
  let productInput = document.getElementById(product + "-number");

  let productNumber = productInput.value;

  if (isIncresing == true) {
    productNumber = parseInt(productNumber) + 1;
  } else if (productNumber > 0) {
    productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;

  //update baalance
  let productTotal = document.getElementById(product + "-total");
  productTotal.innerText = productNumber * price;
  calculateTotal();
}

////calculate total

function getInputValue(product) {
  const productInput = document.getElementById(product + "-number");
  const productNumber = parseInt(productInput.value);
  return productNumber;
}

function calculateTotal() {
  const phoneTotal = getInputValue("phone") * 1200;
  const caseTotal = getInputValue("case") * 60;
  const subTotal = phoneTotal + caseTotal;
  const tax = subTotal / 10;

  //update on html
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tax-amount").innerText = tax;
  document.getElementById("total-price").innerText = tax + subTotal;
}

//phone increase decrease events
document.getElementById("phone-plus").addEventListener("click", function () {
  updateProductNumber("phone", 1200, true);
});

document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductNumber("phone", 1200, false);
});

//handle casing increase decrease events
document.getElementById("case-plus").addEventListener("click", function () {
  updateProductNumber("case", 60, true);
});

document.getElementById("case-minus").addEventListener("click", function () {
  updateProductNumber("case", 60, false);
});
