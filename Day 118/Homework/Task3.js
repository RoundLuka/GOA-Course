// 3) Library System
// Create a basic library system using classes and inheritance. Start by defining a LibraryItem class, which will represent general items in the library. This 
// class should have properties for title, year, and isAvailable (which starts as true). Add methods for borrowItem() and returnItem(), which change the 
// availability status of the item. If the item is already borrowed, borrowItem() should display a message indicating it’s not available.

// Next, create two classes that inherit from LibraryItem: Book and Magazine. The Book class should have additional properties, like author and genre, and a 
// getSummary() method that returns information about the book. Similarly, the Magazine class should include an issueNumber property and its own getSummary() 
// method. Finally, create instances of Book and Magazine, test borrowing and returning items, and use getSummary() to display each item’s details. 

class LibraryItem {
    constructor(title, year) {
        this._title = title;
        this._year = year;
        this._isAvailable = true;
    };
    borrowItem() {
        if(this._isAvailable) {
            // this._isAvailable = !this._isAvailable
            this._isAvailable = false;
            console.log(`${this.title} has been borrowed`)
        } else {
            console.log("it’s not available, already borrowed")
        }
    };
    returnItem() {
        this._isAvailable = true;
    };
};

class Book extends LibraryItem {
    constructor(title, year, author, genre) {
        super(title, year)
        this._author = author;
        this._genre = genre;
    };

    getSummary() {
        return `Title: ${this._title}, year: ${this._year}, author: ${this._author}, genre: ${this._genre}`
    };
};

class Magazine extends LibraryItem {
    constructor(title, year, issueNumber) {
        super(title, year)
        this._issueNumber = issueNumber;
    }

    getSummary() {
        return `Title: ${this._title}, year: ${this._year}, issueNumber: ${this._issueNumber}`
    }
};

const book1 = new Book("The Great Gatsby", 1925, "F. Scott Fitzgerald", "Novel");
const magazine1 = new Magazine("National Geographic", 2023, 7);

console.log(book1.getSummary());
console.log(magazine1.getSummary());

book1.borrowItem();
book1.borrowItem();
book1.returnItem();

magazine1.borrowItem();
magazine1.returnItem();
