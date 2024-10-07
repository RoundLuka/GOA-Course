// 2) გააკეთეთ 3-3 მაგალითი თითოეულ მეთოდზე და ახსენით თქვენი სიტყვებით 
// თუ რას აკეთებს ეს მეთოდები (indexOf, lastIndexOf, includes)

let languages = ["Python","C","C++","C#","Python"];

// indexOf method returns index of value passed in as argument, that occurs first in array
let cIndex = languages.indexOf("C");
languages.indexOf("C#");
console.log(indexOf("LUA"));

// lastIndexOf method works as indexOf, but returns index of argument which occurs last
let cPlus = languages.lastIndexOf("C++");
languages.lastIndexOf("Python");
languages.lastIndexOf("LUA");

// Includes method checks if array contains specific value and returns boolean
languages.includes("Python");
languages.includes("C");
languages.includes("C#",2); // second argument, index to start searching from

