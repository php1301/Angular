import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt2FooterComponent } from './bt2-footer.component';

describe('Bt2FooterComponent', () => {
  let component: Bt2FooterComponent;
  let fixture: ComponentFixture<Bt2FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt2FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt2FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
