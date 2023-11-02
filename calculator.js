function add(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function power(a, b) {
  return a ** b;
}

function mod(a, b) {
  return a % b;
}

function sqrt(a) {
  return Math.sqrt(a);
}


// function factorial(n) {
//   if (n < 0) {
//     alert(`Number is negative`)
//     return
//   } else if (n === 0 || n === 1) {
//     return 1;
//   } else if (Number.isInteger(n) === false) {
//     alert(`Not a real number`)
//     return
//   } else {
//     return n * factorial(n - 1)
//   } 
// }


function factorial(n) {
  if (n < 0) {
    alert(`Number is negative`)
    return
  } else if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1)
  } 
}

// function factorial(n) {

//   if (n < 0) {
//     alert(`Number is negative`)
//     return
//   } else if (Number.isInteger(n) === true) {
//     return n * factorial(n - 1)
//   } else if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     alert()
//   } 
// }



function calculate(expression) {
  
  let num1;
  let operator;
  let num2;

  const tokens = expression.split(" ");

  if (tokens.length < 2 || tokens.length > 3) {
    alert("Invalid expression")
    return;
  }

  if (tokens.length === 3) {
    num1 = Number(tokens[0])
    operator = tokens[1]
    num2 = Number(tokens[2])
    if (Number.isNaN(num1) || Number.isNaN(num2)) {
      alert("Please enter 2 valid number inputs.")
      return;
    }
  } else if (tokens.length === 2) {
    operator = tokens[0]
    num1 = tokens[1]
  }
 
  if (operator === `+`) {
    return add(num1, num2)
  } else if (operator === `-`) {
    return minus(num1, num2)
  } else if (operator === `*`) {
    return multiply(num1, num2)
  } else if (operator === `/`) {
    return divide(num1, num2)
  } else if (operator === `^`) {
    return power(num1, num2)
  } else if (operator === `%`) {
    return mod(num1, num2)
  }  else if (operator === `sqrt`) {
    return sqrt(num1)
  } else if (operator === `!`) {
    return factorial(num1)
  }
  else {
    alert("You did not put in a valid operator.")
  }

}

/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});
