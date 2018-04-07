import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificLearningPageComponent } from './specific-learning-page.component';

describe('SpecificLearningPageComponent', () => {
  let component: SpecificLearningPageComponent;
  let fixture: ComponentFixture<SpecificLearningPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificLearningPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificLearningPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
