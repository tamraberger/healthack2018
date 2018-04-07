import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLearningPageComponent } from './all-learning-page.component';

describe('AllLearningPageComponent', () => {
  let component: AllLearningPageComponent;
  let fixture: ComponentFixture<AllLearningPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllLearningPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLearningPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
