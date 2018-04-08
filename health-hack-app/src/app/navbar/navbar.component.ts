import { Component, OnInit } from '@angular/core';
import { PersonalScore } from '../services/score.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  shownScore: number;

  constructor(private score: PersonalScore) {
    this.shownScore = score.getScore();
   }

  ngOnInit() {
  }

}
