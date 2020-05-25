//********************************** RANDOMIZE ********************************* */
var generateBtn = document.querySelector("#generate");
//This is from Dave's Javascript cheatsheets to help randmoize the selections in the charactersArray
function randomize(charactersArray) {
    var randomIndex = Math.floor(Math.random() * charactersArray.length);
    var randomCharacter = charactersArray[randomIndex];
    return randomCharacter;
}

//********************************** GENERATE THE PASSWORD ********************************* */
//This funtion generates the password
function generatePassword() {
    var myPasswordLength = 0;
    //My tutor helped me construct this while loop to create limits to the password characters
    //myPasswordLength < 8 is no less than the number "8" will be accepted 
    //|| equals "or"
    // myPasswordLength > 128 is no more than the number "128" will be accepted 
    // isNaN is not a number
    // so when the number entered is between 8 and 128, and is only a number entered, the additional confirmations will run to 
    //collect the parameters of the user's password
    while (myPasswordLength < 8 || myPasswordLength > 128 || isNaN(myPasswordLength)) {
        myPasswordLength = parseInt(
            prompt("How many characters would you like (please pick a number between 8 and 128)?")
        );
    }
    var lowerCase = confirm(
        "Would you like lowercase letters?"
    );
    var upperCase = confirm(
        "Would you like uppercase letters?"
    );
    var numbers = confirm(
        "Would you like numbers?"
    );
    var specialCharacters = confirm(
        "Would you like special characters?"
    );
    //my arrays to choose from for the password characters
    var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numbersCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var characters = ["!", "@", "#", "$", "%", "&", "*"];

    //optionsArray assembles the concatinated arrays selected
    var optionsArray = [];
    //passwordArray collects the assembed strings from the optionsArray
    var passwordArray = [];


    //when the confirmations are comfirmed or rejected by the user, the if statements pull and concat into the optionsArray
    //then then randomly selected strings are pushed into the passwordArray
    //This only happens if the user confirmed which equals true in the if statement
    if (lowerCase === true) {
        optionsArray = optionsArray.concat(lowerLetters);
        passwordArray.push(randomize(lowerLetters));
    }
    if (upperCase === true) {
        optionsArray = optionsArray.concat(upperLetters);
        passwordArray.push(randomize(upperLetters));
    }
    if (numbers === true) {
        optionsArray = optionsArray.concat(numbersCharacters);
        passwordArray.push(randomize(numbersCharacters));
    }
    if (specialCharacters === true) {
        optionsArray = optionsArray.concat(characters);
        passwordArray.push(randomize(characters));
    }
    //if the user doesn't select and options, the user will receive and error prompt so something MUST be selected
    //! is equal to bang is means "NOT" so the below says if "Not" lowercase etc.
    if (!lowerCase && !upperCase && !numbers && !specialCharacters) {
        alert("Error: You must pick an option for a password!");
    }
    //For loop based on Dave's cheatsheet and helped with by tutor
    //For the number provided by myPasswordLength, the optionsArray must push as many strings equal to myPasswordLength into
    //the passwordArray
    //It must loop through the randomize and push process in the optionsArray the same amount of times desginated by myPasswordLength
    for (var i = passwordArray.length + 1; i <= myPasswordLength; i++) {
        passwordArray.push(randomize(optionsArray));

    }

    return passwordArray.join("")

}
//********************************** WRITE THE PASSWORD ********************************* */
//Provided by the homework
//This function writes the password that was generated
//When the writePassword function is running, it calls the generatePassword function
//It then attaches/appends the password generated to the password id established on the HTML page which shows it on the broswer
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    return (password);
}
//**********************************PRESS THE GENERATE PASSWORD BUTTON********************************* */
//when the generate button is clicked (addEventListener) the writePassword funtion is called
generateBtn.addEventListener("click", writePassword);
