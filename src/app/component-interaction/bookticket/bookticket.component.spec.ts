import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookticketComponent } from './bookticket.component';

describe('BookticketComponent', () => {
  let component: BookticketComponent;
  let fixture: ComponentFixture<BookticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
