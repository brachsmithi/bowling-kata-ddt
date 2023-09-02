class ScoreCard {
  private score: number;
  private frame: number;
  private throw: number;
  private over: boolean;

  constructor() {
    this.score = 0;
    this.frame = 1;
    this.throw = 1;
    this.over = false;
    this.report();
  }

  pinCount(count: number) {
    if (!this.over) {
      console.info(count, 'pins knocked down');
      this.score += count;

      if (this.frame === 10 && this.throw === 2) {
        this.over = true;
      }

      if (this.throw === 1) {
        this.throw = 2;
      } else {
        this.throw = 1;
        this.frame += 1;
      }
    }
    this.report();
  }

  private report() {
    if (this.over) {
      console.info(`Game is over. No more throws allowed. Final score is ${this.score}`);
    } else {
      console.info(`Frame ${this.frame}, throw ${this.throw}, score ${this.score}`);
    }
  }
}

export function BowlingGame(): ScoreCard {
 return new ScoreCard()
}
