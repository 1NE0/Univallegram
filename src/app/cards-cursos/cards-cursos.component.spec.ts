import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsCursosComponent } from './cards-cursos.component';

describe('CardsCursosComponent', () => {
  let component: CardsCursosComponent;
  let fixture: ComponentFixture<CardsCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
