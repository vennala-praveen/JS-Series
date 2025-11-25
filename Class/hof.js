// A function is a reusable block of code that performs a specific task.
// Functions help in breaking down complex problems into smaller,
// and promote code reusability, readability. It is defined once and can be executed as many times as needed.


function fun(){
    return function(){
        console.log("Hi!");
    }
}
fun()();
// console.log(fun()());



//call back func

function fetchData(callback){
    setTimeout(() => {
        callback("Data received");
    }, 1000);
}
fetchData(console.log);

// function order(fun){
//     fun();
// }
// order(function(){
//     console.log("Hello!");
// })


//map 
var arr=[3,4,5,7,8,9];
var ans = arr.map(function(value){
    return value*3;
})
console.log(ans);


//scope -- Function scope ensures variables declared within a function are accessible only inside it.
function greet(){
    let mg = "Hi! Fun";
    console.log(mg);
}
greet();

