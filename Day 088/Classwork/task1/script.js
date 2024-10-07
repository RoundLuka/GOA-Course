const form = document.getElementById("my-form");

function presentational(tr){
    form.nextElementSibling.children[1].appendChild(tr);
}

function container(form){

    const data = [form.fullname.value, form.email.value, form.tel.value];
    const tr = document.createElement("tr");

    const tdArr = [];

    for(let i = 0; i < 3; i ++){
        const td = document.createElement("td");
        td.textContent = data[i];
        tdArr.push(tr);
    }


    presentational(tr);
}

form.addEventListener("submit",function(e){
    e.preventDefault();

    container(form);

})
