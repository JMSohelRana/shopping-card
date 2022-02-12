function updateCaseNumber(isIncresing) {
  let caseInput = document.getElementById("case-number");

  let caseNumber = caseInput.value;

  if (isIncresing == true) {
    caseNumber = parseInt(caseNumber) + 1;
  } else if (caseNumber > 0) {
    caseNumber = parseInt(caseNumber) - 1;
  }
  caseInput.value = caseNumber;

  //update baalance
  let caseTotal = document.getElementById("case-total");
  caseTotal.innerText = caseNumber * 59;
}

document.getElementById("case-plus").addEventListener("click", function () {
  updateCaseNumber(true);
});

document.getElementById("case-minus").addEventListener("click", function () {
  updateCaseNumber(false);
});
