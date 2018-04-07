import { Injectable } from '@angular/core';

@Injectable()
export class QuizScore {

  private quizScore: number;

  constructor() {
  }

  getScore() {
    return this.quizScore;
  }

  setScore(score) {
    this.quizScore = score;
  }

}
