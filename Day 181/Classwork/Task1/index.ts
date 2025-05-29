// 1) შექმენით თამაშის კოდის ნაწილი, სადაც მომხმარებელი ირჩევს 3 შესაძლო თამაშის მოდიდან ერთ-ერთს, გამოიყენეთ enum_ი

enum GameMode {
    easy = "Easy",
    medium = "Medium",
    hard = "Hard"
}

function selectGameMode(mode: GameMode): void {
    console.log(`Your game difficulty: ${mode}`)
}

let user1Mode: GameMode = GameMode.medium;

selectGameMode(user1Mode);