function calc(firstNumber, secondNumber, operation, result) {
  let operationResult;
  let firstNumbParam;
  let secondNumbParam;
  let resultParam;

  if (firstNumber === "") {
    console.log("ERROR: The first number is empty. Please add value.");
    return false;
  }

  if (typeof firstNumber === "string") {
    firstNumbParam = parseFloat(firstNumber);
  }

  if (firstNumber < 1) {
    console.log(
      "ERROR: First number you entered is less than 1, please enter the bigger number."
    );
    return false;
  }

  if (firstNumber > 1000000) {
    console.log(
      "ERROR: First number you entered is bigger than 1000000, please enter the small number."
    );
    return false;
  }

  if (secondNumber === "") {
    console.log("ERROR: The second number is empty. Please add value.");
    return false;
  }

  if (typeof secondNumber === "string") {
    secondNumbParam = parseFloat(secondNumber);
  }

  if (secondNumber < 1) {
    console.log(
      "ERROR: Second number you entered is less than 1, please enter the bigger number."
    );
    return false;
  }

  if (secondNumber > 1000000) {
    console.log(
      "ERROR: second number you entered is bigger than 1000000, please enter the small number."
    );
    return false;
  }

  if (result === "") {
    console.log("ERROR: The result is empty. Please add value.");
    return false;
  }

  if (typeof result === "string") {
    resultParam = parseFloat(result);
  }

  if (result < 1) {
    console.log(
      "ERROR: the result you entered is less than 1, please enter the bigger number."
    );
    return false;
  }

  if (result > 1000000) {
    console.log(
      "ERROR: The result number you entered is bigger than 1000000, please enter the small number."
    );
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
