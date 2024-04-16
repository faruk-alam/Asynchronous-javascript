// async function f1(){
//     console.log("Ascynchronous function")
//     return Promise.resolve(1)
// }
// f1();
// Since the funnction return a promise,so we can use promise chaining method then().
// f1().then(result => console.log(result));
// In the above program, the f() function is resolved and the then() method gets executed.

 let promise1 = new Promise((resolve, reject) => {
     setTimeout(() => {
         resolve("promise resolved")
     }, 2000);
 })
// promise.then((result)=>{
//     console.log(result)
// })
async function asinkfunc(){
    let result = await promise1;
    console.log(result)
    console.log("done")
}
asinkfunc();