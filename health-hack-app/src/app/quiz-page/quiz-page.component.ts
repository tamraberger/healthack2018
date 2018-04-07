import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnInit {

  score: number;
  correctAnswers: number;
  q1: number;
  q2: number;
  q3: number;
  q4: number;
  q5: number;
  q6: number;
  q7: number;
  q8: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  finishQuiz() {
    this.correctAnswers = 8;
    if (this.q1 != 2) {
      this.correctAnswers--;
    }
    if (this.q2 != 2) {
      this.correctAnswers--;
    }
    if (this.q3 != 2) {
      this.correctAnswers--;
    }
    if (this.q4 != 2) {
      this.correctAnswers--;
    }
    if (this.q5 != 2) {
      this.correctAnswers--;
    }
    if (this.q6 != 2) {
      this.correctAnswers--;
    }
    if (this.q7 != 2) {
      this.correctAnswers--;
    }
    if (this.q8 != 2) {
      this.correctAnswers--;
    }
    this.score = 100 * (this.correctAnswers / 8);
    alert('You scored ' + this.score + '% on this quiz! Would you like to share this information?');
    this.router.navigate(['/app-home-page']);
  }

}
