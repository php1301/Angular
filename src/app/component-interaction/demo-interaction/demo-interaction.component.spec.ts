import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoInteractionComponent } from './demo-interaction.component';

describe('DemoInteractionComponent', () => {
  let component: DemoInteractionComponent;
  let fixture: ComponentFixture<DemoInteractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoInteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
