import { BowlingGame } from "../src/bowling_game";

describe('Bowling Game', () => {

  it('returns information about a throw', () => {
    const game = BowlingGame();
    expect(game.pinCount(1)).toEqual('Frame: 1, throw: 1, score: 1');
  });

  it('scores a simple frame', () => {
    let game = BowlingGame();
    game.pinCount(3);
    expect(game.pinCount(6)).toEqual('Frame: 1, throw: 2, score: 9');
  });

  it('scores a spare frame', () => {
    let game = BowlingGame();
    game.pinCount(3);
    game.pinCount(7);
    expect(game.pinCount(2)).toEqual('Frame: 2, throw: 1, score: 14');
  });

  it('scores a strike frame', () => {
    let game = BowlingGame();
    game.pinCount(10);
    game.pinCount(4);
    expect(game.pinCount(5)).toEqual('Frame: 2, throw: 2, score: 28');
  });

  it('scores 2 strikes in a row', () => {
    let game = BowlingGame();
    game.pinCount(10);
    game.pinCount(10);
    game.pinCount(4);
    expect(game.pinCount(2)).toEqual('Frame: 3, throw: 2, score: 46');
  });

  it('scores 3 strikes in a row', () => {
    let game = BowlingGame();
    game.pinCount(10);
    game.pinCount(10);
    game.pinCount(10);
    game.pinCount(7);
    expect(game.pinCount(1)).toEqual('Frame: 4, throw: 2, score: 83');
  });

  it('scores a full game of open frames', () => {
    const game = BowlingGame();
    game.pinCount(1);
    game.pinCount(5);
    game.pinCount(4);
    game.pinCount(2);
    game.pinCount(3);
    game.pinCount(6);
    game.pinCount(3);
    game.pinCount(4);
    game.pinCount(1);
    game.pinCount(7);
    game.pinCount(3);
    game.pinCount(5);
    game.pinCount(1);
    game.pinCount(3);
    game.pinCount(2);
    game.pinCount(6);
    game.pinCount(5);
    game.pinCount(2);
    game.pinCount(9);
    expect(game.pinCount(0)).toEqual('Game is over. No more throws allowed. Final score is 72');
  });

  it('scores a full game of spares', () => {
    const game = BowlingGame();
    game.pinCount(1);
    game.pinCount(9);
    game.pinCount(4);
    game.pinCount(6);
    game.pinCount(3);
    game.pinCount(7);
    game.pinCount(3);
    game.pinCount(7);
    game.pinCount(1);
    game.pinCount(9);
    game.pinCount(3);
    game.pinCount(7);
    game.pinCount(1);
    game.pinCount(9);
    game.pinCount(2);
    game.pinCount(8);
    game.pinCount(5);
    game.pinCount(5);
    game.pinCount(9);
    game.pinCount(1);
    expect(game.pinCount(4)).toEqual('Game is over. No more throws allowed. Final score is 135');
  });

  it('scores a full game of strikes', () => {
    const game = BowlingGame();
    game.pinCount(10);
    game.pinCount(10);
    game.pinCount(10);
    game.pinCount(10);
    game.pinCount(10);
    game.pinCount(10);
    game.pinCount(10);
    game.pinCount(10);
    game.pinCount(10);
    game.pinCount(10);
    game.pinCount(10);
    expect(game.pinCount(10)).toEqual('Game is over. No more throws allowed. Final score is 300');
  });

  it('repeats final score once game is over', () => {
    const game = BowlingGame();
    for (let i = 0; i < 20; i++) {
      game.pinCount(1);
    }
    const lastThrow = game.pinCount(1);
    expect(game.pinCount(1)).toEqual(lastThrow);
  })
})