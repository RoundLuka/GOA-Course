// 3) შექმენით მასივი სადაც გექნებათ 5 ობვიექტი, ამ ობიექტებში უნდა იყოს სახელის 
// კუთვნილება და ასაკის კუთვნილება რომელშიც შეინახება რიცხვი, თვქენი დავალეება 
// გააკეთით ფილტრაციუა და შექმნათ ორი ახალი მასივი filter iს დახმარებით, პირველ 
// მასივში უნდა იყოს მხოლოდ ის ობიექტები რომლები  არიან 18ის ან 18 მეტი ასაკის, 
// ხოლო მეორეში კი 18 ზე ნაკლებიუ, ამის გაკეთების შემდეგ შექმენით თვქნეი საკუთარი 
// filter მეთოდის კლონი და იგივე დავალებაა გააკეთეთ კლონის დახმარებით, აგრეთვე 
// ახსენით რა განსხვავებაა map სა და filters შორის


function Person(name,age){
    this.name = name,
    this.age = age
}

const people = [new Person("Luka",16),new Person("Lia", 50), new Person("Tamo", 30),new Person("Tazo", 40), new Person("Ana",18)];

const ageGroups = people.filter((person) => {
    let kids = [];
    let adults = [];

    if(person.age >= 18){
        adults.push(person.name);
    }
    else {
        kids.push(person.name);
    }

    return {kids,adults};
});

console.log(ageGroups);

function ageFilter(){
    
}

const manualFilter = (arr, ageFilter) => {
    let kids = [];
    let adults = [];
    for(let i = 0; i < arr.length; i ++){
        const bool = ageFilter(arr[i], i, arr);

        if(bool){
            result.push(arr[i]);
        }
    }
}

console.log(manualFilter(people));
