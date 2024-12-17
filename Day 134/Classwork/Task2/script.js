const myform = document.getElementById("myform")
const login = document.getElementById("login");
const data = []

myform.addEventListener("submit",(e) =>{
    e.preventDefault()
    const email = myform.email.value
    const pass = myform.pass.value
    const acc = { email,pass}
    data.push(acc)
    localStorage.setItem("accounts",JSON.stringify(data))
});

login.addEventListener("submit",(e) =>{
    e.preventDefault();
    const email = myform.email.value
    const pass = myform.pass.value
    
    for(let i = 0; i < localStorage.length; i++){
        const acc = localStorage[i];
        if(email == acc[0] && pass == acc[1]) {
            console.log("found")
        }
    }
})
