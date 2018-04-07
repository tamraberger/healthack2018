import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsAndFamiliyViewComponent } from './friends-and-familiy-view.component';

describe('FriendsAndFamiliyViewComponent', () => {
  let component: FriendsAndFamiliyViewComponent;
  let fixture: ComponentFixture<FriendsAndFamiliyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendsAndFamiliyViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsAndFamiliyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
