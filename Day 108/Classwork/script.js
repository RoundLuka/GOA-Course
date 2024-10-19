const div = document.querySelector('div');
const promise = fetch('https://jsonplaceholder.typicode.com/todos');


// Parsing - ნიშნავს json _ის ფორმატიდან რეალურ ობიექტში გადაყვარანა,
// ის არის ასინქრონიზიურებული მეთოდი, იმიტომ რომ გარდაქმნას json _დან რეალურ ობიეტში სჭირდება დრო

function renderItems(items) {
    div.innerHTML = '';
    
    for(let item of items) {
        div.innerHTML += `
            <div>
                <p>userId:${item.userId}</p>
                <h2>${item.title}</h2>
                <p>Completed: ${item.completed}</p>
            </div> 
        `
    }
}

promise
    .then((response) => response.json())
    .then(renderItems)
    .catch((error) => console.error("Error:", error));