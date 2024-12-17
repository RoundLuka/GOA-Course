const btn = document.querySelector("button");
const p = document.querySelector("p");
const container = document.querySelector("main");

btn.addEventListener("click", () => {
    getData();
});

async function getData() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data)  
        renderInfo(data);
    } catch(error) {
        console.log("Error: ", error)
    }
}

function renderInfo(data) {
    container.innerHTML = '';
    for(let i = 0; i < data.length; i++){
        const item = data[i];
        container.innerHTML += `
            <div>
                <p>${item.title}</p>
            </div>
        `
    }
}
