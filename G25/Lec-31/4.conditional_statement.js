let age = prompt("Please enter your age:");

age = Number(age);

if (age >= 18) {
    console.log("You are eligible to vote.");
} else if (age > 0 && age < 18) {
    console.log("You are not eligible to vote.");
} else {
    console.log("Invalid age entered.");
}