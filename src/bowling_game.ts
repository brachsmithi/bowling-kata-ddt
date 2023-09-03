class ScoreCard {
  private score: number;
  private frame: number;
  private throw: number;
  private over: boolean;
  private pendingCount: number;
  private resolvingSpare: boolean;

  constructor() {
    this.score = 0;
    this.frame = 1;
    this.throw = 1;
    this.over = false;
    this.pendingCount = 0;
    this.resolvingSpare = false;
    this.report();
  }

  pinCount(count: number) {
    if (!this.over) {
      console.info(count, 'pins knocked down');

      if (this.throw === 1) {
        this.pendingCount = count;
        if (this.resolvingSpare) {
          this.score += count;
          this.resolvingSpare = false;
        }
      } else {
        this.score += count + this.pendingCount;
        if (this.pendingCount + count === 10) {
          this.resolvingSpare = true;
        }
        this.pendingCount = 0;
      }



      // if (this.frame === 10 && this.throw === 2) {
      //   this.over = true;
      // }

      if (this.throw === 1) {
        this.throw = 2;
      } else if (this.frame === 10) {
        if (this.throw === 2 && this.resolvingSpare) {
          this.throw = 3;
        } else {
          this.over = true;
        }
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
    } else if (this.resolvingSpare) {
      console.info(`Frame ${this.frame}, throw ${this.throw}, score pending, resolving spare`);
    } else {
      console.info(`Frame ${this.frame}, throw ${this.throw}, score ${this.score}`);
    }
  }
}

export function BowlingGame(): ScoreCard {
 return new ScoreCard()
}
