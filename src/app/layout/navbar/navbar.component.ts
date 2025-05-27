import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BtnMainHoverDirective } from '../../Service/btn-main-hover.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, BtnMainHoverDirective],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy {
  headerClass: string = 'transparent';
  isMobileMenuOpen: boolean = false;
  activeMenuItems: { [key: string]: boolean } = {};

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.updateHeaderClass(scrollPosition);
  }

  @HostListener('window:resize', [])
  onWindowResize(): void {
    // Close mobile menu when window is resized to desktop
    if (window.innerWidth > 768) {
      this.isMobileMenuOpen = false;
      this.activeMenuItems = {};
      // Remove body scroll lock when resizing to desktop
      document.body.classList.remove('mobile-menu-open');
    }
    // Update header class based on screen size
    this.updateHeaderClass();
  }

  toggleMobileMenu(): void {
    if (this.isMobileScreen()) {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      
      // Lock/unlock body scroll when menu is toggled
      if (this.isMobileMenuOpen) {
        document.body.classList.add('mobile-menu-open');
      } else {
        document.body.classList.remove('mobile-menu-open');
        // Close all submenu items when main menu closes
        this.activeMenuItems = {
          'home': false,
          'gameServers': false,
          'games': false,
          'support': false,
          'company': false,
          'morePages': false
        };
      }
      
      // Update header class when menu is toggled
      this.updateHeaderClass();
    }
  }

  toggleMenuItem(menuItem: string): void {
    if (this.isMobileScreen()) {
      this.activeMenuItems[menuItem] = !this.activeMenuItems[menuItem];
    }
  }

  isMobileScreen(): boolean {
    return window.innerWidth <= 768;
  }

  isMenuItemActive(menuItem: string): boolean {
    return this.isMobileScreen() && (this.activeMenuItems[menuItem] || false);
  }

  // Helper method to get menu height - returns 0 when closed, specific height when open
  getMenuHeight(menuItem: string, openHeight: string): string {
    if (this.isMobileScreen() && this.isMenuItemActive(menuItem)) {
      return openHeight;
    }
    return this.isMobileScreen() ? '0px' : 'auto';
  }

  // Get dynamic header height based on mobile menu state
  getHeaderHeight(): string {
    if (this.isMobileScreen()) {
      return this.isMobileMenuOpen ? '100vh' : 'auto';
    }
    return 'auto';
  }

  // Get dynamic header classes including mobile menu state
  getHeaderClasses(): string {
    let classes = this.headerClass;
    
    if (this.isMobileScreen() && this.isMobileMenuOpen) {
      classes += ' mobile-menu-open';
    }
    
    return classes;
  }

  updateHeaderClass(scrollPosition?: number): void {
    const currentScrollPosition = scrollPosition ?? 
      (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);

    let baseClass = 'transparent';

    // Only add mobile classes when it's actually mobile screen
    if (this.isMobileScreen()) {
      baseClass += ' header-mobile clone';
    }

    // Add 'smaller' if the scroll position is more than 50px
    if (currentScrollPosition > 50) {
      this.headerClass = baseClass + ' smaller';
    } else {
      this.headerClass = baseClass;
    }
  }

  ngOnInit(): void {
    this.updateHeaderClass();
    // Initialize all menu items as closed
    this.activeMenuItems = {
      'home': false,
      'gameServers': false,
      'games': false,
      'support': false,
      'company': false,
      'morePages': false
    };
  }

  ngOnDestroy(): void {
    // Cleanup: Remove body scroll lock when component is destroyed
    document.body.classList.remove('mobile-menu-open');
  }
}
