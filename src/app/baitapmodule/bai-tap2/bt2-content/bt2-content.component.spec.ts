import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt2ContentComponent } from './bt2-content.component';

describe('Bt2ContentComponent', () => {
  let component: Bt2ContentComponent;
  let fixture: ComponentFixture<Bt2ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt2ContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt2ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
