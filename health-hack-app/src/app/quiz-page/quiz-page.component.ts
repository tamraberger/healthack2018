import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizScore } from '../services/quiz.service';
import { Notifications } from '../services/notifications.service';

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

  constructor(private router: Router, private quizScore: QuizScore) { this.quizScore = quizScore; }

  ngOnInit() {
  }

  finishQuiz() {
    this.correctAnswers = 6;
    if (this.q1 != 1) {
      this.correctAnswers--;
    }
    if (this.q2 != 3) {
      this.correctAnswers--;
    }
    if (this.q3 != 2) {
      this.correctAnswers--;
    }
    if (this.q4 != 1) {
      this.correctAnswers--;
    }
    if (this.q5 != 4) {
      this.correctAnswers--;
    }
    if (this.q6 != 2) {
      this.correctAnswers--;
    }
    this.score = 100 * (this.correctAnswers / 6);
    confirm('You scored ' + this.score + '% on this quiz! Would you like to share this information?');
    this.quizScore.setScore(this.score);
    this.router.navigate(['/app-home-page']);
  }

}
