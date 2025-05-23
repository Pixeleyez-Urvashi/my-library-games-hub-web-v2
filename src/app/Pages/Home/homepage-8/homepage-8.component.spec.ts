import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homepage8Component } from './homepage-8.component';

describe('Homepage8Component', () => {
  let component: Homepage8Component;
  let fixture: ComponentFixture<Homepage8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homepage8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homepage8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
