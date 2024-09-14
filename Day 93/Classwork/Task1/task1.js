// 1) შექმენით მაგალითები var, let, const ახსენით 
// მათ შორის სრული განსხვავება, აგრეთვე ახსენით რა არის 
// გლობალური, ლოკალური(ანუ ფუნქციის) და ბლოკის ფარგლები, 
// რა განსხვავებაა მათ შორის, აგრეთვე დაწერეთ მაგალითუი სადაც 
// მუშაობს ლექსიკური ფარგლები და ახსენით რა არის ის


// added global scope propety name to window 
var firstName = "luka";


// declared local constant varaible lastName
const lastName = "gurgenidze";


// declared local variable age
let age = 16;

// difference between global and local scope is that 
// global scope can be accessed from anywhere
// while local scope can be accesed in certain blocks
// using lexical scope, it is safer way to create variable
// but we want to make major impact and change
// in that case its good to use var keyword 


function outerScope(){
    const luksona = "luka";
    // within for loop luksona variable will be always logged as uppercase version
    function innerScope(){
        for(let i = 0; i < 10; i ++){
            const luksona = "LUKA";
            console.log(luksona);
        }
    }
    innerScope();
    // in the end of function luksona variable will be logged as lowercase version
    // as luksona variable was only modified within for loop only and not outer scope
    console.log(luksona);
}

outerScope();
