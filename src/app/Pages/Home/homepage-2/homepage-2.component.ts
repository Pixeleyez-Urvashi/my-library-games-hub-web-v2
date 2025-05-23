
import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { GameCollectionComponent } from "../../../component/game-collection/game-collection.component";
import { DownloadSectionComponent } from "../../../component/download-section/download-section.component";
import { QuestionsComponent } from "../../../component/questions/questions.component";
import Swiper from 'swiper';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { jarallax } from 'jarallax';
import AOS from 'aos';
import { RouterLink } from '@angular/router';
import { BtnMainHoverDirective } from '../../../Service/btn-main-hover.directive';

@Component({
    selector: 'app-homepage-2',
    imports: [GameCollectionComponent, DownloadSectionComponent, QuestionsComponent, CommonModule, RouterLink, BtnMainHoverDirective],
    templateUrl: './homepage-2.component.html',
    styleUrl: './homepage-2.component.css'
})
export class Homepage2Component {
  @ViewChild('grabCursor') grabCursorContainer!: ElementRef;
  bgImageUrl: string = 'url(assets/images/slider/5.webp)';
  bgImageUrl2: string = 'url(assets/images/slider/6.webp)';
  bgImageUrl3: string = 'url(assets/images/slider/7.webp)';
  bgImageUrl4: string = 'url(assets/images/slider/8.webp)';

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

  paymentMethods = [
    { img: 'assets/images/payments/visa.webp', name: 'Visa' },
    { img: 'assets/images/payments/mastercard.webp', name: 'MasterCard' },
    { img: 'assets/images/payments/paypal.webp', name: 'PayPal' },
    { img: 'assets/images/payments/skrill.webp', name: 'Skrill' },
    { img: 'assets/images/payments/jcb.webp', name: 'JCB' },
    { img: 'assets/images/payments/american-express.webp', name: 'American Express' }
  ];
  slides = [
    {
      bgImage: 'url(assets/images/slider/1.webp)',
      title: 'Cyber Nexus',
      description: 'Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id cillum tempor cupidatat qui nisi proident nostrud dolore id do eiusmod. Lorem ipsum non labore.',
      orderLink: 'game-server-1.html'
    },
    {
      bgImage: 'url(assets/images/slider/2.webp)',
      title: 'Ancient Realms',
      description: 'Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id cillum tempor cupidatat qui nisi proident nostrud dolore id do eiusmod. Lorem ipsum non labore.',
      orderLink: 'game-server-1.html'
    },
    {
      bgImage: 'url(assets/images/slider/3.webp)',
      title: 'Thunder and City',
      description: 'Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id cillum tempor cupidatat qui nisi proident nostrud dolore id do eiusmod. Lorem ipsum non labore.',
      orderLink: 'game-server-1.html'
    },
    {
      bgImage: 'url(assets/images/slider/4.webp)',
      title: 'Raceway Revolution',
      description: 'Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id cillum tempor cupidatat qui nisi proident nostrud dolore id do eiusmod. Lorem ipsum non labore.',
      orderLink: 'game-server-1.html'
    }
  ];
}
