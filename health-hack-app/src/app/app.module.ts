import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { QuizScore } from './services/quiz.service';
>>>>>>> 1a38d4df4695bb98b9911f20b036159ef1a119bd

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
  { path: 'app-family',
     component: FamilyComponent
  },
  { path: 'app-friends',
  component: FriendsComponent
},
  { path: '', redirectTo: '/app-home-page', pathMatch: 'full' },
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
    FamilyComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [QuizScore],
  bootstrap: [AppComponent]
})
export class AppModule { }
