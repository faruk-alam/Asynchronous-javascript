console.log("Wellcome");

 //javascript then() method 

 let countvalue = new Promise((resolve, reject) => {
     resolve("completed successfully")
 })
 countvalue.then((res) => {
     console.log(res);
 })
 .then(() => {
     console.log("completed 2nd time successfully")
})

// In the above program, the then() method is used to chain the functions to the promise. The then() 
// method is called when the promise is resolved successfully.
// We can chain multiple then() methods with the promise
 


// JavaScript catch() method

let countvalue1 = new Promise((resolve, reject) => {
    reject("rejected unexpectedly");
})
countvalue1.catch((err) => {
    console.log(err);
})

//JavaScript finally() method

let countvalue3 = new Promise((resolve, reject) => {
    resolve("completed successfully")
})
countvalue3.finally(() => {
  console.log("The code is executed successfully");
})






















console.log("Goodbye")
