/** @format */

// Assignment code here

// declared variables used in code
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~\\";
let charCount;

//prompt function for asking how many characters should be in the password
function promptValidate() {
  charCount = prompt(
    "How many characters would you like in your password? (8 to 128 characters)"
  );
  if (charCount < 8) {
    alert("Please input a number between 8 and 128");
    promptValidate();
  }

  if (charCount > 128) {
    alert("Please input a number between 8 and 128");
    promptValidate();
  }
}

function confirmInput() {
  let possibleCharacters = "";
  //lowercase letter confirmation box
  const lowerConfirm = confirm("do you want to include lowercase letters");
  if (lowerConfirm) {
    possibleCharacters += lowerChars;
  }

  //uppercase letter confirmation box

  const upperConfirm = confirm("Do you want to include uppercase letters");
  if (upperConfirm) {
    possibleCharacters += upperChars;
  }

  //numbers confirmation box
  const numberConfirm = confirm("do you want to include numbers");
  if (numberConfirm) {
    possibleCharacters += numberChars;
  }

  //special characters confirmation box
  const specialConfirm = confirm("do you want to include special characters");
  if (specialConfirm) {
    possibleCharacters += specialChars;
  }

  if (
    lowerConfirm == false &&
    upperConfirm == false &&
    numberConfirm == false &&
    specialConfirm == false
  ) {
    alert("Please select one of the following");
    confirmInput();
  }

  return possibleCharacters;
}

//function is used to take the number types in the prompt and create a random string of numbers/letters/characters based on the users selection

function createPassword(charactersChosen) {
  let returnString = "";
  for (var i = 1; i <= charCount; i++) {
    returnString +=
      charactersChosen[
        Math.floor(Math.random() * (charactersChosen.length + 1))
      ];
  }
  alert(returnString);
}

// Write password to the #password input, this is where all of the functions above are used and triggered when the button is clicked
function writePassword() {
  promptValidate();
  let userSelectedCharacters = confirmInput();
  let charactersChosen = userSelectedCharacters.split("");
  createPassword(charactersChosen);
}
