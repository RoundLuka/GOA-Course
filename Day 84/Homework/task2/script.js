const globalNumber = 10;

let person = {
    name: "luka",
    hobby: "coding"
}

let person1 = person;

function stackExample(){
    let localNumber = 5;
    // localNumber variable will only exist in this function
    // when function is dissmised localNumber will also be
    // removed from memory by garbage collector as it has no use
    console.log("Local variable stored in stack: " + localNumber)
}

function heapExample(){
    // changes value of object's property which is stored
    // in stack
    person.hobby = "reading";
    // logging person1's hobby property will output "reading"
    // as we changed value of original object we copied
    // person1 copying object just stored person's address
    // in stack
    console.log(person1.hobby);
}


stackExample()
heapExample()