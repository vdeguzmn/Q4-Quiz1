// Toggle instructions paragraph
function toggleInstructions() {
  const instructions = document.getElementById("instructions");
  instructions.style.display = instructions.style.display === "none" ? "block" : "none";
}

// Calculate BMI function
function calculateBMI() {
  // Get values from inputs
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);

  // Math method: calculate BMI
  let bmi = weight / Math.pow(height, 2); // BMI formula
  bmi = bmi.toFixed(2); // Round to 2 decimal places

  let category = "";

  // Conditional Statements to categorize BMI
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
  } else if (bmi >= 30) {
    category = "Obese";
  } else {
    category = "Invalid input";
  }

  // Output result using innerHTML
  document.getElementById("result").innerHTML = `
    <h2>Your BMI: ${bmi}</h2>
    <p class="fw-bold">Category: ${category}</p>
  `;
}
