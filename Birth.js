let yearOfBirth = prompt("Enter your year of birth");//prompt the user to enter their year of birth
//calulate the user's current age
let age = new Date().getFullYear() - yearOfBirth;
//Determine the user's category base on their ages
if (age < 18) {
    console.log("You are a minor");
} else if (age >= 18 && age <= 36) {
    console.log("You are a youth");
} else {
    console.log("You are an elder");
}




