import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterRacesComponent } from './monster-races.component';

describe('MonsterRacesComponent', () => {
  let component: MonsterRacesComponent;
  let fixture: ComponentFixture<MonsterRacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsterRacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterRacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
