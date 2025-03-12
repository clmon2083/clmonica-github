// JavaScript code for form validation

// Add event listener to form submit action
document.getElementById("myForm").addEventListener("submit", function (event) {

  // Prevent form submission so we can validate the input first
  event.preventDefault();

  // Get the input field and its value
  let inputField = document.getElementById("inputField");
  let inputValue = inputField.value;

  // Define a regular expression for alphanumeric characters (letters and numbers only)
  let alphanumericPattern = /^[a-zA-Z0-9]+$/;

  // Check if the input matches the alphanumeric pattern
  if (alphanumericPattern.test(inputValue)) {
    // If valid, show a confirmation message
    alert("Great job! Form submitted successfully.");

    // Uncomment the line below to submit if the server is set up for form submitting
    // document.getElementById("myForm").submit();
  } else {
    // If invalid, show an error message
    alert("Oops! Please enter only letters and numbers.");
  }
});
