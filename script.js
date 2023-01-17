// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
}

function generatePassword() {

  // possible characters for the password
  let totalCharacters = "";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz"
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbers = "1234567890"
  const characters = "!@#$%^&*"
 
  // get the password length
  let passwordLength = prompt("Enter the password length (8-128 characters)");
  

  // validate password length
  if (passwordLength < 8 || passwordLength > 128) {
    alert("this number is not valid")
    alert("You must select at least one type of characters!")
    return generatePassword();
    
  }

  let lowerConfirm = confirm("Do you want to include lowercase characters?");
  if (lowerConfirm == true) {
    totalCharacters += lowerCase
  }

  let upperConfirm = confirm("Do you want uppercase characters?");
  if (upperConfirm == true) {
    totalCharacters += upperCase
  }
  
  let numbersConfirm = confirm("Do you want to include numbers?");
  if (numbersConfirm == true) {
    totalCharacters += numbers
  }
 
  let charactersConfirm = confirm("Do you want to include characters?");
  if (charactersConfirm == true) {
    totalCharacters += characters
  }
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
