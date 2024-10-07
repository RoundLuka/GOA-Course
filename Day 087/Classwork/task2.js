// გამოიყენეთ კუთვნილებები რომელიც ვისწავლეთ, ამ კუთვნილებების დახმარებით 
// მანიპულაცია მოახდინეთ სხვადასხვა ელემენტებზე აგრეთვე ახსენით რას ემსახურება 
// ყველა კუთვნილება + გამოიყენეთ getElementsByTagname and getElementsByClassname 
// და ახსენით მათი დანიშნულება, რას აბრუნებს და რისგან განსხვავდება სხვა მეთოდებისგან
// კუთვნილებები: parentElement, children, firstElementChild, lastElementChild, 
// previousElementSibling, nextElementSibling 

// getElementsByTagName creates array of same tag
// element references
const sections = document.getElementsByTagName("div");

// creates array of elements with same class
const important = document.getElementsByClassName("important");

// creates reference to element with id intro
const introdouction = document.getElementById("intro");

// stores reference of element introdouction's parent in variable introDiv
const introDiv = introdouction.parentElement;

// creates array of elements that are nested in introContent
const introContent = introDiv.children;

const footer = document.getElementById("footer");


const contactInfo = footer.firstElementChild;

const author = footer.lastElementChild;

const mainContent = footer.previousElementSibling;

const mainDiv = introDiv.nextElementSibling;

