import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt2CarouselComponent } from './bt2-carousel.component';

describe('Bt2CarouselComponent', () => {
  let component: Bt2CarouselComponent;
  let fixture: ComponentFixture<Bt2CarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bt2CarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bt2CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
