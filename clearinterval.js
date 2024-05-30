let count = 0;
let interval = setInterval(() => {
    count += 1;
    console.log(count)
    if(count === 5){
        clearInterval(interval)
    }
    
}, 2000);
