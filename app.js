function calculateAge() {
  // Get the values from the input fields
  const dayInput = document.getElementById('day').value;
  const monthInput = document.getElementById('month').value;
  const yearInput = document.getElementById('year').value;

  // Initialize error state
  let hasError = false;

  // Check if the day input is empty and display error message if needed
  if (!dayInput) {
    document.getElementById('day-error').innerText = 'This field is required';
    hasError = true;
  } else {
    document.getElementById('day-error').innerText = '';
  }

  // Check if the month input is empty and display error message if needed
  if (!monthInput) {
    document.getElementById('month-error').innerText = 'This field is required';
    hasError = true;
  } else {
    document.getElementById('month-error').innerText = '';
  }

  // Check if the year input is empty and display error message if needed
  if (!yearInput) {
    document.getElementById('year-error').innerText = 'This field is required';
    hasError = true;
  } else {
    document.getElementById('year-error').innerText = '';
  }

  // If there is any error, stop the function execution
  if (hasError) {
    return;
  }

  // Parse input values to integers and adjust month for JavaScript Date object
  const day = parseInt(dayInput, 10);
  const month = parseInt(monthInput, 10) - 1; // JavaScript months are 0-11
  const year = parseInt(yearInput, 10);

  // Create date objects for birth date and today's date
  const dob = new Date(year, month, day);
  const today = new Date();

  // Check if the date of birth is in the future and display error if so
  if (dob > today) {
    document.getElementById('result').innerText = 'The date of birth cannot be in the future';
    return;
  }

  // Calculate age in years, months, and days
  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  // Adjust calculations if days are negative
  if (days < 0) {
    months--;
    const previousMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += previousMonthDays;
  }

  // Adjust calculations if months are negative
  if (months < 0) {
    years--;
    months += 12;
  }

  // Display the calculated age in the corresponding elements
  document.querySelector('.years').innerText = years;
  document.querySelector('.months').innerText = months;
  document.querySelector('.days').innerText = days;

  // Log a success message to the console
  console.log('Script loaded successfully');
}
