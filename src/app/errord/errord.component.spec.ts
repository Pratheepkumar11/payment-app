import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrordComponent } from './errord.component';

describe('ErrordComponent', () => {
  let component: ErrordComponent;
  let fixture: ComponentFixture<ErrordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
