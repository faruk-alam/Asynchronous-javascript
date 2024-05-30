let count = 0;
function increaseCount() {
  for( count= 0;count < 10;count++)  {
    console.log(count)
  }    
}
 let increasetime = setTimeout(increaseCount,1000)
 console.log(increasetime)
 clearTimeout(increaseCount)