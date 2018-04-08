import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IllnessLearningPageComponent } from './illness-learning-page.component';

describe('IllnessLearningPageComponent', () => {
  let component: IllnessLearningPageComponent;
  let fixture: ComponentFixture<IllnessLearningPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IllnessLearningPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IllnessLearningPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
