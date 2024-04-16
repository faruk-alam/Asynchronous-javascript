const taskOne = () =>{
    return new Promise((resolve,reject)=>{
        resolve("Task1 is completed")
    })
}
const taskTwo = () =>{
    return new Promise((resolve,reject)=>{
        resolve("Task2 is completed")
    })
}
const taskThree = () =>{
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        resolve("Task3 is completed")
       },3000)
    })
}
const taskFour = () =>{
    return new Promise((resolve,reject)=>{
        reject("Task4 is not completed")
    })
}
const taskFive = () =>{
    return new Promise((resolve,reject)=>{
        resolve("Task5 is completed")
    })
}

async function callAlltask(){
 try {
    const t1 = await taskOne();
    console.log(t1)
    const t2 = await taskTwo();
    console.log(t2)
    const t3 = await taskThree();
    console.log(t3)
    const t4 = await taskFour();
    console.log(t4)
    const t5 = await taskFive();
    console.log(t5)
 } catch (error) {
    console.log(error)
 }
 finally{
    console.log("Fixed and resolved")
 }
}

callAlltask();
// taskOne()
// .then(res => console.log(res))
// .then(taskTwo)
// .then(res => console.log(res))
// .then(taskThree)
// .then(res => console.log(res))
// .then(taskFour)
// .then(res => console.log(res))
// .then(taskFive)
// .then(res => console.log(res))
// .catch(err => console.log(err))
// .finally(res =>console.log("fixed and resolved"))