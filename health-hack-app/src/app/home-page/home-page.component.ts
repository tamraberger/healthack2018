import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Notifications } from '../services/notifications.service';
import { PersonalScore } from '../services/score.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  newsItems: {}[];
  shownScore: number;

  constructor(private notifications: Notifications, private score: PersonalScore) {
    this.newsItems = notifications.getNotifications();
    this.shownScore = score.getScore();
   }

  ngOnInit() {
  }

}
