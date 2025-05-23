import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { QuestionsComponent } from "../../../component/questions/questions.component";
import { jarallax } from 'jarallax';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CountUpModule } from 'ngx-countup';
import AOS from 'aos';
import { RouterLink } from '@angular/router';
import { BtnMainHoverDirective } from '../../../Service/btn-main-hover.directive';

@Component({
    selector: 'app-homepage-8',
    imports: [QuestionsComponent, CountUpModule, CommonModule, RouterLink, BtnMainHoverDirective],
    templateUrl: './homepage-8.component.html',
    styleUrl: './homepage-8.component.css'
})
export class Homepage8Component {
  @ViewChild('thumbnailCarousel') thumbnailCarousel!: ElementRef;

  ngAfterViewInit(): void {
    new Swiper(this.thumbnailCarousel.nativeElement, {
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
      breakpoints: {
        375: {
          slidesPerView: 1.5,
          spaceBetween: 20
        },
        557: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 20
        }
      }
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
    { name: 'Jakarta', flag: 'assets/images/flags/indonesia.png' }
  ];

  products = [
    {
      title: 'Mystic Racing Z',
      price: 14.99,
      image: 'assets/images/covers-square/2.webp',
      link: 'pricing-table-one.html'
    },
    {
      title: 'Galactic Odyssey',
      price: 14.99,
      image: 'assets/images/covers-square/5.webp',
      link: 'pricing-table-one.html'
    },
    {
      title: 'Funk Dungeon',
      price: 14.99,
      image: 'assets/images/covers-square/4.webp',
      link: 'pricing-table-one.html'
    },
    {
      title: 'Silent Wrath',
      price: 14.99,
      image: 'assets/images/covers-square/3.webp',
      link: 'pricing-table-one.html'
    },
    {
      title: 'Thunder and City',
      price: 14.99,
      image: 'assets/images/covers-square/1.webp',
      link: 'pricing-table-one.html'
    },
    {
      title: 'Warfare Legends',
      price: 14.99,
      image: 'assets/images/covers-square/6.webp',
      link: 'pricing-table-one.html'
    }
  ];
  paymentMethods = [
    { img: 'assets/images/payments/visa.webp' },
    { img: 'assets/images/payments/mastercard.webp' },
    { img: 'assets/images/payments/paypal.webp' },
    { img: 'assets/images/payments/skrill.webp' },
    { img: 'assets/images/payments/jcb.webp' },
    { img: 'assets/images/payments/american-express.webp' }
  ];
}
