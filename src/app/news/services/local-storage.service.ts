import { Injectable } from '@angular/core';
import { NewsModule } from '../news.module';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  /**
   * Сохранение в локалсторадж
   *
   * @param {string} key
   * @param {string} value
   * @memberof LocalStorageService
   */
  saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  /**
   * Получение из локалсторадж
   *
   * @param {string} key
   * @return {*} 
   * @memberof LocalStorageService
   */
  getData(key: string) {
    return localStorage.getItem(key)
  }

  /**
   * Удаление из локалсторадж
   *
   * @param {string} key
   * @memberof LocalStorageService
   */
  removeData(key: string) {
    localStorage.removeItem(key);
  }

  /**
   * Очистка
   *
   * @memberof LocalStorageService
   */
  clearData() {
    localStorage.clear();
  }
}
