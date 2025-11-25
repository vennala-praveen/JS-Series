// function functionName(parameters){
//     //code to be executed
// }

/*------------------ Function dec ------------------ */
function myName(){
     console.log("Hi jii !");
}

myName();


/*------------- function with parameters*/
function user(name){
    console.log("Hi "+name+"!");
}

user("Tony");


// function with return values
function sub(a, b){
    return a - b;
}

let x = sub(577,57);
console.log(x);

//Hoisting
myFunction();

function myFunction() {
  console.log("Hoisting");
} 

// function expression
let display = function(){
    console.log("Welcome to function");
} 
display();


// default parameters --- If no argument is passed, the default value "Sung" is used.
function greet(name = "Sung"){
    console.log("Hello, "+ name);
}
greet();
greet("Jinwoo");