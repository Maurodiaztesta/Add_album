import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonContadorComponent } from './button-contador.component';

describe('ButtonContadorComponent', () => {
  let component: ButtonContadorComponent;
  let fixture: ComponentFixture<ButtonContadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonContadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
