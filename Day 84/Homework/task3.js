// 3) შექმენით ობიექტის კონსტრუქტორი რომელსაც გადაეცემა 4 მნიშვნელობა 
// (თქვენი სურვილით აარჩიეთ თუ რა ტიპის ობიექტს შექმნის კონსტრუქტორი)

function Langauge(name,type,level,year){
    this.name = name;
    this.type = type;
    this.level = level;
    this.year = year;
}


c = new Language("C","Static","Compiler",1972)
python = new cLanguage("Python","Dynamic","Interpreter",1991)
javaScript = new Language("JavaScript","Dynamic","Interpreter",1995)


console.log(c)
console.log(python)
console.log(javaScript)