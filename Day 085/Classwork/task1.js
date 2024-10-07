// 1) ყველა ახალ ნასწავლი მეთოდის გამოყენებით შექმენით თითოეულ ატგანზე 
// 2-2 მაგალითი და ახსენით კომენტარებით თქვენი სიტყვებით თუ რას აკეთებს 
// თითოეული მეთოდი (push,pop,unshift,shift, slice, splice)

// Declaring array using constructor
let languages = new Array("Python","C","C++");

// creating array then manually adding elements
let webDevelopment = new Array(3);
webDevelopment[0] == "HTML";
webDevelopment[1] == "CSS";
webDevelopment[2] == "JS";

// Literal way of creating array
let names = ["Luka","Anna","James"];

// push method appends elements to array
languages.push("C#");
names.push("John");

// unshift method adds element at 0 index in array
languages.unshift("LUA");
names.unshift(10);

// shift method removes element at 0 index in array
languages.shift();
names.shift();

// slice method creates new array, takes 3 arguments: start, end, step
let frontend = webDevelopment.slice(0,2);
console.log(names.slice(0,2));

// splice method mutates orignal array
languages.splice(0,3);
webDevelopment.splice(1,1);


