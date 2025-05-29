// 1) შექმენით თამაშის კოდის ნაწილი, სადაც მომხმარებელი ირჩევს 3 შესაძლო თამაშის მოდიდან ერთ-ერთს, გამოიყენეთ enum_ი
var GameMode;
(function (GameMode) {
    GameMode["easy"] = "Easy";
    GameMode["medium"] = "Medium";
    GameMode["hard"] = "Hard";
})(GameMode || (GameMode = {}));
function selectGameMode(mode) {
    console.log(`Your game difficulty: ${mode}`);
}
let user1Mode = GameMode.medium;
selectGameMode(user1Mode);
