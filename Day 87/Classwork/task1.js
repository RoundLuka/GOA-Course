// 1) შექმენით ინეტრვალი, გადაცემულ ფუნციაში 
// ყოველ ჯერზე შექმენით date ობიექტი, როცა ამჟამინდელი 
// წუთი გაუტოლდება 35, უნდა გაითიშოს ინეტრვალი

let time = 0;
const date = setInterval(function(){
    time ++
    console.log("Current minutes: " + time)
    if(time === 34){
        console.log("Time up")
        clearInterval(date); 
    }
    console.log(date)
},60000)