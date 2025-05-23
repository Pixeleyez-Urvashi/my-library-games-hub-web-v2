import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homepage10Component } from './homepage-10.component';

describe('Homepage10Component', () => {
  let component: Homepage10Component;
  let fixture: ComponentFixture<Homepage10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homepage10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homepage10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
