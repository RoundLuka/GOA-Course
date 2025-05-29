// 2) შექმენით თამაშის რეგისტრაცია სადაც მომხმარებელი ირჩევს პერსონაჟის სახელს გამოიოყენეთ enum + მომხმარებელმა უნდა აირჩიოს როლი (ადმინი, მოდერატორი ან მოთამაშე), აგრეთვე შემოაქვს username და password
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "Admin";
    UserRole["Moderator"] = "Moderator";
    UserRole["Player"] = "Player";
})(UserRole || (UserRole = {}));
function registerUser(user) {
    console.log("User is registered");
    console.log("Character:", user.characterName);
    console.log("User:", user.username);
    console.log("Role:", user.role);
}
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const characterName = document.getElementById("characterName").value;
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const roleValue = document.getElementById("role").value;
        const user = {
            characterName,
            username,
            password,
            role: roleValue
        };
        registerUser(user);
    });
});
