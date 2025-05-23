import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BtnMainHoverDirective } from '../../Service/btn-main-hover.directive';

@Component({
    selector: 'app-navbar',
    imports: [CommonModule, RouterLink, BtnMainHoverDirective],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  headerClass: string = 'transparent';

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Add 'clone smaller' if the scroll position is more than 50px (adjust as needed)
    if (scrollPosition > 50) {
      this.headerClass = 'transparent clone smaller';
    } else {
      this.headerClass = 'transparent';
    }
  }
}
