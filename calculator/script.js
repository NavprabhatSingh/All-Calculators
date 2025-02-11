let currentInput = '';  // Holds the current input value
let operator = '';      // Holds the current operator
let previousInput = ''; // Holds the previous input value
// Update the display
function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
// Append a number to the current input
function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}
// Set the operator for the calculation
function setOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculateResult();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}
// Calculate the result of the expression
function calculateResult() {
    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    
    if (isNaN(num1) || isNaN(num2)) return;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Cannot divide by 0");
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay();
}
// Clear the display
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay();
}