let currentYear = new Date().getFullYear();
//check the input is a 4-digit year between 1900 and the current year
function isValidYear(text) {
    let year = Number(text.trim());
    return /^\d{4}$/.test(text.trim()) && year >= 1900 && year <= currentYear;
}
let input = prompt("Enter your year of birth");//prompt the user to enter their year of birth
//keep asking until the input is valid or the user presses Cancel
while (input !== null && !isValidYear(input)) {
    input = prompt("Invalid year. Enter a 4-digit year between 1900 and " + currentYear);
}
if (input === null) {
    console.log("No year of birth entered");
} else {
    //calulate the user's current age
    let age = currentYear - Number(input);
    //Determine the user's category base on their ages
    if (age < 18) {
        console.log("You are a minor");
    } else if (age <= 36) {
        console.log("You are a youth");
    } else {
        console.log("You are an elder");
    }
}
