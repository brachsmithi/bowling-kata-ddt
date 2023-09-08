class ScoreCard {
  private score: number;
  private frame: number;
  private throw: number;
  private over: boolean;
  private readonly frameThrows: number[][];

  constructor() {
    this.score = 0;
    this.frame = 1;
    this.throw = 1;
    this.over = false;
    this.frameThrows = [[0, 0]]; // index 0 will not be used
  }

  pinCount(count: number) {
    if (this.over) {
      this.report();
    } else {
      console.info(`knocked down ${count} pins`);
      if (this.throw === 1) {
        this.frameThrows[this.frame] = [ count ];
        this.report();
        if (count === 10 && this.frame < 10) {
          this.frame += 1;
        } else {
          this.throw = 2;
        }
      } else if (this.throw === 2) {
        this.frameThrows[this.frame] = [ this.frameThrows[this.frame][0], count ];
        if (this.frame === 10) {
          if ((count + this.frameThrows[this.frame][0] === 10) || count === 10) {
            this.throw += 1;
          } else {
            this.over = true;
            const curScore = this.currentScore();
            if (Number.isInteger(curScore)) {
              this.score = curScore as number;
            }
          }
          this.report();
        } else {
          this.report();
          this.frame += 1; // increment frame after checking if last...
          this.throw = 1;
        }
      } else if (this.throw === 3) {
        const curScore = this.currentScore();
        if (Number.isInteger(curScore)) {
          this.score = (curScore as number) + count;
        }
        this.over = true;
        this.report();
      }
    }
  }

  private report() {
    if (this.over) {
      console.info(`Game is over. No more throws allowed. Final score is ${ this.score }`);
    } else {
      console.info(`Frame: ${this.frame}, throw: ${this.throw}, score: ${this.currentScore()}`);
    }
  }

  private currentScore(): number | 'resolving spare' | 'resolving strike' {
    let needsSpareResolution = false;
    let needsStrikeResolution = false;
    let acc = 0;
    this.frameThrows.forEach((frameThrow, index) => {
      let frameCount = 0;
      frameCount += frameThrow[0];
      if (frameThrow.length > 1) {
        frameCount += frameThrow[1];
      }
      acc += frameCount;
      if (frameCount === 10 && index < 10) {
        if (frameThrow.length === 1) {
          if (this.frameThrows[index + 1] && this.frameThrows[index + 1].length === 1) {
            if (this.frameThrows[index + 2]) {
              acc += this.frameThrows[index + 1][0]
              acc += this.frameThrows[index + 2][0]
            } else {
              needsStrikeResolution = true;
            }
          } else if (this.frameThrows[index + 1] && this.frameThrows[index + 1].length > 1) {
            acc += this.frameThrows[index + 1][0]
            acc += this.frameThrows[index + 1][1]
          }
        } else if (frameThrow.length === 2) {
          if (this.frameThrows[index + 1]) {
            acc += this.frameThrows[index + 1][0]
          } else {
            needsSpareResolution = true;
          }
        }
      }
    })
    if (needsStrikeResolution) return 'resolving strike';
    if (needsSpareResolution) return 'resolving spare';
    return acc;
  }
}

export function BowlingGame(): ScoreCard {
 return new ScoreCard()
}
