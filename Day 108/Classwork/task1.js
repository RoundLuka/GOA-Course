//  ამ მისამართზე გააგზავნეთ მოთხოვნა  fetch ფუნქციის დახმარებით, ახსენით რას აკეთებს ეს ფუნქცია, შემდეგ დაბეჭდეთ პირდაპირ დაბრუნებული დაპირება კონსოლში, ახსენით რა არის დაპირება რეალური ცხვორების მაგალითიდ, როცა დაპირება დამყარდება გამოიყენეთ then და  catch ფუნქციები და ახსენით მათი დანიშნულება, აგრეთვე ახსენით რა არის  json და რატომ არის json მეთოდი ასინქრონიზირებული

// fetch function will send request to following address to retrive data
// then it will return data in json format
const promise = fetch('https://jsonplaceholder.typicode.com/todos');

promise 
    // then and catch methods are consumers, which means they use
    // data that was fetched from address
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("Error occured", error));

// json is data format which is convinient for transfering data in web
// json is asynchronous because promise takes time to fetch data from address
