import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private appConfig: any;

  constructor(private http: HttpClient) { }

  /**
   * Загрузка файла конфигурации
   *
   * @return {*} 
   * @memberof AppConfigService
   */
  loadAppConfig() {
    return this.http.get('/assets/app.config.json')
      .toPromise()
      .then(data => {
        this.appConfig = data;
      });
  }

  /**
   *  Адрес сервиса
   *
   * @readonly
   * @memberof AppConfigService
   */
  get apiBaseUrl(): string {
    return this.appConfig.apiBaseUrl;
  }

  /**
   * Относительный адрес сендпоинта с новостями
   *
   * @readonly
   * @type {string}
   * @memberof AppConfigService
   */
  get newsPath(): string {
    return this.appConfig?.newsPath;
  }

  /**
   * Access Key
   *
   * @readonly
   * @type {string}
   * @memberof AppConfigService
   */
  get accessKey(): string {
    return this.appConfig?.accessKey;
  }

  /**
   * Язык новостей
   *
   * @readonly
   * @type {string}
   * @memberof AppConfigService
   */
  get languages(): string {
    return this.appConfig?.newsLanguages
  }

  get excerptLength(): string {
    return this.appConfig.excerptLength;
  }
}
