console.clear()

const makeRequest = async (config) =>{
    return await axios(config)
}

// "get" request with axios
// const getData = () => {
//     makeRequest("https://jsonplaceholder.typicode.com/posts")
//     .then((res)=>console.log(res))
//     .catch((err)=>console.log(err))
// }
// getData()


// // "post" request with axios
//  const sendData = () => {
//      makeRequest({
//         url : "https://jsonplaceholder.typicode.com/posts" ,
//         method : "post",
//         data : JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//           }),
//      })
//      .then((res)=>console.log(res.data))
//      .catch((err)=>console.log(err))
//  }
//  sendData()

// // "put" request with axios
// const updateData = () => {
//     makeRequest({
//        url : "https://jsonplaceholder.typicode.com/posts/4" ,
//        method : "put",
//        data : JSON.stringify({
//            title: 'new title',
//            body: 'new body',
//            userId: 11,
//          }),
//     })
//     .then((res)=>console.log(res.data))
//     .catch((err)=>console.log(err))
// }
// updateData()

// "delete" request with axios
const deleteData = () => {
    makeRequest({
       url : "https://jsonplaceholder.typicode.com/posts/4" ,
       method : "delete",
    })
    .then((res)=>console.log(res.data))
    .catch((err)=>console.log(err))
}
deleteData()
