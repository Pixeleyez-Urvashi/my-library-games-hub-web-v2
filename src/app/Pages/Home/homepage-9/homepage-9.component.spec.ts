import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homepage9Component } from './homepage-9.component';

describe('Homepage9Component', () => {
  let component: Homepage9Component;
  let fixture: ComponentFixture<Homepage9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homepage9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homepage9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
