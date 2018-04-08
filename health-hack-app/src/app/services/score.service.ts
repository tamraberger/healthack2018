import { Injectable } from '@angular/core';

@Injectable()
export class PersonalScore {

  private personalScore: number;

  constructor() {
      this.personalScore = 450;
  }

  getScore() {
    return this.personalScore;
  }

  addScore(score) {
    this.personalScore += score;
  }

}
