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
  addedPoints: number;
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
    this.addedPoints = 50;
    if (this.q1 != 1) {
      this.correctAnswers--;
      this.addedPoints -= 5;
    }
    if (this.q2 != 3) {
      this.correctAnswers--;
      this.addedPoints -= 5;
    }
    if (this.q3 != 2) {
      this.correctAnswers--;
      this.addedPoints -= 5;
    }
    if (this.q4 != 1) {
      this.correctAnswers--;
      this.addedPoints -= 5;
    }
    if (this.q5 != 4) {
      this.correctAnswers--;
      this.addedPoints -= 5;
    }
    if (this.q6 != 2) {
      this.correctAnswers--;
      this.addedPoints -= 5;
    }
    this.score = Math.round(100 * (this.correctAnswers / 6));
    this.quizScore.setScore(this.score);
    const date = new Date();
    const time = date.toDateString();
    this.notifications.addNotification({
      img: '<img class="post-img" src="./assets/illness.png">',
      time: '<p class="post-date">' + time + '</p>',
      html: '<a href="http://localhost:4200/app-illness-learning-page" class="post-message">Potential Flu Outbreak! Learn More By Clicking Here</a>'
    });
    if (confirm('You scored ' + this.score +
      '% on this quiz! You also won ' + this.addedPoints +
      ' out of 50 points for taking the quiz! Would you like to share this information?')) {
      this.notifications.addNotification({
        img: '<img class="post-img img-thumbnail" src="./assets/Ondrus_Keri.jpg">',
        time: '<p class="post-date">' + time + '</p>',
        html: '<p class="post-message">You completed some learning!</p>'
      });
    }
    this.personalScore.addScore(this.addedPoints);

    this.router.navigate(['/app-specific-learning-page']);
  }

}
