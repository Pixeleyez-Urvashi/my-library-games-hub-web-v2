import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { jarallax } from 'jarallax';
import AOS from 'aos';
import Swiper from 'swiper';
import { BtnMainHoverDirective } from '../../../Service/btn-main-hover.directive';

@Component({
    selector: 'app-homepage-10',
    imports: [CommonModule, BtnMainHoverDirective],
    templateUrl: './homepage-10.component.html',
    styleUrl: './homepage-10.component.css'
})
export class Homepage10Component {
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
  @ViewChild('testimonialCarousel') testimonialCarousel!: ElementRef;
  ngAfterViewInit(): void {
    new Swiper(this.testimonialCarousel.nativeElement, {
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
  gameServers = [
    {
      title: 'Mystic Racing',
      image: 'assets/images/covers-square/2.webp',
      label: 'New Release',
      price: '$14.99/mo',
      link: 'game-server-1.html',
      features: [
        'Super Quick Setup',
        'Premium Hardware',
        'DDos Protection',
        '24/7 Customer Support'
      ]
    },
    {
      title: 'Galactic Odyssey',
      image: 'assets/images/covers-square/5.webp',
      label: '',
      price: '$14.99/mo',
      link: 'game-server-1.html',
      features: [
        'Super Quick Setup',
        'Premium Hardware',
        'DDos Protection',
        '24/7 Customer Support'
      ]
    },
    {
      title: 'Cyber Nexus',
      image: 'assets/images/covers-square/9.webp',
      label: '25% off',
      price: '$14.99/mo',
      link: 'game-server-1.html',
      features: [
        'Super Quick Setup',
        'Premium Hardware',
        'DDos Protection',
        '24/7 Customer Support'
      ]
    },
    {
      title: 'Shadow of Night',
      image: 'assets/images/covers-square/12.webp',
      label: '',
      price: '$14.99/mo',
      link: 'game-server-1.html',
      features: [
        'Super Quick Setup',
        'Premium Hardware',
        'DDos Protection',
        '24/7 Customer Support'
      ]
    }
  ];
  games = [
    { name: 'Thunder and City', image: 'assets/images/covers/1.webp', price: '$14.99', label: '20% OFF', category: 'popular survival', link: 'pricing-table-one.html' },
    { name: 'Mystic Racing Z', image: 'assets/images/covers/2.webp', price: '$14.99', label: '20% OFF', category: 'sandbox', link: 'pricing-table-one.html' },
    { name: 'Silent Wrath', image: 'assets/images/covers/3.webp', price: '$14.99', label: '20% OFF', category: 'survival', link: 'pricing-table-one.html' },
    { name: 'Funk Dungeon', image: 'assets/images/covers/4.webp', price: '$14.99', label: '20% OFF', category: 'popular fps', link: 'pricing-table-one.html' },
    { name: 'Galactic Odyssey', image: 'assets/images/covers/5.webp', price: '$14.99', label: '20% OFF', category: 'popular', link: 'pricing-table-one.html' },
    { name: 'Warfare Legends', image: 'assets/images/covers/6.webp', price: '$14.99', label: '20% OFF', category: 'fps', link: 'pricing-table-one.html' },
    { name: 'Raceway Revolution', image: 'assets/images/covers/7.webp', price: '$14.99', label: '20% OFF', category: 'sandbox', link: 'pricing-table-one.html' },
    { name: 'Starborne Odyssey', image: 'assets/images/covers/8.webp', price: '$14.99', label: '20% OFF', category: 'sandbox', link: 'pricing-table-one.html' },
    { name: 'Cyber Nexus', image: 'assets/images/covers/9.webp', price: '$14.99', label: '20% OFF', category: 'popular', link: 'pricing-table-one.html' },
    { name: 'Ancient Realms', image: 'assets/images/covers/10.webp', price: '$14.99', label: '20% OFF', category: 'fps', link: 'pricing-table-one.html' },
    { name: 'Alien Football', image: 'assets/images/covers/11.webp', price: '$14.99', label: '20% OFF', category: 'sandbox', link: 'pricing-table-one.html' },
    { name: 'Shadow of Night', image: 'assets/images/covers/12.webp', price: '$14.99', label: '20% OFF', category: 'sandbox', link: 'pricing-table-one.html' }
  ];
  testimonials = [
    {
      name: "Michael S.",
      image: "assets/images/people/1.jpg",
      text: `"I've been using Playhost for my game server needs, and I couldn't be happier. The server uptime is fantastic, and the customer support team is always quick to assist with any issues."`,
      stars: 5
    },
    {
      name: "Robert L.",
      image: "assets/images/people/2.jpg",
      text: `"Running a game server used to be a hassle, but Playhost makes it easy. The control panel is user-friendly, and I love how they handle server maintenance and updates."`,
      stars: 5
    },
    {
      name: "Jake M.",
      image: "assets/images/people/3.jpg",
      text: `"I've tried several hosting providers in the past, and Playhost is by far the best. Their server performance is top-notch, and I've never experienced lag while playing with friends."`,
      stars: 5
    },
    {
      name: "Alex P.",
      image: "assets/images/people/4.jpg",
      text: `"As a new server owner, I was worried about setup and configuration, but Playhost made it a breeze. They have detailed tutorials and helpful support, which made the process smooth."`,
      stars: 5
    },
    {
      name: "Edward B.",
      image: "assets/images/people/6.jpg",
      text: `"I've been a loyal customer of Playhost for years now. Their dedication to keeping their hardware up-to-date ensures my gaming experience is always optimal."`,
      stars: 5
    },
    {
      name: "Daniel H.",
      image: "assets/images/people/7.jpg",
      text: `"When our community needed a reliable server for our esports tournaments, we turned to Playhost, and they've never let us down. Their servers are perfect for competitive gaming."`,
      stars: 5
    },
    {
      name: "Bryan G.",
      image: "assets/images/people/8.jpg",
      text: `"The DDoS protection from Playhost is a lifesaver. We used to get attacked regularly, but since switching to their servers, we haven't had any downtime."`,
      stars: 5
    }
  ];
}
