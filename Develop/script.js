// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var bank = "";
  
  let num = prompt("How many characters would you like your password to contain?");

  if (num != null && num >= 8 && num <= 128) {
    let special = confirm("Click OK to confirm special characters.");

    if (special == true) {
      let specials = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
      bank = bank.concat(specials);
    }

    if (special != null) {

      let numeric = confirm("Click OK to confirm including numeric characters.");
      
      if (numeric == true) {
        let numerals = "0123456789";
        bank = bank.concat(numerals);
      }

      if (numeric != null) {

        let lowercase = confirm("Click OK to include Lowercase characters.");

        if (lowercase == true) {
          let lowers = "abcdefghijklmnopqrstuvwxyz";
          bank = bank.concat(lowers);
        }

        if (lowercase != null) {
          let uppercase = confirm("Click OK to include Uppercase characters.");
          if (uppercase == true) {
            let uppers = "abcdefghijklmnopqrstuvwxyz";
            uppers = uppers.toUpperCase();
            bank = bank.concat(uppers);
          }

          var password_ret = "";
          for (let i=0; i < num; i++) {
            let character = bank.charAt(Math.floor(Math.random() * bank.length));
            password_ret = password_ret.concat(character);
          }

          return password_ret;
        }
      }
    }
  }
  else { // num_char is invalid
    alert("Invalid number of characters");
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/* // Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
console.log("You clicked the button!")

let person = prompt("How many characters would you like your password to contain?",);

if (person != null) {
}

//1. Prompt the user for the password criteria
//    a. Password Length 8 < 128 characters
//    b. Lowercase, uppercase, numbers, special characters
//2. Validate the input
//3. Generate password based on criteria.




//4. Display password to the page. 
return "generated password will go here!"
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
*/