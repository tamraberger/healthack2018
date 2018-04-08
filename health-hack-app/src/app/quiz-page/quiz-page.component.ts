import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizScore } from '../services/quiz.service';
import { Notifications } from '../services/notifications.service';
import { PersonalScore } from '../services/score.service';

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

  constructor(private router: Router, private quizScore: QuizScore, private notifications: Notifications,
  private personalScore: PersonalScore) { this.quizScore = quizScore; }

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
    this.score = Math.round(100 * (this.correctAnswers / 6));
    this.quizScore.setScore(this.score);
    const date = new Date();
    const time = date.toDateString();
    if (confirm('You scored ' + this.score +
    '% on this quiz! You also won 50 points for taking the quiz! Would you like to share this information?')) {
      this.notifications.addNotification({
        img: '<img class="post-img" src="./assets/meep.jpg">',
        time: '<p class="post-date">' + time + '</p>',
        html: '<p class="post-message">Meep Berger completed some learning!</p>'
      });
    }
    this.notifications.addNotification({
      img: '<img class="post-img" src="./assets/meep.jpg">',
      time: '<p class="post-date">' + time + '</p>',
      html: '<p class="post-message">Meep Berger completed some learning!</p>'
    });
    this.personalScore.addScore(50);

    this.router.navigate(['/app-specific-learning-page']);
  }

}
