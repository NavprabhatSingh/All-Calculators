document.getElementById('calculate-btn').addEventListener('click', function() {
    // Get input values
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    // Validate input
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Please enter valid values for weight and height.');
        return;
    }
    // Calculate BMI
    const bmi = weight / (height * height);
    const bmiValue = bmi.toFixed(2); // Rounding to 2 decimal places
    // Determine BMI category
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }
    // Display result
    document.getElementById('bmi-value').textContent = bmiValue;
    document.getElementById('bmi-category').textContent = category;
});