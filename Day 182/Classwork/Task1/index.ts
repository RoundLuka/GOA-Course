// 1) შექმენით ფუნქცია სახელად createUser, მანამდე კი შექმენით ამ ფუნქცვიის ტიპი, ფუნქციას უნდა გადაეცემოდეს 3 არგუმენტი, სახელი გვარი და ასაკი, ხოლო უნდა აბრუნებდეს ობიექტს, ობიექტის ტიპიც უნდა შექმნათ რომელიც შედეგაბ 3 კუთვნილებისაგან, სახელი გვარი და ასაკი

type user = {
    firstName: string,
    lastName: string,
    age: number
}

type funcType = (firstName: string, lastName: string, age: number) => user;

const createUser: funcType = function(firstName, lastName, age) {
    return {
        name: firstName,
        surname: lastName,
        age: age
    }
}

console.log(createUser("Luka", "Gurgenidze", 20))