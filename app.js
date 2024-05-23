function calculateAge() {
    // Retrieve the values from the input fields
    const dayInput = document.getElementById('day').value;
    const monthInput = document.getElementById('month').value;
    const yearInput = document.getElementById('year').value;
    
    // Check if all input fields are filled
    if (!dayInput || !monthInput || !yearInput) {
      document.getElementById('result').innerText = 'Please enter your date of birth';
      return;
    }
  
    // Parse the input values to integers
    const day = parseInt(dayInput, 10);
    const month = parseInt(monthInput, 10) - 1; // JavaScript months are 0-11
    const year = parseInt(yearInput, 10);
  
    // Create a Date object from the input values
    const dob = new Date(year, month, day);
    const today = new Date();
  
    // Check if the date of birth is in the future
    if (dob > today) {
      document.getElementById('result').innerText = 'The date of birth cannot be in the future';
      return;
    }
  
    // Calculate the age in years, months, and days
    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();
  
    // Adjust for negative day difference
    if (days < 0) {
      months--;
      const previousMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      days += previousMonthDays;
    }
  
    // Adjust for negative month difference
    if (months < 0) {
      years--;
      months += 12;
    }
  
    // Display the result
    document.getElementById('result').innerText = `You are ${years} years, ${months} months, and ${days} days old.`;
  }
  
  // Adding a debug statement to ensure the script is loaded
  console.log('Script loaded successfully');
  