// setInterval(function, milliseconds)
function greet() {
    console.log("hey there! I am here")
}
setInterval(greet,5000)
console.log("Greeting is preparing :")

function showTime() {
    setInterval(() => {
        let dateTime = new Date;
    let date = dateTime.toLocaleDateString();
    let time = dateTime.toLocaleTimeString();
    console.log(date+","+ time)
},5500);
}
showTime() ;