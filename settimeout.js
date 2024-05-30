// setTimeout(function, milliseconds)
function greet() {
    console.log("hey there! I am here")
}
setTimeout(greet,2000)
console.log("Greeting is preparing :")

function showTime() {
    setTimeout(() => {
        let dateTime = new Date;
    let date = dateTime.toLocaleDateString();
    let time = dateTime.toLocaleTimeString();
    console.log(date+","+ time)
},3000);
}
showTime() ;