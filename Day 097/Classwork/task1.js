// გავეცანი რესურსს: https://javascript.info/

// As we know from the chapter Data types, there are eight data types in JavaScript. Seven of them are called “primitive”, because their values contain only a single thing (be it a string or a number or whatever).

// In contrast, objects are used to store keyed collections of various data and more complex entities. In JavaScript, objects penetrate almost every aspect of the language. So we must understand them first before going in-depth anywhere else.

// An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.

// We can imagine an object as a cabinet with signed files. Every piece of data is stored in its file by the key. It’s easy to find a file by its name or add/remove a file.

// An empty object (“empty cabinet”) can be created using one of two syntaxes:

// let user = new Object(); // "object constructor" syntax
// let user = {};  // "object literal" syntax

let person = new Object();
let person2 = {};


// We can immediately put some properties into {...} as “key: value” pairs:

let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
    };

let Person = {
    name: "Luka",
    age: 16
};

// A property has a key (also known as “name” or “identifier”) before the colon ":" and a value to the right of it.

// In the user object, there are two properties:

// The first property has the name "name" and the value "John".
// The second one has the name "age" and the value 30.


// We can add, remove and read files from it at any time.

// Property values are accessible using the dot notation:

// get property values of the object:
alert( user.name ); // John
alert( user.age ); // 30

// The value can be of any type. Let’s add a boolean one:

user.isAdmin = true;

// To remove a property, we can use the delete operator:

delete user.age;

// We can also use multiword property names, but then they must be quoted:

let user = {
    name: "John",
    age: 30,
    "likes birds": true  // multiword property name must be quoted
  };


// The last property in the list may end with a comma:

let user = {
    name: "John",
    age: 30,
  }

// That is called a “trailing” or “hanging” comma. Makes it easier to add/remove/move around properties,because all lines become alike.

// For multiword properties, the dot access doesn’t work:

// this would give a syntax error
user.likes birds = true


// JavaScript doesn’t understand that. It thinks that we address user.likes, and then gives a syntax error when comes across unexpected birds.

// The dot requires the key to be a valid variable identifier. That implies: contains no spaces, doesn’t start with a digit and doesn’t include special characters ($ and _ are allowed).

// There’s an alternative “square bracket notation” that works with any string:

let user = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];

// Square brackets also provide a way to obtain the property name as the result of any expression – as opposed to a literal string – like from a variable as follows:

let key = "likes birds";

// same as user["likes birds"] = true;
user[key] = true;

// Here, the variable key may be calculated at run-time or depend on the user input. And then we use it to access the property. That gives us a great deal of flexibility.

// For instance:

let user = {
    name: "John",
    age: 30
  };

let key = prompt("What do you want to know about the user?", "name");

  // access by variable
  alert( user[key] ); // John (if enter "name")

// The dot notation cannot be used in a similar way:

let user = {
    name: "John",
    age: 30
  };
  
  let key = "name";
  alert( user.key ) // undefined


// We can use square brackets in an object literal, when creating an object. That’s called computed properties.

// For instance:

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"

// The meaning of a computed property is simple: [fruit] means that the property name should be taken from fruit.

// So, if a visitor enters "apple", bag will become {apple: 5}.

// Essentially, that works the same as:

let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};

// take property name from the fruit variable
bag[fruit] = 5;

// …But looks nicer.

// We can use more complex expressions inside square brackets:

let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};

// In real code, we often use existing variables as values for property names.

function makeUser(name, age) {
    return {
      name: name,
      age: age,
      // ...other properties
    };
  }
  
  let user = makeUser("John", 30);
  alert(user.name); // John

// In the example above, properties have the same names as variables. The use-case of making a property from a variable is so common, that there’s a special property value shorthand to make it shorter.

// Instead of name:name we can just write name, like this:

function makeUser(name, age) {
    return {
      name, // same as name: name
      age,  // same as age: age
      // ...
    };
  }