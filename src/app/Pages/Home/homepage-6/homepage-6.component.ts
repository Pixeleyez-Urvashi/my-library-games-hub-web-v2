import { Component, ElementRef, ViewChild } from '@angular/core';
import { CustomerReviewsComponent } from "../../../component/customer-reviews/customer-reviews.component";
import { QuestionsComponent } from "../../../component/questions/questions.component";
import { DownloadSectionComponent } from "../../../component/download-section/download-section.component";
import Swiper from 'swiper';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BtnMainHoverDirective } from '../../../Service/btn-main-hover.directive';

@Component({
    selector: 'app-homepage-6',
    imports: [CustomerReviewsComponent, QuestionsComponent, DownloadSectionComponent, CommonModule, RouterLink, BtnMainHoverDirective],
    templateUrl: './homepage-6.component.html',
    styleUrl: './homepage-6.component.css'
})
export class Homepage6Component {
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
  slides = [
    {
      bgImageUrl: 'assets/images/slider/4.webp',
      title: 'Funk Dungeon',
      description: 'Aute esse non magna elit dolore dolore dolor sit est...',
      price: 15.99,
      flags: ['australia', 'brazil', 'canada', 'france']
    },
    {
      bgImageUrl: 'assets/images/slider/6.webp',
      title: 'Ancient Realms',
      description: 'Aute esse non magna elit dolore dolore dolor sit est...',
      price: 12.99,
      flags: ['finland', 'germany', 'indonesia', 'netherlands']
    },
    {
      bgImageUrl: 'assets/images/slider/1.webp',
      title: 'Galactic Odyssey',
      description: 'Aute esse non magna elit dolore dolore dolor sit est...',
      price: 9.99,
      flags: ['singapore', 'thailand', 'usa', 'united-kingdom']
    },
    {
      bgImageUrl: 'assets/images/slider/7.webp',
      title: 'Thunder and City',
      description: 'Aute esse non magna elit dolore dolore dolor sit est...',
      price: 12.99,
      flags: ['australia', 'brazil', 'finland', 'germany']
    }
  ];
  games = [
    { image: 'assets/images/covers-square/1.webp', name: 'Thunder and City' },
    { image: 'assets/images/covers-square/2.webp', name: 'Mystic Racing' },
    { image: 'assets/images/covers-square/3.webp', name: 'Silent Wrath' },
    { image: 'assets/images/covers-square/4.webp', name: 'Funk Dungeon' },
    { image: 'assets/images/covers-square/5.webp', name: 'Galactic Odyssey' },
    { image: 'assets/images/covers-square/6.webp', name: 'Warfare Legends' },
    { image: 'assets/images/covers-square/7.webp', name: 'Raceway Revolutions' },
    { image: 'assets/images/covers-square/8.webp', name: 'Starborne Odyssey' }
  ];
  paymentMethods = [
    { img: 'assets/images/payments/visa.webp', name: 'Visa' },
    { img: 'assets/images/payments/mastercard.webp', name: 'MasterCard' },
    { img: 'assets/images/payments/paypal.webp', name: 'PayPal' },
    { img: 'assets/images/payments/skrill.webp', name: 'Skrill' },
    { img: 'assets/images/payments/jcb.webp', name: 'JCB' },
    { img: 'assets/images/payments/american-express.webp', name: 'American Express' }
  ];
}
