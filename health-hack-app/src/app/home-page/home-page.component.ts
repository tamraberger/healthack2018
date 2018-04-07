import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuizScore } from '../services/quiz.service';
import { Notifications } from '../services/notifications.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
