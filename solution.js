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
  } else {
    secondNumbParam = secondNumber;
  }

  if (secondNumber < 1) {
    console.log(
      "ERROR: Second number you entered is less than 1, please enter the bigger number."
    );
    return false;
  }

  if (secondNumbParam === 0) {
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
  } else {
    resultParam = result;
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
      operationResult = (Math.floor((firstNumbParam + secondNumbParam)*1000000))/1000000;
      break;
    case "-":
      operationResult = (Math.floor((firstNumbParam - secondNumbParam)*1000000))/1000000;
      break;
    case "/":
      operationResult = (Math.floor((firstNumbParam / secondNumbParam)*1000000))/1000000;
      break;
    case "*":
      operationResult = (Math.floor((firstNumbParam * secondNumbParam)*1000000))/1000000;
      break;
    default:
      operationResult = firstNumbParam * secondNumbParam;
  }

  console.log("firstNumbParam=", firstNumbParam);
  console.log("secondNumbParam=", secondNumbParam);
  console.log("operation=", operation);
  console.log("operationResult=", operationResult);
  console.log("resultParam=", resultParam);
  console.log(
    "operationResult === resultParam is: ",
    operationResult === resultParam
  );
  return operationResult === resultParam;
}
