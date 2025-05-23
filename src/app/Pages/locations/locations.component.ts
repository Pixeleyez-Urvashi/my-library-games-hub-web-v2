import AOS from 'aos';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { jarallax } from 'jarallax';
import { RouterLink } from '@angular/router';
import { BtnMainHoverDirective } from '../../Service/btn-main-hover.directive';

@Component({
    selector: 'app-locations',
    imports: [CommonModule, RouterLink, BtnMainHoverDirective],
    templateUrl: './locations.component.html',
    styleUrl: './locations.component.css'
})
export class LocationsComponent {
  ngOnInit(): void {
    const elements = document.querySelectorAll('.jarallax');
    const options = {
      speed: 0.5,
    };
    jarallax(elements, options);
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 800,
        easing: 'ease',
        once: true,
        mirror: false,
      });
    }
  }
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  hotspots = [
    { name: 'United States', top: '39%', left: '20%' },
    { name: 'Australia', top: '76%', left: '87%' },
    { name: 'Indonesia', top: '68%', left: '80%' },
    { name: 'Canada', top: '23%', left: '18%' },
    { name: 'Brazil', top: '68%', left: '33%' },
    { name: 'China', top: '45%', left: '75%' },
    { name: 'France', top: '36%', left: '48%' },
    { name: 'Sweden', top: '23%', left: '51%' },
    { name: 'South Africa', top: '78%', left: '53%' },
  ];
  cities = [
    'London', 'Paris', 'Frankfurt', 'Amsterdam', 'Stockholm',
    'Helsinki', 'Los Angeles', 'Quebec', 'Singapore',
    'Sydney', 'Sau Paulo', 'Bangkok', 'Jakarta',
  ];
}
