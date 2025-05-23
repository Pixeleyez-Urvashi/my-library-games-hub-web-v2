import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homepage6Component } from './homepage-6.component';

describe('Homepage6Component', () => {
  let component: Homepage6Component;
  let fixture: ComponentFixture<Homepage6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homepage6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homepage6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
