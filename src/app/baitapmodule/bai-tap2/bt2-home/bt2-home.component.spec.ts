import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt2HomeComponent } from './bt2-home.component';

describe('Bt2HomeComponent', () => {
  let component: Bt2HomeComponent;
  let fixture: ComponentFixture<Bt2HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt2HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt2HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
