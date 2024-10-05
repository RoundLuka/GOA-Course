// set() მეთოდის გამოყენება: შექმენი ცარიელი Map და დაამატე მასში რამდენიმე პროდუქტი და მათი ფასები set() მეთოდის გამოყენებით. შემდეგ თითოეული პროდუქტის დამატებისას კონსოლში დაბეჭდე შეტყობინება, რომ პროდუქტი წარმატებით დაემატა.


let myMap = new Map();

function addProduct(name, price){
    myMap.set(name, price);
    console.log(`Product ${name} added successfully`)
};

addProduct("Apple", 5);
addProduct("Grapes", 10);
addProduct("Berry", 15);

// myMap.set("Apple", 5);
// console.log("Product Apple added successfully");

// myMap.set("Grapes", 10);
// console.log("Product Grapes added successfully");

// myMap.set("Berry", 15);
// console.log("Product Berry added successfully");

// get() მეთოდის გამოყენება: უკვე შექმნილი Map-დან, გამოიყენე get() მეთოდი, რათა გარკვეული პროდუქტის ფასი მიიღო და დაბეჭდო კონსოლში.

console.log(myMap.get("Apple"));
console.log(myMap.get("Grapes"));
console.log(myMap.get("Berry"));

// has() მეთოდის გამოყენება: შექმენი Map, რომელიც ინახავს რამდენიმე ფილმის დასახელებას და მათ გამოშვების წელს. გამოიყენე has() მეთოდი, რათა შეამოწმო, არის თუ არა Map-ში გარკვეული ფილმის დასახელება და შესაბამისად დაბეჭდე შეტყობინება.

const movies = new Map(
    ["Lolek", 2002],
    ["SBR", 2015]
);

console.log(movies.has("Lolek"));

// delete() მეთოდის გამოყენება: შექმენი Map, რომელიც შეიცავს რამდენიმე სპორტსმენის სახელს და მათ შედეგებს. შემდეგ წაშალე ერთ-ერთი სპორტსმენი delete() მეთოდის გამოყენებით და დაადასტურე, რომ ის წაშლილია.

let athletes = new Map(
    ["a", 2]
);

athletes.delete("a");
console.log("Athlete has been removed");

// clear() მეთოდის გამოყენება: შექმენი Map რამდენიმე მანქანის ბრენდის და მათი მოდელების შესანახად. შემდეგ გამოიყენე clear() მეთოდი, რათა მთლიანად დაასუფთავო Map. შეამოწმე, რომ Map ცარიელია.

let brands = new Map(
    ["Nissan", "Jeep"],
    ["Mercades", "Jeep"],
    ["BMW", "Jeep"]
);

brands.clear();
console.log(brands);

// size თვისების გამოყენება: შექმენი Map, რომელიც ინახავს რესტორნების სახელებს და მათი მენიუს პოპულარულ კერძებს. გამოიყენე size თვისება, რათა კონსოლში დაბეჭდო ამ Map-ის ელემენტების რაოდენობა.

const restaurant = new Map(
    ["Diaoxi", "Khinkali"]
)

console.log(restaurant.size);

// keys() მეთოდის გამოყენება: შექმენი Map, რომელიც შეიცავს სხვადასხვა ქვეყნის კოდებს და მათ სახელებს. გამოიყენე keys() მეთოდი, რათა ყველა ქვეყნის კოდი გამოიტანო და დაბეჭდო კონსოლში.

let countries = new Map(
    ["Brazil", 1],
    ["Argentina", 2],
    ["Germany", 3]
);

console.log(countries.keys());

// values() მეთოდის გამოყენება: იმავე Map-ში, რომელიც წინა დავალებაში შექმენი, გამოიყენე values() მეთოდი, რათა ყველა ქვეყნის დასახელება გამოიტანო და დაბეჭდო კონსოლში.

console.log(countries.values());

// forEach() მეთოდის გამოყენება: შექმენი Map, რომელიც ინახავს სხვადასხვა სასმელის დასახელებას და მათ კალორიებს. გამოიყენე forEach() მეთოდი, რათა კონსოლში დაბეჭდო თითოეული წყვილი შემდეგი ფორმატით: "Drink: [name], Calories: [calories]".

let drinks = new Map(
    ["Mohito", 123],
    ["Water", 20]
);

drinks.forEach((drink) => {
    console.log(`Drink: ${drink}, Calories: ${drink[drink]}`);
});
