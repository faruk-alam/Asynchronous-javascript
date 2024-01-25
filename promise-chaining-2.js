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
taskOne()
.then(res => console.log(res))
.then(taskTwo)
.then(res => console.log(res))
.then(taskThree)
.then(res => console.log(res))
.then(taskFour)
.then(res => console.log(res))
.then(taskFive)
.then(res => console.log(res))
.catch(err => console.log(err))