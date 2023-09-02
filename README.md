## Running
The file *bowling_game.ts* exports a function `BowlingGame()` that returns a ScoreCard to keep track of a single players score throughout a game of bowling. Scripts are provided for several scoring scenarios that demonstrate the functional requirement described below. This section describes those scripts and the commands needed to run them.

#### Simple Game
A simple game is one with all open frames. As described in the rules below, an open frame is one in which there are still pins standing after 2 throws. There are only 2 throws allowed in the 10th frame. This is the easiest scoring to implement, and the score is always resolvable.

Run this script with `npm run script:simple`. 

## Requirements
Create simple module that tracks throws for one bowler and reports on the status of the game in progress.

1. An instance of the module good for one full game of 10 frames.
2. When the instance is created, inform user of current frame, throw, and score.
3. Exposed interface allows entry for the number of pins knocked down.
4. After each entry of pin count, inform user of the current frame, throw, and score.
5. If the score is waiting to be resolved, inform user that resolution is pending and whether it is because of a spare or a strike.
6. In the 10th frame, the score will never be pending.
7. When the game is over, inform the user that no more throws are allowed.
8. If a user enters throws after the game is over, remind the user that no more throws are allowed and repeat the final score.

## Bowling Rules
- A full game is 10 frames.
- Frames 1-9 may each have up to two throws to attempt knocking down all pins.
  - First throw
    - If all 10 pins are knocked down, it is a strike. The frame is closed, and the score is pending.
    - If any pins remain, throw again.
  - Second throw
  - If there are no pins remaining, it is a spare. The frame is closed, and the score is pending.
  - If any pins remain, the frame is called "open" and the score is resolved.
- Frame 10 may have up to 3 throws in order to resolve the score.
   - First Throw
      - If all 10 pins are knocked down, it is a strike. 
      - Throw 2 more times.
   - Second Throw
      - If any pins remain standing, the 10th frame is open. The game is over.
      - If no pins remain standing, it is a spare. A 3rd throw is earned.
   - Third Throw
      - Regardless of how many pins are knocked down, the score is resolved. The game is over.
- Scoring
   - Open
      - The number of pins knocked down in a throw is the amount of points earned.
      - The earned points are added to the cumulative score.
   - Spare
      - The score for the frame is 10 points, plus the score of the next throw.
      - If the next throw is a strike, the score for the frame is 20 points (10 for the spare plus 10 pins knocked down in the next throw).
      - The frame's score is not resolved until the next throw.
      - The next throw counts again as part of its own frame.
      - If in the 10th frame, the score for the spare is 10 and is resolved immediately.
   - Strike
      - The score for the frame is 10 points, plus the score of the next two throws.
      - If the next two rolls are a spare, the score of the frame is 20 points (10 for the strike plus 10 pins knocked down in the next two throws).
      - If the next roll is a strike, the score for the frame is 20 plus the score of the next throw (10 for the 1st strike plus 10 for the 2nd strike plus the pins knocked down in the next throw).
      - If the next two rolls are strikes, the score for the frame is 30 (10 for each of the three strikes).
      - If in the 10th frame, the score for the strike is simply 10 and is resolved immediately.
   - A perfect game of all strikes is 300 points. 30 points each for frames 1-9 plus 30 more points for three strikes in the 10th frame.
