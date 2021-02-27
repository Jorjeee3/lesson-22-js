// const age = parseInt(prompt("How old are you ?"));

// if (age <= 12) {
//     console.log("You are so little");
// } else if ( age <= 18) {
//     console.log("You are teenager");
// } else if (age <= 60) {
//     console.log("You are old");
// } else if (age <= 95) {
//     console.log("You are very old");
// } else if (age <= 120) {
//     console.log("Heyy you are so lucky !!!!");
// }

// --------------------------------------TASK-1------------------------------------------------


// const number = prompt("Enter an any number from 1 to 9");

// switch (number) {
//     case "1" :
//         console.log("!");
//         break;
    
//     case "2" :
//         console.log("@");
//         break;
    
//     case "3":
//         console.log("#")
//         break;
    
//     case "4":
//         console.log("$")
//         break;
    
//     case "5":
//         console.log("%")
//         break;
    
//     case "6":
//         console.log("^")
//         break;
    
//     case "7":
//         console.log("&")
//         break;
    
//     case "8":
//         console.log("*")
//         break;
    
//     case "9":
//         console.log("(")
//         break;
    
// }


// --------------------------------------TASK-2------------------------------------------------



// const threeDigitNumber = parseInt(
//     prompt("Enter the three digit number"),
// );
//     let number = threeDigitNumber + " ";

//     if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2])
// {
//     console.log("numbers are repeated");
// } else {
//     console.log("numbers are not repeated");
// }



// --------------------------------------TASK-3------------------------------------------------

// let year = parseInt(prompt("Enten a year: "));

// function leapYear(year) {
//     return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0) ;
// }


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// --------------------------------------TASK-4------------------------------------------------


// const FiveDigitNumber = prompt("Enter the Five-digit number");
//     let num = FiveDigitNumber;
// if (num [0] === num [4] && num [1] == num [3])   
// {
//     console.log("this number is palindrome");
// } else
// {
//     console.log("this number is not palindrome");
// }


// --------------------------------------TASK-5------------------------------------------------

const amount = parseInt(prompt("Enter the amount of USD:"));
const currency = prompt("EUR, UAH, AZN");

switch(currency) {
    case "EUR":
        console.log(amount * 0.83 + "EUR");
        break;
    case "UAH":
        console.log(amount * 27.90 + "UAH");
        break;
    case "AZN":
        console.log(amount * 1.7 + "AZN");
        break;
}


// --------------------------------------TASK-6------------------------------------------------

// const sum = parseInt(prompt("Enter purchase amount"));



// if (sum < 200) {

//     console.log("You have no discount");
//     console.log("You have saved", sum);

// } else if (sum >= 200 || sum <= 300) {

//     console.log("You have a discount");
//     console.log("You have saved", sum * 3 / 100, "USD");

// } else if (sum > 300 || sum <= 500) {
    
//     console.log("You have a discount");
//     console.log("You have saved", sum * 5 / 100, "USD");

// } else {

//     console.log("You have a discount");
//     console.log("You have saved", sum * 7 / 100, "USD");
// }
    

// --------------------------------------TASK-7------------------------------------------------

// const CircleLength = parseInt(prompt("Enter the length of circle"));
// const SquareleLength = parseInt(prompt("Enter the length of square"));

//     let Scircle = 3.14 * Math.pow((CircleLength / 6.28),2);
//     let Ssquare = 3.14 * Math.pow((SquareleLength / 4),2);

//     if (Scircle < Ssquare)
// {
//         confirm("circle can fit into a square");
//         console.log("circle can fit into a square");
// } else
//     {
//         confirm("circle cannot fit into a square");
//         console.log("circle cannot fit into a square");
//     }



// --------------------------------------TASK-8------------------------------------------------

// const number = parseInt(prompt("2 + 2 = ?"));
// let userNumber = number

// if (userNumber === 4) {

//     confirm("Your right");
//     console.log(userNumber);

// } else if (userNumber === 3) {

//     confirm("false, a little more");
//     console.log(userNumber);

// } else if (userNumber === 5) {
    
//     confirm("false, a little less");
//     console.log(userNumber);

// } else {

//     confirm("try to learn math");
//     console.log(userNumber);
// }


// const shape = prompt("what is the shape of the earth ?");
// let userShape = shape

// if (userShape === "round") {

//     confirm("Your right, it is" + userShape);
//     console.log(userShape);

// } else if (userShape === "square") {

//     confirm("Are your seriously???" + userShape + "???");
//     console.log(userShape);

// } else if (userShape === "flat") {

//     confirm("hahahhaha" + userShape + ")))");
//     console.log(userShape);

// } else {
    
//     confirm("Try again man");
//     console.log(userShape);
    
// }


// const chiсkenEgg = prompt("what came first chicken or egg ?") 
// let userEgg = chiсkenEgg

// if (userEgg === "chicken") {

//     confirm("noup");
//     console.log(userEgg);

// } else if (userEgg === "egg") {

//     confirm("noup");
//     console.log(userEgg);

// } else if (userEgg === "i dont know") {

//     confirm("i dont know too))");
//     console.log(userEgg);

// } else {
    
//     confirm("Try again man");
//     console.log(userEgg);
    
// }

// --------------------------------------TASK-9------------------------------------------------








// --------------------------------------TASK-10------------------------------------------------