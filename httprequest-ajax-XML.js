// format of sending XMLHttpRequest
const  makeRequest = (method,url,data) =>{
    const httpReqst = new XMLHttpRequest();
    // using open() function to set XMLHttpRequest.
    httpReqst.open(method,url,)
    httpReqst.setRequestHeader("Content-Type","application/json")
    // using onload() function to get response.
    httpReqst.onload = ()=>{
        let data = httpReqst.response
        //console.log(JSON.parse(data))
    }
    // using onerror() function for checking errors.
    httpReqst.onerror = () =>{
        console.log("Error Connection")
    }
    // using send() function for sending request.
    httpReqst.send(JSON.stringify(data))
}

// sending GET request - 
const getData = () =>{
    makeRequest("GET","https://jsonplaceholder.typicode.com/posts")
}
//getData();

// send POST request - 
const postData = () =>{
    makeRequest("POST","https://jsonplaceholder.typicode.com/posts",{
        title: "Hello World",
        body: "My POST request",
        userId: 900,
    })
}
// postData();

// send PUT request 
 const updateData = () =>{
     makeRequest("PUT","https://jsonplaceholder.typicode.com/users/1",{
         title: "Hello there",
         body: "My new request",
         userId: 1000,
     })
 }
//updateData();

// send PATCH request

const updatesingleData = () =>{
    makeRequest("PATCH","https://jsonplaceholder.typicode.com/posts/1",{
        title: "title has been changed",
    })
}
// updatesingleData();

// send delete request - 
const deleteData = () =>{
    makeRequest("DELETE","https://jsonplaceholder.typicode.com/posts/1",{
    })
}

deleteData();





// httpReqst.open("GET","https://jsonplaceholder.typicode.com/users")
// httpReqst.send()
// Using readystatechange event -
// httpReqst.addEventListener("readystatechange",() => {
//      console.log(httpReqst,httpReqst.readyState)
//     // if(httpReqst.readyState === 4){
//     //     console.log(httpReqst.responseText)
//     // }
// })