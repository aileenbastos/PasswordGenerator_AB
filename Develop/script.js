// Initiate password generator
alert("Please follow the prompts to generate a random password.")

// Password criteria prompts
// Password length
function createPasswordLength() {
  var passwordLength = prompt("How many characters is your password? Your password must be between 8 and 128 characters in length.");
  while (passwordLength < 8 || passwordLength > 128 || passwordLength == "") {
    // Reprompt if response does not meet length criteria or is empty
    alert("Invalid password length.")
    passwordLength = prompt("How many characters is your password? Your password must be between 8 and 128 characters in length.");
  }
  // Return password length function
  return passwordLength;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
