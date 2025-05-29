// 2) შექმენით თამაშის რეგისტრაცია სადაც მომხმარებელი ირჩევს პერსონაჟის სახელს გამოიოყენეთ enum + მომხმარებელმა უნდა აირჩიოს როლი (ადმინი, მოდერატორი ან მოთამაშე), აგრეთვე შემოაქვს username და password


enum UserRole {
    Admin = "Admin",
    Moderator = "Moderator",
    Player = "Player"
}


type UserRegistration = {
    characterName: string;
    username: string;
    password: string;
    role: UserRole;
}

function registerUser(user: UserRegistration): void {
    console.log("User is registered");
    console.log("Character:", user.characterName);
    console.log("User:", user.username);
    console.log("Role:", user.role);
}


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm") as HTMLFormElement;

    form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const characterName = (document.getElementById("characterName") as HTMLInputElement).value;
    const username = (document.getElementById("username") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;
    const roleValue = (document.getElementById("role") as HTMLSelectElement).value as UserRole;

    const user: UserRegistration = {
        characterName,
        username,
        password,
        role: roleValue
    };

    registerUser(user);
    });
});
