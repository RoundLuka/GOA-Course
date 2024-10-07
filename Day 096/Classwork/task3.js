// 3) შექმენით რიცხვების მასივი სადაც გექნებათ 10 რიცხვი, თქვენი დავალებაა გაფილტროთ 
// ეს მასივი და დააბრუნოთ ახალი მასივი სადაც მოთავსებული იქნება ისეთი რიცხვები რომელიც 
// ორიგინალ მასივიში მეორდება ზუსტად 2-ჯერ, შექმენით filter მეთოდის კლონი და გააკეთეთ 
// იგივე რამე (აუცილებლად ახსენით დეტალურად თვენი კლონის მუშაობა)

const numArr = [0,1,2,3,4,5,6,7,8,9];

let counts = {}

const onlyTwice = numArr.filter((num) => {
    if(num in counts){
        counts[num]++;
    }
    else {
        counts[num] = 1;
    }
})

// doesn't take second argument function, as its built within filter
const manulFilter = (arr) => {
    const result = [];
    // created extra object to keep track of number count in array
    let counts = {}
    
    // slightly mutated filter it still operates as filter
    // but it also takes task to put count of every number in object
    for(let i = 0;i < arr.length; i++){
        if(arr[i] in counts){
            arr[i]++;
        }
        else {
            arr[i] = 1;
        }
    }
    // finally checking condition if number repeats exactly twice
    // in array then it appends to result
    for(const num of arr){
        if(counts[num] === 2){
            result.push(num);
        }
    }

    return result;
}
