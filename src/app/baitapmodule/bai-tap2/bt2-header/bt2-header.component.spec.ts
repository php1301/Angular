import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt2HeaderComponent } from './bt2-header.component';

describe('Bt2HeaderComponent', () => {
  let component: Bt2HeaderComponent;
  let fixture: ComponentFixture<Bt2HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt2HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt2HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
