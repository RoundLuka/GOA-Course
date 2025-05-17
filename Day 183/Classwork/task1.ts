// 1) შექმენით პირველრიგში ობიექტის ტიპი, სახელად carType, ობიექტში უნდა იყოს 4 კუთვნილება, ბრენდი, მოდელი გამოშვების წელი და id რომელიც შესაძლოა იყოს სტრინგიც და რიცხვიც. შემდეგ შექმენით ფუნქციის ტიპი რომელსაც გადაეცემა 4 მნიშვნელობა და უნდა დააბრუნოს carType თიპის მიხედვტ შექმნილი ობიექტი, ფუნქციაში გამოიყენეთ type guard შეამოწმეთ id არის თუ არა სტრინგი, თუ არის გააადითედ და ისე შეინახეთ ობიექტში, თუ რიცხვი მაშ ჩვეულბრივად შეინახეთ.

type CarType = {
    brand: string,
    model: string,
    year: number,
    id: string | number
}

type funcType = (brand: string, model: string, year: number, id: string | number) => CarType;

const CarInfo: funcType = function(brand, model, year, id) {

    let IdType: string | number;
    // type guard
    if(typeof id === "string") {
        IdType = id.toUpperCase();
    } else {
        IdType = id;
    }

    const car: CarType = {
        brand: brand,
        model: model,
        year: year,
        id: IdType
    }

    return car;
}

console.log(CarInfo("Mercedes", "Jeep", 1995, "MBGTWE2"))