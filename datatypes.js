//QUESTION ONE: Password Validation
const commonWords = ["password", "123456"]; 
function validatePassword(password) {
    if (password.trim() === "") {
        return "Please enter a password";
    }
    for (let i = 0; i < password.length - 1; i++) {
        if (password[i] === password[i + 1]) {
            return "Repeated password, please try again";
        }
    }
    
    if (commonWords.includes(password.toLowerCase())) {
        return "Common password, please choose a different one";
    }
    return "password set";
}
//testing
let password1="";
console.log(validatePassword(password1));
let password2="fuuuuny";
console.log(validatePassword(password2))
let password3="123456";
console.log(validatePassword(password3))
let password4="Helo41296h8";
console.log(validatePassword(password4))

//QUESION TWO; password generation
function generatePassword(firstName, lastName) {
    const firstNameLetters = firstName.slice(0, 3);
    const lastNameLetters = lastName.slice(-3);
    const password = firstNameLetters + lastNameLetters + "@2024";
    
    return password;
}
//testing
const firstName = "Fancy";
const lastName = "Mwikali";
const generatedPassword = generatePassword(firstName, lastName);
console.log(generatedPassword); 


//QUESTION THREE: SUM
function calculateTotalCost(items) {
    let totalCost = 0;
    for (let i = 0; i < items.length; i++) {
        totalCost += items[i].price;
    }
    
    return totalCost;
}

//testing
let items=[{price: 10.99}, {price: 5.99}, {price: 29.99}];
const totalCost = calculateTotalCost(items);
console.log("The total cost is", totalCost);


//QUESTION FOUR:Capitalize words
function capitalizeWords(input) {
    const words = input.split(" ");
    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    const result = capitalizedWords.join(" ");
    
    return result;
}
//testing
const inputString = "fancy";
const capitalizedString = capitalizeWords(inputString);
console.log(capitalizedString);