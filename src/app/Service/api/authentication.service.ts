import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../../models/user-model';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUserProfile: UserModel = new UserModel();

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  authenticate(username: string) {
    localStorage.setItem('authenticaterUser', username);
    if (localStorage.getItem('authenticaterUser') !== undefined) {
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = localStorage.getItem('authenticaterUser')
    return !(user === null)
  }

  logout() {
    localStorage.removeItem('authenticaterUser')
    localStorage.removeItem('token')
    this.router.navigate(['/login']);
  }

  async getCurrentUserLogged(): Promise<string> {
    try {
      const data = await this.usuarioService.getUsuarioCorrente().toPromise();
      this.currentUserProfile = data;
      return data?.role ?? ''; // supondo que o campo da role seja 'role'
    } catch (error) {
      return '';
    }
  }

  async hasRole(role: string): Promise<boolean> {
    const userRole = await this.getCurrentUserLogged();
    return userRole === role;
  }

}
