// initiate password generator
alert("Please follow the prompts to generate a random password.")

// password criteria prompts
// password length
function createPasswordLength() {
  var passwordLength = prompt("How many characters is your password? Your password must be between 8 and 128 characters in length.");
  while (passwordLength < 8 || passwordLength > 128 || passwordLength == "") {
    // Reprompt if response does not meet length criteria or is empty
    alert("Invalid password length.")
    passwordLength = prompt("How many characters is your password? Your password must be between 8 and 128 characters in length.");
  }
  // return password length function
  return passwordLength;
};

// password characters
function passwordCharacters() {
  alert("What types of characters does your password require?");
  // for lowercase
  var forLowercase = confirm("Lowercase");
  // for uppercase
  var forUppercase = confirm("Uppercase");
  // for numbers
  var forNumbers = confirm("Numbers");
  // for special characters
  var forCharacters = confirm("Special Characters");

  // array
  var confirmArray = new Array(forLowercase, forUppercase, forNumbers, forCharacters);
  // array check
  var allPromptsFalseCheck = confirmArray.every( confirmElement  => !confirmElement );
  
  // if no
  if (allPromptsFalseCheck) {
     alert("Invalid response. What types of characters does your password require?")
     passwordCharacters();   
  };

  // valid character types
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const characters = `!"#$%&'()*+,-./:;<>=?@[]^_\\{}|~`;

  var characterRange = '';

  if (hasLowercase) { 
     characterRange += lowerCase; 
  }
  if (hasUppercase) { 
     characterRange += upperCase; 
  }
  if (hasNumerics) { 
     characterRange += numeric; 
  }
  if (hasSpecials) { 
     characterRange += specialChars; 
  }

  // Return 
  return characterRange;
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
