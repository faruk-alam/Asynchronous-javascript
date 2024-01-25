 const count = true;

let countValue = new Promise(function (resolve, reject) {
     if (count) {
         resolve("There is a count value.");
     } else {
         reject("There is no count value");
     }
 });

console.log(countValue);

// Promise {<resolved>: "There is a count value."}
// // In the above program, a Promise object is created that takes two functions: resolve() and reject().
// // resolve() is used if the process is successful and reject() is used when an error occurs in the promise.
// // The promise is resolved if the value of count is true.


















