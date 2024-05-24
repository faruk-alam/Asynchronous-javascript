const httpReqst = new XMLHttpRequest();
httpReqst.addEventListener("readystatechange", () => {
    // console.log(httpReqst,httpReqst.readyState)
    if(httpReqst.readyState === 4 && httpReqst.status === 200){
        console.log(httpReqst,httpReqst.readyState)
    } else if (httpReqst.readyState === 4){
        console.log("could not fetch the data")
    }
})
httpReqst.open("GET","https://jsonplaceholder.typicode.com/postss");
httpReqst.send();