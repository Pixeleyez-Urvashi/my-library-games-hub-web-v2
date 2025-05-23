import AOS from 'aos';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { jarallax } from 'jarallax';
import { BtnMainHoverDirective } from '../../../Service/btn-main-hover.directive';

@Component({
    selector: 'app-faq',
    imports: [CommonModule, BtnMainHoverDirective],
    templateUrl: './faq.component.html',
    styleUrl: './faq.component.css'
})
export class FaqComponent {
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
  accordionsLeft = [
    { title: 'What is game hosting?', content: 'Game hosting refers to the process of renting or setting up servers to run multiplayer online games. These servers allow players to connect and play together in the same game world.' },
    { title: 'Why do I need game hosting?', content: 'Game hosting is essential for multiplayer gaming. It provides a dedicated server where players can join, ensuring a smooth and lag-free gaming experience. It also allows you to customize game settings and mods.' },
    { title: 'How do I choose a game hosting provider?', content: 'Consider factors like server location, performance, scalability, customer support, and price when choosing a game hosting provider. Read reviews and ask for recommendations from fellow gamers.' },
    {
      title: 'What types of games can I host?',
      content:
        'You can host various types of games, including first-person shooters, role-playing games, survival games, strategy games, and more. The type of game hosting you need depends on the game\'s requirements.',
    },
    { title: 'What is server latency or ping?', content: 'Server latency or ping measures the time it takes for data to travel between your computer and the game server. Lower ping values indicate better responsiveness and less lag.' },
  ];

  // Accordions data for the right column
  accordionsRight = [
    { title: 'How do I manage a game server?', content: 'Game server management varies depending on the hosting provider and game type. Typically, you\'ll have access to a control panel or command-line interface to configure settings, mods, and player access.' },
    { title: 'Can I run mods on my game server?', content: 'Yes, many game hosting providers support mods. You can install and manage mods to enhance gameplay or customize the game to your liking.' },
    { title: 'What is DDoS protection, and do I need it?', content: 'DDoS (Distributed Denial of Service) protection helps defend your game server from malicious attacks that could disrupt gameplay. It\'s essential for maintaining server stability, especially for popular games.' },
    { title: 'How much does game hosting cost?', content: 'Game hosting costs vary depending on the provider, server type, and game. Prices can range from a few dollars per month for small servers to hundreds for high-performance dedicated servers.' },
    { title: 'Is there 24/7 customer support?', content: 'Many reputable game hosting providers offer 24/7 customer support to assist with technical issues and server management' },
  ];

  // Track active accordion for each column
  activeAccordion: number | null = null;
  activeAccordionRight: number | null = null;

  // Toggle accordion for the left column
  toggleAccordion(index: number): void {
    this.activeAccordion = this.activeAccordion === index ? null : index;
  }

  // Toggle accordion for the right column
  toggleAccordionRight(index: number): void {
    this.activeAccordionRight = this.activeAccordionRight === index ? null : index;
  }
}
