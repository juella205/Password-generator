// Assignment code here
//const lowerCase = "abcdefghijklmnopqrstuvwxyz"
 // const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 // const numbers = "1234567890"
  //const characters = "!@#$%^&*"

  var lowerCase = [

    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];

  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  var specialCharacters = ['!','@', '#', '$', '%', '^', '&', '*', '?'];









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
 
 
  // get the password length
  let passwordLength = prompt("Enter the password length (8-128 characters)");
  

  // validate password length
  if (passwordLength < 8 || passwordLength > 128) {
    alert("this number is not valid")
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
 
  let specialCharactersConfirm = confirm("Do you want to include special characters?");
  if (specialCharactersConfirm == true) {
    totalCharacters += specialCharacters
  }
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
