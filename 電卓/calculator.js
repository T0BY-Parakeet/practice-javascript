let currentInput = '';
let currentOperation = null;
let previousInput = '';

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function setOperation(operation) {
  if (currentInput === '') return;
  
  if (previousInput !== '') {
    calculateResult();
  }
  
  currentOperation = operation;
  previousInput = currentInput;
  currentInput = '';
}

function calculateResult() {
  if (previousInput === '' || currentInput === '') return;

  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  switch (currentOperation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      if (current === 0) {
        alert("ゼロで割ることはできません");
        return;
      }
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  currentOperation = null;
  previousInput = '';
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  currentOperation = null;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}
