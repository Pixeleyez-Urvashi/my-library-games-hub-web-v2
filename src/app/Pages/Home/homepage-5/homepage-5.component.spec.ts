import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homepage5Component } from './homepage-5.component';

describe('Homepage5Component', () => {
  let component: Homepage5Component;
  let fixture: ComponentFixture<Homepage5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homepage5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homepage5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
