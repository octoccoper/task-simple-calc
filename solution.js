function calc(firstNumber, secondNumber, operation, result) {
  let operationResult;
  let firstNumbParam, secondNumbParam, resultParam;

  if (typeof firstNumber === "string") {
    firstNumbParam = parseFloat(firstNumber);
  }

  if (typeof secondNumber === "string") {
    secondNumbParam = parseFloat(secondNumber);
  }

  if (typeof result === "string") {
    resultParam = parseFloat(result);
  }

  if (firstNumbParam > 1000000 || secondNumbParam > 1000000) {
    console.log(
      "You entered numbers more than 1000000, please enter less number."
    );
    return 0;
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
  }

  return operationResult === resultParam;
}
