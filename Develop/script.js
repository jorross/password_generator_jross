// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var charset = "";
  
  let num_char = prompt("How many characters would you like your password to contain?");

  if (num_char != null && num_char >= 8 && num_char <= 128) {
    let special_char = confirm("Click OK to confirm special characters.");

    if (special_char == true) {
      let specials = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
      charset = charset.concat(specials);
    }

    if (special_char != null) {

      let numeric_char = confirm("Click OK to confirm including numeric characters.");
      
      if (numeric_char == true) {
        let numerals = "0123456789";
        charset = charset.concat(numerals);
      }

      if (numeric_char != null) {

        let lowercase_char = confirm("Click OK to include Lowercase characters.");

        if (lowercase_char == true) {
          let lowers = "abcdefghijklmnopqrstuvwxyz";
          charset = charset.concat(lowers);
        }

        if (lowercase_char != null) {
          let uppercase_char = confirm("Click OK to include Uppercase characters.");
          if (uppercase_char == true) {
            let uppers = "abcdefghijklmnopqrstuvwxyz";
            uppers = uppers.toUpperCase();
            charset = charset.concat(uppers);
          }

          var password_ret = "";
          for (let i=0; i < num_char; i++) {
            let character = charset.charAt(Math.floor(Math.random() * charset.length));
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