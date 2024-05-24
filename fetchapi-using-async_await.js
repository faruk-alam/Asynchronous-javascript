// fetch() api with async/await

const makeRequest = async (url,config) =>{
   const res = await fetch(url,config);
   if(!res){
    const msg = `Error : ${res.status}`
    throw new Error(msg)
   }
   return await res.json()
  
}
// get request using fetch() with async/await - 

// const getData = () =>{
//     makeRequest("https://jsonplaceholder.typicode.com/posts")
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
// }
// getData();

// Post request using fetch() with async/await - 
// const sendData = () =>{
//     makeRequest("https://jsonplaceholder.typicode.com/posts", {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'foo',
//           body: 'bar',
//           userId: 1,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
// })


// put request using fetch() with async/await - 
const updateData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
        method: 'PUT',
        body: JSON.stringify({
          title: 'foFOFOFOo',
          body: 'barERERER',
          userId: 11,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
})
.then(res => console.log(res))
.catch(err => console.log(err))
}
// updateData()
// put request using fetch() with async/await - 
const deleteData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
        method: 'DELETE',

})
.then(res => console.log(res))
.catch(err => console.log(err))
}
deleteData()

