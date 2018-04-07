import { Component, OnInit } from '@angular/core';
import { QuizScore } from '../services/quiz.service';

@Component({
  selector: 'app-specific-learning-page',
  templateUrl: './specific-learning-page.component.html',
  styleUrls: ['./specific-learning-page.component.css']
})
export class SpecificLearningPageComponent implements OnInit {

  constructor(private quizScore: QuizScore) { this.quizScore = quizScore; }

  ngOnInit() {
  }

}
