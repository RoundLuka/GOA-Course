const githubName = document.querySelector("input");
const submit = document.querySelector("button");
const profilesDiv = document.getElementById("profiles");

submit.addEventListener("click", (target) => {
    target.preventDefault();
    let userName = githubName.value;
    
    const promise = fetch(`https://api.github.com/users/${userName}`);

    promise 
    .then((response) => response.json())
    .then(renderItems) 
    .catch((error) => console.log("Error occured, couldn't retrive data", error));


})

function renderItems(items) {
    console.log(items);
    const div = document.createElement("div");
    
    div.innerHTML += `
        <div>
            <p>userId:${items.avatar_url}</p>
            <h2>${items.bio}</h2>
            <p>Completed: ${items.name}</p>
        </div> 
        `
    profilesDiv.appendChild(div);
}
