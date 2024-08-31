setInterval(function(){
    const d = new Date();
    console.log(d);
},1000)

```
let time = 10;
const id = setInterval(function{
    time --;
    console.log(time)
    if(time === 0){
        clearInterval(id);
        console.log("Time up)
    }
    console.log(id);
},1000)
```

// takes 2 arguments: function, ms
setInterval(function(){},1000)


let time = 10;

setTimeout(function{
    console.log("1 second passed")
},1000)