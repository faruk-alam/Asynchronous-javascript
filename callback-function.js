// normal function
// function greet (name){
//     setTimeout(() => {
//         console.log("Hey" + name);
//     },3000);
// }
// greet("Rahim");


// callback function
// function greet(name,callback){
//     setTimeout(() => {
//         console.log("Hi "+ name,)
//     }, 2500);
//     callback();
// }
//  function callme(){
//      setTimeout(() => {
//         console.log("Please call me")
//      }, 5000);
//  }
//  greet("Martin",callme);

// Another Example
// function getData(a,b,callBack) {
//     console.log(`The multiplaction of ${a} and ${b} is : ${a*b}`)
//     callBack();
// }

// function showData(){
//     console.log("Every multiplaction will be added by 10")
// }
// getData(3,4,showData);

// Heigher order function
function square(x){
    console.log(`square of ${x} : ${x*x}`);
}
function heigherOrderFunction (num,callback){
     callback(num);
}
heigherOrderFunction(5,square);