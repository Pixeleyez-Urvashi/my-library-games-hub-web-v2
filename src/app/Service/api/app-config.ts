import { Injectable } from '@angular/core';

/**
 * This is a singleton class
 */
@Injectable()
export class AppConfig {
  public version = '1.0.0';
  public locale = 'pt-BR';
  public currencyFormat = { style: 'currency', currency: 'BRL' };
  public dateFormat = { year: 'numeric', month: 'numeric', day: 'numeric' };

  // API Related configs
  public apiPort = '8080';
  public apiProtocol: string;
  public apiHostName: string;
  public baseApiPath: string;

  constructor() {
    this.apiProtocol = window.location.protocol;
    this.apiHostName = window.location.hostname;
    if (this.apiPort === undefined) {
      this.apiPort = window.location.port;
    }
    if (this.apiHostName.includes('infomud') || this.apiHostName.includes('heroku') || this.apiHostName.includes('mylibrarygameshub')) {
      this.baseApiPath = this.apiProtocol + '//' + this.apiHostName + '/';
    } else {
      this.baseApiPath = this.apiProtocol + '//' + this.apiHostName + ':' + this.apiPort + '/';
    }
    if (this.locale === undefined) {
      this.locale = navigator.language;
    }
  }
}
