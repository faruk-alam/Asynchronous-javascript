// webStorage API - localStorage,sessionStorage,cookies

//localeStorage -
//localeStorage.setItem(key,value)
//localeStorage.getItem(key,value)
//localeStorage.removeItem(key,value)
//localstorage.clear()

// setting data to local storage - 
localStorage.setItem("username","Marco")
localStorage.setItem("password","9weu$po?")

// getting data from localStorage - 
const userName = localStorage.getItem("username");
const userPass = localStorage.getItem("password");
console.log(userName,userPass);

// romoving data from local storage -
localStorage.removeItem("username")
localStorage.removeItem("password")

// setting data as an array to local storage-
// using JSON.stringify() to convert string from an array.

const fruits = ["Apple","Banana","Orange","Strawberry"]
localStorage.setItem("fruits",JSON.stringify(fruits));

// getting data as an array from local storage -
// using JSON.parse() to convert an array from a string.
const fruitList = JSON.parse(localStorage.getItem("fruits"));
console.log(fruitList)

// deleting all data 
localStorage.clear() ;

//sessionStorage -
//sessionStorage.setItem(key,value)
//sessionStorage.getItem(key,value)
//sessionStorage.removeItem(key,value)
//sessionStorage.clear()


// setting data to local storage - 
sessionStorage.setItem("username","Marco")
sessionStorage.setItem("password","9weu$po?")

// getting data from localStorage - 
const usersName = sessionStorage.getItem("username");
const usersPass = sessionStorage.getItem("password");
console.log(userName,userPass);

// romoving data from local storage -
sessionStorage.removeItem("username")
sessionStorage.removeItem("password")

// setting data as an array to local storage-
// using JSON.stringify() to convert string from an array.

const fruit = ["Apple","Banana","Orange","Strawberry"]
localStorage.setItem("fruits",JSON.stringify(fruits));

// getting data as an array from local storage -
// using JSON.parse() to convert an array from a string.
const fruitsList = JSON.parse(localStorage.getItem("fruit"));
console.log(fruitsList)

// deleting all data 
localStorage.clear() ;

// cookies
 document.cookie = "user = Marco ; expaires = sun,02 jun 2024 09:27:30 GMT"
