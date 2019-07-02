const equalValues = (a, b) =>
  Math.abs(a - b) < Number.EPSILON * Math.max(Math.abs(a), Math.abs(b)) ||
  a === b;

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
  } else {
    firstNumbParam = firstNumber;
  }

  if (firstNumbParam <= 0) {
    console.log(
      "ERROR: First number you entered is less than 0, please enter the bigger number."
    );
    return false;
  }

  if (firstNumbParam > 1000000) {
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
  } else {
    secondNumbParam = secondNumber;
  }

  if (secondNumbParam === 0) {
    console.log("ERROR: The second number is 0. Please add another value.");
  }

  if (secondNumbParam < 0) {
    console.log(
      "ERROR: Second number you entered is less than 0, please enter the bigger number."
    );
    return false;
  }

  if (secondNumbParam > 1000000) {
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
  } else {
    resultParam = result;
  }

  if (resultParam > 1000000) {
    console.log(
      "ERROR: The result number you entered is bigger than 1000000, please enter the small number."
    );
    if (resultParam === Infinity) {
      console.log("WARNING: You entered Infinity as result");
      return true;
    }
    return false;
  }

  switch (operation) {
    case "+":
      operationResult = parseFloat(
        (firstNumbParam + secondNumbParam).toFixed(10)
      );
      break;
    case "-":
      operationResult = parseFloat(
        (firstNumbParam - secondNumbParam).toFixed(10)
      );
      break;
    case "/":
      operationResult = parseFloat(firstNumbParam / secondNumbParam).toFixed(
        10
      );
      break;
    case "*":
      operationResult = parseFloat(firstNumbParam * secondNumbParam).toFixed(
        10
      );
      break;
    default:
      operationResult = parseFloat(firstNumbParam * secondNumbParam).toFixed(
        10
      );
  }

  console.log("firstNumbParam=", firstNumbParam);
  console.log("secondNumbParam=", secondNumbParam);
  console.log("operation=", operation);
  console.log("operationResult=", operationResult);
  console.log("resultParam=", resultParam);
  console.log(
    "equalValues(resultParam, operationResult) is: ",
    equalValues(resultParam, operationResult)
  );

  return equalValues(resultParam, operationResult);
}
