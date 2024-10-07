// 2) შექმენით მასივი სადაც გექნებათ მინიმუმ 5 სახელი, გამოიყენეთ 
// map მეთოდი და შეამოწმეთ შემდეგი პირობა, თუ ინდექსი არის ლუწი 
// მაშინ ახალ მასივში სახელი დაამატეთ დიდი ასოებით სხვა შემთხვევაში 
// თუ კენტია დაამატეთ პატარა ასოებით, როცა ამას დაასრულებთ შექმენით  
// map მეთოდის კლონი და გააკეთეთ იგივე დავალება თვენი კლონით, 
// აუცილებალდ ახსენით რა განსხვავებაა forEach სა და map მეთოდს შორის

const names = ["Luka","Ana","Tamo","Tazo","Lia"];

const uppperNames = names.map((currentValue, index, arr) => {
    let newArr = [];
    if(index % 2 == 0){
        newArr.push(currentValue.toUpperCase());
    }
    else {
        newArr.push(currentValue.toLowerCase());
    }
})

console.log(uppperNames);


const manualMap = (Arr, Func) => {
    const res = [];
    for(let i = 0; i < Arr.length; i++){
        const val = Func(Arr[i], i, arr);
        res.push(val);
    }
    return res;
}

const manualUpperNames = manualMap(names, (value, index) => {
    let result = [];
    if(index % 2 == 0){
        result.push(value.toUpperCase());
    }
    else {
        result.push(value.toLowerCase());
    }
});

//