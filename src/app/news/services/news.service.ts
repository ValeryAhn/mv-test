import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { withCache } from '@ngneat/cashew';
import { catchError, Observable, of } from 'rxjs';
import { AppConfigService } from 'src/app/app-config.service';
import { NewsResponse } from '../models/news-response.model';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(
    private appConfig: AppConfigService,
    private httpClient: HttpClient
  ) {}

 /**
  * Получение новостей
   * Method: GET
  *
  * @param {number} [page=0]
  * @return {*}  {Observable<NewsResponse>}
  * @memberof NewsService
  */
 getNews(page = 0 ): Observable<NewsResponse> {
    const baseUrl = this.appConfig.apiBaseUrl;
    const newsPath = this.appConfig.newsPath;
    const apiKey = this.appConfig.accessKey;
    const language = this.appConfig.languages;

    const url = `${baseUrl}/${newsPath}`;
    return this.httpClient.get<NewsResponse>(url, {
      context: withCache(),
      params: {
        apiKey,
        page,
        language
      },
    }).pipe(
      catchError((error: any): Observable<any> => {
       alert('An error occurred while loading news');
        return of(null);
      })
    );
  }
}
