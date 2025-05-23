import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { QuestionsComponent } from "../../../component/questions/questions.component";
import Swiper from 'swiper';
import { jarallax } from 'jarallax';
import AOS from 'aos';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BtnMainHoverDirective } from '../../../Service/btn-main-hover.directive';

@Component({
    selector: 'app-homepage-9',
    imports: [QuestionsComponent, CommonModule, RouterLink, BtnMainHoverDirective],
    templateUrl: './homepage-9.component.html',
    styleUrl: './homepage-9.component.css'
})
export class Homepage9Component {

  @ViewChild('slider') sliderContainer!: ElementRef;

  slides = [
    {
      subtitle: 'Servers Are Available',
      title: 'Shadow of Night',
      text: 'Aute esse non magna elit dolore dolore dolor sit est...',
      price: '9.99',
      image: 'assets/images/covers-square/12.webp',
      link: 'pricing-table-one.html'
    },
    {
      subtitle: 'Servers Are Available',
      title: 'Alien Football',
      text: 'Ea occaecat ea duis laborum reprehenderit id cillum...',
      price: '9.99',
      image: 'assets/images/covers-square/11.webp',
      link: 'pricing-table-one.html'
    },
    {
      subtitle: 'Servers Are Available',
      title: 'Funk Dungeon',
      text: 'Ea occaecat ea duis laborum reprehenderit id cillum...',
      price: '9.99',
      image: 'assets/images/covers-square/4.webp',
      link: 'pricing-table-one.html'
    },
    {
      subtitle: 'Servers Are Available',
      title: 'Galactic Oddysey',
      text: 'Ea occaecat ea duis laborum reprehenderit id cillum...',
      price: '9.99',
      image: 'assets/images/covers-square/5.webp',
      link: 'pricing-table-one.html'
    }
  ];
  testimonials = [
    {
      backgroundImage: 'assets/images/background/4.webp',
      stars: [1, 2, 3, 4, 5],
      quote: 'Their servers are lightning-fast, and their customer support is top-notch. I highly recommend them to any gamer looking for a premium hosting experience.',
      name: 'Lucas Thompson',
      position: 'Enthusiast Gamer',
      clientImage: 'assets/images/clients/1.webp'
    },
    {
      backgroundImage: 'assets/images/background/4.webp',
      stars: [1, 2, 3, 4, 5],
      quote: 'Their intuitive control panel guided me through every step of setting up and managing my server, and their extensive knowledge base provided answers to all of my questions.',
      name: 'Olivia Parker',
      position: 'Enthusiast Gamer',
      clientImage: 'assets/images/clients/2.webp'
    },
    {
      backgroundImage: 'assets/images/background/4.webp',
      stars: [1, 2, 3, 4, 5],
      quote: 'Their automated backup system has saved me from countless headaches, ensuring that my players\' progress is always protected. Plus, their integrated voice chat.',
      name: 'Ethan Rodriguez',
      position: 'Enthusiast Gamer',
      clientImage: 'assets/images/clients/3.webp'
    },
    {
      backgroundImage: 'assets/images/background/4.webp',
      stars: [1, 2, 3, 4, 5],
      quote: 'The automated mod installation feature has made it incredibly easy to customize our servers, and their competitive pricing plans fit perfectly within our budget.',
      name: 'Emily Patel',
      position: 'Enthusiast Gamer',
      clientImage: 'assets/images/clients/4.webp'
    }
  ];

  games = [
    {
      name: 'Thunder and City',
      price: '$14.99',
      discount: '20% OFF',
      image: 'assets/images/covers/1.webp',
      orderUrl: 'pricing-table-one.html'
    },
    {
      name: 'Mystic Racing Z',
      price: '$14.99',
      discount: '20% OFF',
      image: 'assets/images/covers/2.webp',
      orderUrl: 'pricing-table-one.html'
    },
    {
      name: 'Silent Wrath',
      price: '$14.99',
      discount: '20% OFF',
      image: 'assets/images/covers/3.webp',
      orderUrl: 'pricing-table-one.html'
    },
    {
      name: 'Funk Dungeon',
      price: '$14.99',
      discount: '20% OFF',
      image: 'assets/images/covers/4.webp',
      orderUrl: 'pricing-table-one.html'
    },
    {
      name: 'Galactic Odyssey',
      price: '$14.99',
      discount: '20% OFF',
      image: 'assets/images/covers/5.webp',
      orderUrl: 'pricing-table-one.html'
    },
    {
      name: 'Warfare Legends',
      price: '$14.99',
      discount: '20% OFF',
      image: 'assets/images/covers/6.webp',
      orderUrl: 'pricing-table-one.html'
    },
    {
      name: 'Raceway Revolution',
      price: '$14.99',
      discount: '20% OFF',
      image: 'assets/images/covers/7.webp',
      orderUrl: 'pricing-table-one.html'
    },
    {
      name: 'Starborne Odyssey',
      price: '$14.99',
      discount: '20% OFF',
      image: 'assets/images/covers/8.webp',
      orderUrl: 'pricing-table-one.html'
    }
  ];
  paymentMethods = [
    { name: 'Visa', image: 'assets/images/payments/visa.webp' },
    { name: 'Mastercard', image: 'assets/images/payments/mastercard.webp' },
    { name: 'Paypal', image: 'assets/images/payments/paypal.webp' },
    { name: 'Skrill', image: 'assets/images/payments/skrill.webp' },
    { name: 'JCB', image: 'assets/images/payments/jcb.webp' },
    { name: 'American Express', image: 'assets/images/payments/american-express.webp' }
  ];
  ngAfterViewInit(): void {
    new Swiper(this.sliderContainer.nativeElement, {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      loop: true,
      centeredSlides: true,
      grabCursor: true
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

}
