// let a;
// let b;
// let c;

// document.getElementById("type").onclick = function(){

//   a =document.getElementById("first").value;
//   a = Number(a);

//   b = document.getElementById("second").value;
//   b = Number(b);

//   c = Math.sqrt(Math.pow(a,2)+Math.pow(a,2));
//   document.getElementById("result").innerHTML += c;

// }

// let count=0;

// document.getElementById("dec").onclick = function () {
//   count -= 1;

//   document.getElementById("value").innerHTML = count;
// };
// document.getElementById("res").onclick = function () {
//   count = 0;
//   document.getElementById("value").innerHTML = count;
// };
// document.getElementById("inc").onclick = function () {
//   count += 1;
//   document.getElementById("value").innerHTML = count;
// };

// document.getElementById("button").onclick = function () {
//   const subcribe = document.getElementById("sub");
//   const visa = document.getElementById("visa");
//   const master = document.getElementById("master");
//   const paypal = document.getElementById("paypal");

//   if (subcribe.checked) {
//     console.log("print");
//   } else {
//     console.log("not print");
//   }
//   if (visa.checked) {
//     console.log("visa");
//   } else if (master.checked) {
//     console.log("master");
//   } else if (paypal.checked) {
//     console.log("paypal");
//   } else {
//     console.log("not print");
//   }
// };

// var a = [20,30,"vishnu",40]

// console.log(...a)

// let username;

// do {
//   username = window.prompt("enter the value");
// } while ((username == ""));

// console.log("hello", username);

// let area;
// let width;
// let height;

// width = window.prompt("value");
// height = window.prompt("value");

// area = getArea(width, height);

// function getArea(width, height) {
//   return width * height;
// }
// console.log();

// document.getElementById("submitbutton").onclick = function() {
//   let temp;

//   if (document.getElementById("cbutton").checked) {
//      temp = document.getElementById("textbox").value;
//     temp = Number(temp);
//     temp = toCelsius(temp);
//     document.getElementById("result").innerHTML = temp + "°c";
//   } else if (document.getElementById("fbutton").checked) {
//      temp = document.getElementById("textbox").value;
//     temp = Number(temp);
//     temp = toFahrenheit(temp);
//    document.getElementById("result").innerHTML = temp + "°f";
//   } else {
//     document.getElementById("result").innerHTML = "select a unit";
//   }
// };

// // temp =toCelsius(temp)

// function toCelsius(temp) {
//   return  (temp - 32) * (5 / 9);
// }
// function toFahrenheit(temp) {
//   return (temp * 9) / 5 + 32;
// }

// let students = ["spark", "power", "mileage"];
// students.forEach(capitalize);
// // students.forEach(print);

// function capitalize(element, index, array) {
//   array[index] = element[0].toUpperCase() + element.substring(1);

// }
//  console.log(students);

/*function print(element){
    console.log(element)
    
 }
*/

// let grades = [100, 20, 30, 56];

// grades.sort((x, y) => y - x);

// grades.forEach((Element) => {
//   console.log(Element);
// });

// let cards = [
//   "A",
//   "2",
//   "3",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "10",
//   "J",
//   "Q",
//   "K",
// ];

// shuffle(cards);

// console.log(cards);

// function shuffle(array) {
//   let currentIndex = array.length;

//   while (currentIndex != 0) {
//     let randomIndex = Math.floor(Math.random() * array.length);
//     currentIndex -= 1;

//     let temp = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temp;

//     return array;
//   }
// }

// let store = new Map([
//   ["t-shirt", 20],
//   ["jeans", 30],
//   ["shirt", 40],
// ]);

// let shopping = 1
// shopping = store.get("jeans");
// console.log(shopping)


// store.forEach((value, key) => console.log( `${key} $ ${value}`));
