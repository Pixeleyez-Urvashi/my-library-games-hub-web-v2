import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { jarallax } from 'jarallax';
import Swiper from 'swiper';
import AOS from 'aos';
import { QuestionsComponent } from "../../../component/questions/questions.component";
import { CustomerReviewsComponent } from "../../../component/customer-reviews/customer-reviews.component";
import { RouterLink } from '@angular/router';
import { BtnMainHoverDirective } from '../../../Service/btn-main-hover.directive';

@Component({
    selector: 'app-homepage-7',
    imports: [QuestionsComponent, CustomerReviewsComponent, CommonModule, RouterLink, BtnMainHoverDirective],
    templateUrl: './homepage-7.component.html',
    styleUrl: './homepage-7.component.css'
})
export class Homepage7Component {
  @ViewChild('grabCursor') grabCursorContainer!: ElementRef;
  ngAfterViewInit() {
    new Swiper(this.grabCursorContainer.nativeElement, {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 30,
      grabCursor: true,
      autoplay: {
        delay: 3000, // Slide will automatically change every 3 seconds
        disableOnInteraction: false, // Keep autoplay active even after manual interaction (swiping)
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
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
  slides = [
    {
      subtitle: 'Servers Are Available',
      title: 'Galactic Odyssey Server Hosting',
      text: 'Your own game server is only 5 minutes away!',
      buttonText: 'Order Your Game Server Now',
      link: 'pricing-table-one.html',
      image: 'assets/images/slider/creative-1.webp'
    },
    {
      subtitle: 'Servers Are Available',
      title: 'Warfare Legends Server Hosting',
      text: 'Your own game server is only 5 minutes away!',
      buttonText: 'Order Your Game Server Now',
      link: 'pricing-table-one.html',
      image: 'assets/images/slider/creative-2.webp'
    },
    {
      subtitle: 'Servers Are Available',
      title: 'Cyber Nexus Server Hosting',
      text: 'Your own game server is only 5 minutes away!',
      buttonText: 'Order Your Game Server Now',
      link: 'pricing-table-one.html',
      image: 'assets/images/slider/creative-3.webp'
    }
  ];
  features = [
    {
      image: 'assets/images/icons/1.png',
      title: 'Super Quick Setup',
      description: 'Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.'
    },
    {
      image: 'assets/images/icons/2.png',
      title: 'Premium Hardware',
      description: 'Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.'
    },
    {
      image: 'assets/images/icons/3.png',
      title: 'DDos Protection',
      description: 'Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.'
    },
    {
      image: 'assets/images/icons/4.png',
      title: 'Fast Support',
      description: 'Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.'
    }
  ];
  items = [
    { name: 'Thunder and City', price: '$14.99', image: 'assets/images/covers/1.webp', link: 'pricing-table-one.html' },
    { name: 'Mystic Racing Z', price: '$14.99', image: 'assets/images/covers/2.webp', link: 'pricing-table-one.html' },
    { name: 'Silent Wrath', price: '$14.99', image: 'assets/images/covers/3.webp', link: 'pricing-table-one.html' },
    { name: 'Funk Dungeon', price: '$14.99', image: 'assets/images/covers/4.webp', link: 'pricing-table-one.html' },
    { name: 'Galactic Odyssey', price: '$14.99', image: 'assets/images/covers/5.webp', link: 'pricing-table-one.html' },
    { name: 'Warfare Legends', price: '$14.99', image: 'assets/images/covers/6.webp', link: 'pricing-table-one.html' },
    { name: 'Raceway Revolution', price: '$14.99', image: 'assets/images/covers/7.webp', link: 'pricing-table-one.html' },
    { name: 'Starborne Odyssey', price: '$14.99', image: 'assets/images/covers/8.webp', link: 'pricing-table-one.html' }
  ];
  payments = [
    { name: 'Visa', image: 'assets/images/payments/visa.webp' },
    { name: 'MasterCard', image: 'assets/images/payments/mastercard.webp' },
    { name: 'PayPal', image: 'assets/images/payments/paypal.webp' },
    { name: 'Skrill', image: 'assets/images/payments/skrill.webp' },
    { name: 'JCB', image: 'assets/images/payments/jcb.webp' },
    { name: 'American Express', image: 'assets/images/payments/american-express.webp' }
  ];
}
