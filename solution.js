function calc(firstNumber, secondNumber, operation, result) {
  let operationResult;

  if (typeof firstNumber === "string") {
    firstNumber = parseFloat(firstNumber);
  }

  if (typeof secondNumber === "string") {
    secondNumber = parseFloat(secondNumber);
  }

  if (typeof result === "string") {
    result = parseFloat(result);
  }

  if (firstNumber > 1000000 || secondNumber > 1000000) {
    console.log(
      "You entered numbers more than 1000000, please enter less number."
    );
    return;
  }

  switch (operation) {
    case "+":
      operationResult = firstNumber + secondNumber;
      break;
    case "-":
      operationResult = firstNumber - secondNumber;
      break;
    case "/":
      operationResult = firstNumber / secondNumber;
      break;
    case "*":
      operationResult = firstNumber * secondNumber;
      break;
    default:
      console.log("Sorry, we are out of " + operation + ".");
  }

  return operationResult === result;
}
