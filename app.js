// Practise 3.2
const List = [];
List.push("Milk", "Bread", "Apples");
console.log(List);
List.splice(1, 1, "Banana", "Egg");
console.log(List);
const removeLast = List.pop();
console.log(removeLast);
List.sort();
console.log(List.indexOf("Milk"));
List.splice(1, 0, "Carrot", "Lacttuce");
console.log(List);
const List2 = ["Juice", "Pop"];
const finalList = List.concat(List2, List2);
console.log(finalList);
console.log(finalList.lastIndexOf("Pop"));

// Practise 3.3
let arr = [1, 2, 3];
let newArr = [arr, arr, arr];
console.log(newArr[1][1])
console.log(newArr[0][1])
console.log(newArr[2][1])

// Practise 3.4
let myCar = {
    make: "Corola",
    model: "xyz",
    color: "white",
    wheel: 4,
    sideMirrors: 2,
    forSale: "true"

}
console.log(myCar)
let newColor = "color";
myCar[newColor] = "red";
// console.log(myCar);
newColor = "forSale";
myCar[newColor] = "false"
console.log(myCar);
console.log(myCar.make + "  " + myCar.model)
console.log(myCar.forSale)

// Practise 3.5
let people = {
    friends: []
};
let friend1 = {
    fName: "Anaya",
    lName: "Fatima",
    id: "id1"
};
let friend2 = {
    fName: "seerat",
    lName: "zehra",
    id2: "id2"
};
friend3 = {
    fname: "Asiya",
    lName: "Zaman",
    id3: "id3"
};
people.friends.push(friend1, friend2, friend3);
console.log(people)

// Manipulating ARRAY
const theList = ['Laurence', 'Svekis', true,
    35, null, undefined,
    { test: 'one', score: 55 }, ['one', 'two']];
console.log(theList);
theList.shift();
theList.pop(6);
theList.pop(5);
theList.pop(4);
theList.unshift("FIRST");
console.log(theList);
theList[3] = "Hello World";
theList[2] = "MIDDLE";
theList[4] = "LAST";
console.log(theList)

// Assigment
let storeItems = [
    item1 = {
        name: "mobile",
        model: "samsung",
        cost: "45,000/=",
        qtn: "3"
    },
    item1 = {
        name: "mobile",
        model: "nokia",
        cost: "50,000/=",
        qtn: "5"
    },
    item1 = {
        name: "mobile",
        model: "apple",
        cost: "55,000/=",
        qtn: "4"
    }
]
console.log(storeItems)

// Chapter 4
// Practice 4.1

let app = false;
if (app) {
    console.log("app is true");
}
if (!app) {
    console.log("app is false")
}

// Practise 4.2
// let age = prompt("How old are you?");
// age = Number(age);

// let message;
// if (age >= 21){
//     message = "confirm entry to a venue and the ability to purchase alcohol"
// }
// else if (age >= 19){
//     message = "confirm entry to the venue but deny the purchase of alcohol"
// }

//     else{message = "You are not allowed in!";}
// console.log(message);
// Practise 4.3
// let id = true;
// let message = (id) ? "Allowed in" : "Denied Get out";
// console.log(message)

// Practise 4.4
// const randomNumber = Math.floor(Math.random() * 6);
// let answer = "Something went wrong";
// let question = prompt("ASK ME ANYTHING")
// switch(randomNumber) {
//     case 0:
//         answer = "It will work out";
//         break;
//     case 1:
//         answer = "Maybe, maybe not";
//         break;
//     case 2:
//         answer = "Probably not";
//         break;
//     case 3:
//         answer = "Highly likely";
//         break;
//     default:
//         answer = "I don't know about that";   
// }
// let output = "you asked me " + question + ". I think" + answer ;
// console.log(output)

// Practise 4.5
// let prize = prompt("Select a number between 0 to 10");
prize = Number(prompt);
let output = "My selection:";
switch (prize) {
    case 0:
        output += "gold";
        break;
    case 1:
        output += "silver";
        break;
    case 2:
        output += "platinum";
        break;
    case 4:
        output += "steel";
        break;
    case 5:
        output += "brick"
        break;
    default:
        output += "Try Again"
}
console.log(output)

// CHAPTER PROJECT
// let val = prompt("enter a number");
// val = Number(val);
// let num = 100 ;
// let message = "nothing";

// if (val > num) {
//     message = val + "was greater than" + num ;
// }
// else if(val === num ) {
//     message = val + "was equal to" + num
// }
// else {
//     message = val + "was less than" + num;
// }
// console.log(message)

// FRIEND CHECKER GAME
// let person = prompt("Enter a name");
// let message3;
// switch (person) {
//     case "john":
//     case "johny":
//     case "tonny":
//     case "tom":
//         message = person + " is my friend";
//         break;
//     default:
//         message = "I don't know person" + person;
// }
// console.log(message)

// ROCK PAPER SCISSOR GAME
// const myArr = "Rock, Paper, Scissors";
// let Player = Math.floor(Math.random() * 3);
// let Computer = Math.floor(Math.random() * 3);
// let message ="Player" + myArr[Player] + "vs Computer" + myArr[Computer] + ".";

// if(Player === Computer ) {
// message = "It's a tie."
// }
// else if (Player > Computer){
// if (Computer == 0 && Player == 2){
//     message = "Computer Wins!"
// }else {
//     message = "Player Wins!"
// }
// }
// else{
//     if(Computer == 2 && Player == 0) {
//         message = "Player wins!!";
//     }
//     else{
//     message = "Computer wins!!"
//     }
// }
// console.log(message)

// CHAPTER 5
// Practise 5.1
// const max = 5 ;
// const randomNumber = Math.floor(Math.random()* max) + 1 ;

// let correct = false ; 
// while (!correct) {
//   let  guess = prompt("Guess the number 1-" + max);
//   guess = Number(guess);

//   if (guess === randomNumber) {
//    correct = true ; 
//    console.log("you got it random number" + randomNumber);
//   }
//   else if (guess > randomNumber) {
//     console.log("too high!!!");
// } else (guess < randomNumber);
// {console.log("too low!!!")}
// }

// Chapter 5 Project

// Get input from the user
const number = parseInt(prompt('Enter a number for the multiplication table:'));

// Check if the input is a valid number
if (isNaN(number)) {
  alert('Please enter a valid number.');
} else {
  // Display the multiplication table using nested loops
  console.log(`Multiplication Table for ${number}`);

  for (let i = 1; i <= 10; i++) {
    // Calculate the product
    const result = number * i;

    // Display the result
    console.log(`${number} * ${i} = ${result}`);
  }
}
