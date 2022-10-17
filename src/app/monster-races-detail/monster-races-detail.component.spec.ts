import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterRacesDetailComponent } from './monster-races-detail.component';

describe('MonsterRacesDetailComponent', () => {
  let component: MonsterRacesDetailComponent;
  let fixture: ComponentFixture<MonsterRacesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsterRacesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterRacesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
