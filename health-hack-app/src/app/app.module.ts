import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AllLearningPageComponent } from './all-learning-page/all-learning-page.component';
import { SpecificLearningPageComponent } from './specific-learning-page/specific-learning-page.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { Bootstrap } from 'bootstrap';
import { FormsModule } from '@angular/forms';
import { FriendsComponent } from './friends/friends.component';
import { FamilyComponent } from './family/family.component';
import { QuizScore } from './services/quiz.service';
import { PersonalScore } from './services/score.service';
import { Notifications } from './services/notifications.service';
import { IllnessLearningPageComponent } from './illness-learning-page/illness-learning-page.component';

const appRoutes: Routes = [
  { path: 'app-home-page',
    component: HomePageComponent
  },
  { path: 'app-all-learning-page',
    component: AllLearningPageComponent
  },
  { path: 'app-profile-page',
    component: ProfilePageComponent
  },
  { path: 'app-quiz-page',
    component: QuizPageComponent
  },
  { path: 'app-specific-learning-page',
    component: SpecificLearningPageComponent
  },
  { path: 'app-illness-learning-page',
    component: IllnessLearningPageComponent
  },
  { path: 'app-family',
     component: FamilyComponent
  },
  { path: 'app-friends',
  component: FriendsComponent
  },
  { path: '', redirectTo: '/app-home-page', pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AllLearningPageComponent,
    SpecificLearningPageComponent,
    QuizPageComponent,
    NavbarComponent,
    ProfilePageComponent,
    FriendsComponent,
    FamilyComponent,
    IllnessLearningPageComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [QuizScore, Notifications, PersonalScore],
  bootstrap: [AppComponent]
})
export class AppModule { }
