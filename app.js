function calculateAge() {
  // Get the input elements
  const dayInputElement = document.getElementById('day');
  const monthInputElement = document.getElementById('month');
  const yearInputElement = document.getElementById('year');

  // Get the input values
  const dayInput = dayInputElement.value;
  const monthInput = monthInputElement.value;
  const yearInput = yearInputElement.value;

  // Initialize error state
  let hasError = false;

  // Helper function to set error messages and styling
  function setError(element, errorElementId, message) {
    document.getElementById(errorElementId).innerText = message;
    element.classList.add('error-input');
    hasError = true;
  }

  // Helper function to clear error messages and styling
  function clearError(element, errorElementId) {
    document.getElementById(errorElementId).innerText = '';
    element.classList.remove('error-input');
  }

  // Check if the day input is empty and display error message if needed
  if (!dayInput) {
    setError(dayInputElement, 'day-error', 'This field is required');
  } else {
    clearError(dayInputElement, 'day-error');
  }

  // Check if the month input is empty and display error message if needed
  if (!monthInput) {
    setError(monthInputElement, 'month-error', 'This field is required');
  } else {
    clearError(monthInputElement, 'month-error');
  }

  // Check if the year input is empty and display error message if needed
  if (!yearInput) {
    setError(yearInputElement, 'year-error', 'This field is required');
  } else {
    clearError(yearInputElement, 'year-error');
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

  // Validate if the date is correct
  if (dob.getFullYear() !== year || dob.getMonth() !== month || dob.getDate() !== day) {
    setError(dayInputElement, 'day-error', 'Must be a valid date');
    setError(monthInputElement, 'month-error', 'Must be a valid date');
    setError(yearInputElement, 'year-error', 'Must be a valid date');
    return;
  }

  // Check if the date of birth is in the future and display error if so
  if (dob > today) {
    setError(dayInputElement, 'day-error', 'must be a valid day');
    setError(monthInputElement, 'month-error', 'must be a valid month');
    setError(yearInputElement, 'year-error', 'must be in the past');
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
