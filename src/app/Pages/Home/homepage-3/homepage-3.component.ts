import AOS from 'aos';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CustomerReviewsComponent } from "../../../component/customer-reviews/customer-reviews.component";
import { QuestionsComponent } from "../../../component/questions/questions.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BtnMainHoverDirective } from '../../../Service/btn-main-hover.directive';
import { jarallax } from 'jarallax';

@Component({
    selector: 'app-homepage-3',
    imports: [CustomerReviewsComponent, QuestionsComponent, CommonModule, RouterLink, BtnMainHoverDirective],
    templateUrl: './homepage-3.component.html',
    styleUrl: './homepage-3.component.css'
})
export class Homepage3Component {
  bgImageUrl: string = 'url(assets/images/background/4.webp)';
  cities = [
    { name: 'London', flag: 'assets/images/flags/united-kingdom.png' },
    { name: 'Paris', flag: 'assets/images/flags/france.png' },
    { name: 'Frankfurt', flag: 'assets/images/flags/germany.png' },
    { name: 'Amsterdam', flag: 'assets/images/flags/netherlands.png' },
    { name: 'Stockholm', flag: 'assets/images/flags/sweden.png' },
    { name: 'Helsinki', flag: 'assets/images/flags/finland.png' },
    { name: 'Los Angeles', flag: 'assets/images/flags/usa.png' },
    { name: 'Quebec', flag: 'assets/images/flags/canada.png' },
    { name: 'Singapore', flag: 'assets/images/flags/singapore.png' },
    { name: 'Sydney', flag: 'assets/images/flags/australia.png' },
    { name: 'Sau Paulo', flag: 'assets/images/flags/brazil.png' },
    { name: 'Bangkok', flag: 'assets/images/flags/thailand.png' },
    { name: 'Jakarta', flag: 'assets/images/flags/indonesia.png' },
  ];


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

  pricingPlans = [
    {
      title: '4 Slots',
      monthlyPrice: '$3.59',
      yearlyPrice: '$2.59',
      normalPrice: '$9.99',
      features: ['Super Quick Setup', 'Premium Hardware', 'DDos Protection', '24/7 Customer Support'],
      serverLocations: [
        { name: 'London, England', flag: 'assets/images/flags/united-kingdom.png' },
        { name: 'Paris, France', flag: 'assets/images/flags/france.png' },
        { name: 'Frankfurt, Germany', flag: 'assets/images/flags/germany.png' },
        { name: 'Amsterdam, Netherlands', flag: 'assets/images/flags/netherlands.png' },
        { name: 'Stockholm, Sweden', flag: 'assets/images/flags/sweden.png' },
        { name: 'Helsinki, Finland', flag: 'assets/images/flags/finland.png' },
        { name: 'Los Angeles, USA', flag: 'assets/images/flags/usa.png' },
        { name: 'Quebec, Canada', flag: 'assets/images/flags/canada.png' },
        { name: 'Sydney, Australia', flag: 'assets/images/flags/australia.png' },
        { name: 'Sau Paulo, Brazil', flag: 'assets/images/flags/brazil.png' },
        { name: 'Bangkok, Thailand', flag: 'assets/images/flags/thailand.png' },
        { name: 'Jakarta, Indonesia', flag: 'assets/images/flags/indonesia.png' },
      ]
    },
    {
      title: '10 Slots',
      monthlyPrice: '$5.59',
      yearlyPrice: '$3.59',
      normalPrice: '$15.99',
      features: ['Super Quick Setup', 'Premium Hardware', 'DDos Protection', '24/7 Customer Support'],
      serverLocations: [
        { name: 'London, England', flag: 'assets/images/flags/united-kingdom.png' },
        { name: 'Paris, France', flag: 'assets/images/flags/france.png' },
        { name: 'Frankfurt, Germany', flag: 'assets/images/flags/germany.png' },
        { name: 'Amsterdam, Netherlands', flag: 'assets/images/flags/netherlands.png' },
        { name: 'Stockholm, Sweden', flag: 'assets/images/flags/sweden.png' },
        { name: 'Helsinki, Finland', flag: 'assets/images/flags/finland.png' },
        { name: 'Los Angeles, USA', flag: 'assets/images/flags/usa.png' },
        { name: 'Quebec, Canada', flag: 'assets/images/flags/canada.png' },
        { name: 'Sydney, Australia', flag: 'assets/images/flags/australia.png' },
        { name: 'Sau Paulo, Brazil', flag: 'assets/images/flags/brazil.png' },
        { name: 'Bangkok, Thailand', flag: 'assets/images/flags/thailand.png' },
        { name: 'Jakarta, Indonesia', flag: 'assets/images/flags/indonesia.png' },
      ]
    },
    {
      title: '20 Slots',
      monthlyPrice: '$8.59',
      yearlyPrice: '$5.59',
      normalPrice: '$24.99',
      features: ['Super Quick Setup', 'Premium Hardware', 'DDos Protection', '24/7 Customer Support'],
      serverLocations: [
        { name: 'London, England', flag: 'assets/images/flags/united-kingdom.png' },
        { name: 'Paris, France', flag: 'assets/images/flags/france.png' },
        { name: 'Frankfurt, Germany', flag: 'assets/images/flags/germany.png' },
        { name: 'Amsterdam, Netherlands', flag: 'assets/images/flags/netherlands.png' },
        { name: 'Stockholm, Sweden', flag: 'assets/images/flags/sweden.png' },
        { name: 'Helsinki, Finland', flag: 'assets/images/flags/finland.png' },
        { name: 'Los Angeles, USA', flag: 'assets/images/flags/usa.png' },
        { name: 'Quebec, Canada', flag: 'assets/images/flags/canada.png' },
        { name: 'Sydney, Australia', flag: 'assets/images/flags/australia.png' },
        { name: 'Sau Paulo, Brazil', flag: 'assets/images/flags/brazil.png' },
        { name: 'Bangkok, Thailand', flag: 'assets/images/flags/thailand.png' },
        { name: 'Jakarta, Indonesia', flag: 'assets/images/flags/indonesia.png' },
      ]
    },
    {
      title: 'Custom',
      monthlyPrice: '$15.59',
      yearlyPrice: '$10.59',
      normalPrice: '$36.99',
      features: ['Super Quick Setup', 'Premium Hardware', 'DDos Protection', '24/7 Customer Support'],
      serverLocations: [
        { name: 'London, England', flag: 'assets/images/flags/united-kingdom.png' },
        { name: 'Paris, France', flag: 'assets/images/flags/france.png' },
        { name: 'Frankfurt, Germany', flag: 'assets/images/flags/germany.png' },
        { name: 'Amsterdam, Netherlands', flag: 'assets/images/flags/netherlands.png' },
        { name: 'Stockholm, Sweden', flag: 'assets/images/flags/sweden.png' },
        { name: 'Helsinki, Finland', flag: 'assets/images/flags/finland.png' },
        { name: 'Los Angeles, USA', flag: 'assets/images/flags/usa.png' },
        { name: 'Quebec, Canada', flag: 'assets/images/flags/canada.png' },
        { name: 'Sydney, Australia', flag: 'assets/images/flags/australia.png' },
        { name: 'Sau Paulo, Brazil', flag: 'assets/images/flags/brazil.png' },
        { name: 'Bangkok, Thailand', flag: 'assets/images/flags/thailand.png' },
        { name: 'Jakarta, Indonesia', flag: 'assets/images/flags/indonesia.png' },
      ]
    }
  ];
}
