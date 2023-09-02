import { BowlingGame } from "../src/bowling_game";

const game = BowlingGame();

// Frame 1
game.pinCount(1);
game.pinCount(5);
// Frame score 6
// Running total 6

// Frame 2
game.pinCount(4);
game.pinCount(2);
// Frame score 6
// Running total 12

// Frame 3
game.pinCount(3);
game.pinCount(6);
// Frame score 9
// Running total 21

// Frame 4
game.pinCount(3);
game.pinCount(4);
// Frame score 7
// Running total 28

// Frame 5
game.pinCount(1);
game.pinCount(7);
// Frame score 8
// Running total 36

// Frame 6
game.pinCount(3);
game.pinCount(5);
// Frame score 8
// Running total 44

// Frame 7
game.pinCount(1);
game.pinCount(3);
// Frame score 4
// Running total 48

// Frame 8
game.pinCount(2);
game.pinCount(6);
// Frame score 8
// Running total 56

// Frame 9
game.pinCount(5);
game.pinCount(2);
// Frame score 7
// Running total 63

// Frame 10
game.pinCount(9);
game.pinCount(0);
// Frame score 9
// Final score: 72

// no extra pins allowed
game.pinCount(1)