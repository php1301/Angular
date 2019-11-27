import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment1componentComponent } from './assignment1component.component';

describe('Assignment1componentComponent', () => {
  let component: Assignment1componentComponent;
  let fixture: ComponentFixture<Assignment1componentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assignment1componentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignment1componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
