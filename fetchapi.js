// the fetch() has replaced XMLHttpRequest
// the fetch() is global method for making httprequest.
//There are two ways for calling - then (),async/await
// the fetch return a promise.

// send GET request by using fetch()
// fetch("https://jsonplaceholder.org/posts/")
// .then((res) =>{
//     if(!res.ok){
//         const msg = `Error : ${res.status}`;
//         throw new Error(msg)
//     }
//     return res.json();
// })
// .then((res) => console.log(res))
// .catch((err) => console.log(err))

// send POST request by using fetch()
// fetch("https://jsonplaceholder.typicode.com/posts",{
// method: "POST",
// Headers : {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// body: JSON.stringify({
//   title:"Hello World",
//   body:"My POST request",
//   userId:111,
// }),
// })
// .then((res) =>{
//      if(!res.ok){
//          const msg = `Error : ${res.status}`;
//          throw new Error(msg)
//      }
//      return res.json();
//  })
// .then((res) => console.log(res))
// .catch((err) => console.log(err))

// send PUT request by using fetch()
//  fetch("https://jsonplaceholder.typicode.com/posts",{
//  method: "PUT",
//  Headers : {
//      "Content-type": "application/json; charset=UTF-8",
//    },
//  body: JSON.stringify({
//      Id : 1,
//    title:"Hello THERE",
//    body:"My NEW request",
//    userId: 223,
//  }),
//  })
// .then((res) =>{
//      if(!res.ok){
//          const msg = `Error : ${res.status}`;
//          throw new Error(msg)
//      }
//      return res.json();
//  })
// .then((res) => console.log(res))
// .catch((err) => console.log(err))

// send PATCH request by using fetch()
// fetch("https://jsonplaceholder.typicode.com/posts/1",{
// method: "PATCH",
// Headers : {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// body: JSON.stringify({
//   userId: 201,
// }),
// })
// .then((res) =>{
//      if(!res.ok){
//          const msg = `Error : ${res.status}`;
//          throw new Error(msg)
//      }
//      return res.json();
//  })
// .then((res) => console.log(res))
// .catch((err) => console.log(err))

// send DELETE request by using fetch()
fetch("https://jsonplaceholder.typicode.com/posts/1",{
method : "DELETE",
})
.then((res) =>{
     if(!res.ok){
         const msg = `Error : ${res.status}`;
         throw new Error(msg)
     }
     return res.json();
 })
.then((res) => console.log(res))
.catch((err) => console.log(err))