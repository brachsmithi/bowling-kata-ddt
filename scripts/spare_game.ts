import { BowlingGame } from "../src/bowling_game";

const game = BowlingGame();

// Frame 1
game.pinCount(1);
game.pinCount(9);
// Frame resolves to 14
// Cumulative score 14

// Frame 2
game.pinCount(4);
game.pinCount(6);
// Frame resolves to 13
// Cumulative score 27

// Frame 3
game.pinCount(3);
game.pinCount(7);
// Frame resolves to 13
// Cumulative score 40

// Frame 4
game.pinCount(3);
game.pinCount(7);
// Frame resolves to 11
// Cumulative score 51

// Frame 5
game.pinCount(1);
game.pinCount(9);
// Frame resolves to 13
// Cumulative score 64

// Frame 6
game.pinCount(3);
game.pinCount(7);
// Frame resolves to 11
// Cumulative score 75

// Frame 7
game.pinCount(1);
game.pinCount(9);
// Frame resolves to 12
// Cumulative score 87

// Frame 8
game.pinCount(2);
game.pinCount(8);
// Frame resolves to 15
// Cumulative score 102

// Frame 9
game.pinCount(5);
game.pinCount(5);
// Frame resolves to 19
// Cumulative score 121

// Frame 10
game.pinCount(9);
game.pinCount(1);
game.pinCount(4);
// Frame resolves to 14
// Final score: 135

// no extra pins allowed
game.pinCount(1)