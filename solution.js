function calc(firstNumber, secondNumber, operation, result) {
  let operationResult,
    firstNumbParam,
    secondNumbParam,
    resultParam,
    errorDiv,
    dataResultDiv,
    parentResultDiv;

  if (!errorDiv) {
    errorDiv = document.createElement("div");
    errorDiv.setAttribute("data-error", "");

    dataResultDiv = document.querySelectorAll("[data-result]");
    if (!dataResultDiv) {
      console.log(
        "ERROR: div with attribute [data-result] doesn't exist in the HTML structure"
      );
      return false;
    } else {
      parentResultDiv = dataResultDiv[0].parentNode;
      parentResultDiv.insertBefore(errorDiv, dataResultDiv.nextSibling);
    }
  }

  errorDiv = document.querySelectorAll("[data-error]");

  if (errorDiv.length > 0) {
    errorDiv[0].textContent = "";
    errorDiv.length = 0;
  }

  if (firstNumber === "") {
    errorDiv[0].textContent =
      "ERROR: The first number is empty. Please add value.";
    return false;
  }

  if (typeof firstNumber === "string") {
    firstNumbParam = parseFloat(firstNumber);
  }

  if (firstNumber < 1) {
    errorDiv[0].textContent =
      "ERROR: First number you entered is less than 1, please enter the bigger number.";
    return false;
  }

  if (firstNumber > 1000000) {
    errorDiv[0].textContent =
      "ERROR: First number you entered is bigger than 1000000, please enter the small number.";
    return false;
  }

  if (secondNumber === "") {
    errorDiv[0].textContent =
      "ERROR: The second number is empty. Please add value.";
    return false;
  }

  if (typeof secondNumber === "string") {
    secondNumbParam = parseFloat(secondNumber);
  }

  if (secondNumber < 1) {
    errorDiv[0].textContent =
      "ERROR: Second number you entered is less than 1, please enter the bigger number.";
    return false;
  }

  if (secondNumber > 1000000) {
    errorDiv[0].textContent =
      "ERROR: second number you entered is bigger than 1000000, please enter the small number.";
    return false;
  }

  if (result === "") {
    errorDiv[0].textContent = "ERROR: The result is empty. Please add value.";
    return false;
  }

  if (typeof result === "string") {
    resultParam = parseFloat(result);
  }

  if (result < 1) {
    errorDiv[0].textContent =
      "ERROR: the result you entered is less than 1, please enter the bigger number.";
    return false;
  }

  if (result > 1000000) {
    errorDiv[0].textContent =
      "ERROR: The result number you entered is bigger than 1000000, please enter the small number.";
    return false;
  }

  switch (operation) {
    case "+":
      operationResult = firstNumbParam + secondNumbParam;
      break;
    case "-":
      operationResult = firstNumbParam - secondNumbParam;
      break;
    case "/":
      operationResult = firstNumbParam / secondNumbParam;
      break;
    case "*":
      operationResult = firstNumbParam * secondNumbParam;
      break;
    default:
      operationResult = firstNumbParam * secondNumbParam;
  }

  return operationResult === resultParam;
}
