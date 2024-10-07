// 1) შექმენით რიცხვების მასივი, სადაც გექნებაათ 10 რიცხვი, გამოიყენეთ map მეთოდი, 
// და გააკეთეთ ესეთი რამ, თუ ინდექსი არის ლუწი მაშინ ამჟამინდელი რიცხვი გაამრავლეთ 
// 2 ზე ხოლო თუ არის კენტი მაშინ დააბრუნეთ ხელშეუხებლად ამჟამინდელი რიცხვი, შემდეგ 
// კი იგივე რამე გააკეთეთ თქვენი კლონი მეთოდით ახსენით დეტალურად თქვენი კლონი კომენტარებით 

const numArr = [0,1,2,3,4,5,6,7,8,9];

const newArr = numArr.map((number, index) => {
    let result = [];
    if(index % 2 === 0){
        result.push(number * 2);
    }
    else {
        result.push(number);
    }
    
    return result;
})

// Shortned way of declaring function

// Giving manualMap only 1 argument, array as function built within manualMap itself
const manualMap = (arr) => {
    // initialized array to store result
    const result = [];
    // iterating over array just like regular map, using regular for loop
    // as there is need to know index as well
    for(let i = 0; i < arr.length; i++){
        // built in function that checks if number is even
        if(i % 2 === 0){
            // if it is then doubles and after appends to result
            result.push(arr[i] * 2);
        }
        else {
            // if its odd then normally appending to result
            result.push(arr[i]);
        }
    }
    // returning result
    return result;
}
