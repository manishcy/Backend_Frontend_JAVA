import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestloginhomepageComponent } from './restloginhomepage.component';

describe('RestloginhomepageComponent', () => {
  let component: RestloginhomepageComponent;
  let fixture: ComponentFixture<RestloginhomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestloginhomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestloginhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
