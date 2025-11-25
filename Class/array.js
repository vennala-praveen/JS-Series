// declare an array with your fav cricketers and access the first element in a variable and print it in console.

// let x = ["Rohit", "Kohil", "Dhoni", "sky"];
// res = x[0];
// console.log(res);

// let y = ["Rohit", "Kohil", "Dhoni", "sky"];
// y[2] = "MsD";
// console.log(y);

// let j = ["Rohit", "Kohil", "Dhoni", "sky"];
// let index = j.indexOf("Kohil");

// if (index !== -1) {
//   j.splice(index, 1);
// }

// console.log(j); 


// let z = ["vizag", "bang", "London"];
// z[z.length] = "Lucknow";
// z.push('lucknow');
// console.log(z);

// let r = ["Rohit", "Kohil", "Dhoni", "sky"];
// r.pop();
// console.log(r);

//---------------------------------------------------------------//


//you have an array popular trees names and make a soft copy of that array

// let trees = ['Maple', 'Birch', 'Cedar', 'Willow', 'Mango'];
// let softcopy = trees;
// console.log(softcopy); 

// //you have an array popular fruits names and make a hard copy of that array

// let fruits = ['Jack fruit', 'Banana', 'Apple', 'pineapple', 'watermelon', 'pomegranate', 'kiwi'];
// let hardcopy = [...fruits];

// fruits.pop();
// console.log(fruits);

// console.log(hardcopy);

// //merge two arrays of popular and favourite cities
// var popularCities = ['Vizag', 'Hyderabad', 'Bangalore'];
// var favourites = ['Goa', 'Pune', 'Delhi'];
// console.log(popularCities.concat(favourites))


// //find the length of a array and store it in a variable
// const myArray = [10, 20, 30, 40, 50];
// const arrayLength = myArray.length;

// console.log(arrayLength);

// //check if London is there in an array and store it in a variable

// let cities = ['Tokyo', 'Japan', 'London', 'Paris'];
// let londonList = cities.includes('London');

// console.log(londonList);


// //while loop

// //write a loop to print the sum of numbers from 1 to 20

// let sum = 0;
// let i = 0;

// while(i<=20){
//     sum = sum + i;
//     i++;
// }

// console.log(sum);

// //write a while loop count downs from 10 to 1


// let countdown = [];
// let j = 5;

// while(j > 0){
//     countdown.push(j);
//     // console.log(countdown);
//     j--;
// }

// console.log(countdown);


// //Create a while loop. In a range of 1 to 100, how many 9s are there?

// let count = 0;
// let num = 1;

// while (num <= 1000) {
//   let str = num.toString();
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === '9') {
//       count++;
//     }
//   }
//   num++;
// }

// console.log("Number of 9's from 1 to 100:", count);



// let arr = [1];
// while(arr.length > 0){
//     arr.push(1);
// } 
// console.log(arr);


 var arr = [1,3,4,2,5,2,6,3,2,4,5,7];

 var arr1 = [...new Set(arr)]

 var x = arr1.sort(function(a,b){
  return b - a;
 })

 console.log(x);