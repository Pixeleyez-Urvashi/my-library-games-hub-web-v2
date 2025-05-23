import { Component } from '@angular/core';
import { jarallax } from 'jarallax';
import { BtnMainHoverDirective } from '../../../Service/btn-main-hover.directive';
import { Title } from '@angular/platform-browser';
import { BasicAuthenticationService } from '../../../Service/api/basic-authentication.service';
import { AuthenticationService } from '../../../Service/api/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [BtnMainHoverDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private basicAuthenticationService: BasicAuthenticationService,
    private router: Router,
    private title: Title,
    private authService: AuthenticationService) { }

  ngOnInit(): void {
    const elements = document.querySelectorAll('.jarallax');
    const options = {
      speed: 0.5,
    };
    jarallax(elements, options);
  }

  handleJWTAuthLogin() {
    localStorage.removeItem("authenticaterUser");
    this.basicAuthenticationService.executeJWTAuthenticationService("docandid", 'sabao').subscribe(
      {
        next: data => {
          console.log('Autenticado com sucesso', data);
          // redirecionar, etc.
        },
        error: err => {
          console.error('Erro ao autenticar', err);
        }
      });
  }
}
