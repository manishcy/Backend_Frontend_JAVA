import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFoodlistComponent } from './user-foodlist.component';

describe('UserFoodlistComponent', () => {
  let component: UserFoodlistComponent;
  let fixture: ComponentFixture<UserFoodlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFoodlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFoodlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
