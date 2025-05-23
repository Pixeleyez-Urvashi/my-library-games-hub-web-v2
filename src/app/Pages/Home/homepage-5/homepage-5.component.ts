import AOS from 'aos';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { GameCollectionComponent } from "../../../component/game-collection/game-collection.component";
import { QuestionsComponent } from "../../../component/questions/questions.component";
import { jarallax } from 'jarallax';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BtnMainHoverDirective } from '../../../Service/btn-main-hover.directive';

@Component({
    selector: 'app-homepage-5',
    imports: [QuestionsComponent, CommonModule, BtnMainHoverDirective],
    templateUrl: './homepage-5.component.html',
    styleUrl: './homepage-5.component.css'
})
export class Homepage5Component {
  bgImageUrl1: string = 'url(assets/images/background/index-5.png)';
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
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
  games = [
    { title: 'Thunder and City', price: '$14.99', image: 'assets/images/covers/1.webp', orderLink: 'pricing-table-one.html' },
    { title: 'Mystic Racing Z', price: '$14.99', image: 'assets/images/covers/2.webp', orderLink: 'pricing-table-one.html' },
    { title: 'Silent Wrath', price: '$14.99', image: 'assets/images/covers/3.webp', orderLink: 'pricing-table-one.html' },
    { title: 'Funk Dungeon', price: '$14.99', image: 'assets/images/covers/4.webp', orderLink: 'pricing-table-one.html' },
    { title: 'Galactic Odyssey', price: '$14.99', image: 'assets/images/covers/5.webp', orderLink: 'pricing-table-one.html' },
    { title: 'Warfare Legends', price: '$14.99', image: 'assets/images/covers/6.webp', orderLink: 'pricing-table-one.html' },
    { title: 'Raceway Revolution', price: '$14.99', image: 'assets/images/covers/7.webp', orderLink: 'pricing-table-one.html' },
    { title: 'Starborne Odyssey', price: '$14.99', image: 'assets/images/covers/8.webp', orderLink: 'pricing-table-one.html' }
  ];
  spots = [
    { country: 'United States', top: '39%', left: '20%' },
    { country: 'Australia', top: '76%', left: '87%' },
    { country: 'Indonesia', top: '68%', left: '80%' },
    { country: 'Canada', top: '23%', left: '18%' },
    { country: 'Brazil', top: '68%', left: '33%' },
    { country: 'China', top: '45%', left: '75%' },
    { country: 'France', top: '36%', left: '48%' },
    { country: 'Sweden', top: '23%', left: '51%' },
    { country: 'South Africa', top: '78%', left: '53%' }
  ];
  cities = [
    'London', 'Paris', 'Frankfurt', 'Amsterdam', 'Stockholm',
    'Helsinki', 'Los Angeles', 'Quebec', 'Singapore',
    'Sydney', 'Sau Paulo', 'Bangkok', 'Jakarta'
  ];
  blogPosts = [
    {
      date: '25.10.2023',
      title: 'How to Set Up Your Own Game Server',
      description: 'Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...',
      imgSrc: 'assets/images/news/1.webp',
      link: 'news-single.html'
    },
    {
      date: '25.10.2023',
      title: 'Rise in Demand for Private Game Servers',
      description: 'Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...',
      imgSrc: 'assets/images/news/2.webp',
      link: 'news-single.html'
    },
    {
      date: '25.10.2023',
      title: 'Top Hosting Providers for Game Servers',
      description: 'Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...',
      imgSrc: 'assets/images/news/3.webp',
      link: 'news-single.html'
    }
  ];
  paymentMethods = [
    { imgSrc: 'assets/images/payments/visa.webp', alt: 'Visa' },
    { imgSrc: 'assets/images/payments/mastercard.webp', alt: 'Mastercard' },
    { imgSrc: 'assets/images/payments/paypal.webp', alt: 'Paypal' },
    { imgSrc: 'assets/images/payments/skrill.webp', alt: 'Skrill' },
    { imgSrc: 'assets/images/payments/jcb.webp', alt: 'JCB' },
    { imgSrc: 'assets/images/payments/american-express.webp', alt: 'American Express' }
  ];
}
