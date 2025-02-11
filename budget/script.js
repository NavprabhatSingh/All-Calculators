// DOM elements
const incomeInput = document.getElementById('income');
const expenseInput = document.getElementById('expense');
const categoryInput = document.getElementById('category');
const addExpenseBtn = document.getElementById('add-expense-btn');
const expensesList = document.getElementById('expenses');
const budgetIncome = document.getElementById('budget-income');
const budgetExpenses = document.getElementById('budget-expenses');
const remainingBalance = document.getElementById('remaining-balance');
let totalIncome = 0;
let totalExpenses = 0;
let expenses = [];
// Update budget summary
function updateBudget() {
    budgetIncome.textContent = totalIncome;
    budgetExpenses.textContent = totalExpenses;
    remainingBalance.textContent = totalIncome - totalExpenses;
}
// Add new expense to the list
function addExpense() {
    const expense = parseFloat(expenseInput.value);
    const category = categoryInput.value;
    if (isNaN(expense) || expense <= 0 || !category) {
        alert("Please enter valid expense and category");
        return;
    }
    totalExpenses += expense;
    // Create a list item for the expense
    const expenseItem = document.createElement('li');
    expenseItem.textContent = `${category}: $${expense}`;
    expensesList.appendChild(expenseItem);
    // Reset inputs
    expenseInput.value = '';
    categoryInput.value = '';
    updateBudget();
}
// Add income and initialize total
incomeInput.addEventListener('change', () => {
    totalIncome = parseFloat(incomeInput.value);
    updateBudget();
});
// Add expense button click event
addExpenseBtn.addEventListener('click', addExpense);