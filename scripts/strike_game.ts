import { BowlingGame } from "../src/bowling_game";

const game = BowlingGame();

// Frame 1
game.pinCount(10);
// Frame resolves to 30
// Cumulative score 30

// Frame 2
game.pinCount(10);
// Frame resolves to 30
// Cumulative score 60

// Frame 3
game.pinCount(10);
// Frame resolves to 30
// Cumulative score 90

// Frame 4
game.pinCount(10);
// Frame resolves to 30
// Cumulative score 120

// Frame 5
game.pinCount(10);
// Frame resolves to 30
// Cumulative score 150

// Frame 6
game.pinCount(10);
// Frame resolves to 30
// Cumulative score 180

// Frame 7
game.pinCount(10);
// Frame resolves to 30
// Cumulative score 210

// Frame 8
game.pinCount(10);
// Frame resolves to 30
// Cumulative score 240

// Frame 9
game.pinCount(10);
// Frame resolves to 30
// Cumulative score 250

// Frame 10
game.pinCount(10);
game.pinCount(10);
game.pinCount(10);
// Frame resolves to 50
// Final score: 300

// no extra pins allowed
game.pinCount(1)