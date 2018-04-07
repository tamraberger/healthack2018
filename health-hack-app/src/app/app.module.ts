import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AllLearningPageComponent } from './all-learning-page/all-learning-page.component';
import { SpecificLearningPageComponent } from './specific-learning-page/specific-learning-page.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { FriendsAndFamiliyViewComponent } from './friends-and-familiy-view/friends-and-familiy-view.component';
import { Bootstrap } from 'bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AllLearningPageComponent,
    SpecificLearningPageComponent,
    QuizPageComponent,
    NavbarComponent,
    ProfilePageComponent,
    FriendsAndFamiliyViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
