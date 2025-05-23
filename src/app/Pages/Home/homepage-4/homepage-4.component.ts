import { Component, ElementRef, ViewChild } from '@angular/core';
import { CustomerReviewsComponent } from "../../../component/customer-reviews/customer-reviews.component";
import { GameCollectionComponent } from "../../../component/game-collection/game-collection.component";
import { QuestionsComponent } from "../../../component/questions/questions.component";
import { DownloadSectionComponent } from "../../../component/download-section/download-section.component";
import Swiper from 'swiper';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BtnMainHoverDirective } from '../../../Service/btn-main-hover.directive';

@Component({
    selector: 'app-homepage-4',
    imports: [CustomerReviewsComponent, GameCollectionComponent, QuestionsComponent, DownloadSectionComponent, CommonModule, RouterLink, BtnMainHoverDirective],
    templateUrl: './homepage-4.component.html',
    styleUrl: './homepage-4.component.css'
})
export class Homepage4Component {
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
  games = [
    {
      title: 'Mystic Racing Z',
      price: '$14.99',
      image: 'assets/images/covers-square/2.webp',
      orderLink: 'pricing-table-one.html'
    },
    {
      title: 'Galactic Odyssey',
      price: '$14.99',
      image: 'assets/images/covers-square/5.webp',
      orderLink: 'pricing-table-one.html'
    },
    {
      title: 'Funk Dungeon',
      price: '$14.99',
      image: 'assets/images/covers-square/4.webp',
      orderLink: 'pricing-table-one.html'
    },
    {
      title: 'Silent Wrath',
      price: '$14.99',
      image: 'assets/images/covers-square/3.webp',
      orderLink: 'pricing-table-one.html'
    },
    {
      title: 'Thunder and City',
      price: '$14.99',
      image: 'assets/images/covers-square/1.webp',
      orderLink: 'pricing-table-one.html'
    },
    {
      title: 'Warfare Legends',
      price: '$14.99',
      image: 'assets/images/covers-square/6.webp',
      orderLink: 'pricing-table-one.html'
    }
  ];
}
