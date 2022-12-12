import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { AppConfigService } from 'src/app/app-config.service';
import { News, NewsResponse } from '../models/news-response.model';
import { NewsModule } from '../news.module';

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
   * @param {number} [limit=20]
   * @param {number} [offset=0]
   * @return {*}  {Observable<NewsResponse>}
   * @memberof NewsService
   */
  getNews(limit = 5, offset = 0 ): Observable<NewsResponse> {
    const baseUrl = this.appConfig.apiBaseUrl;
    const newsPath = this.appConfig.newsPath;
    const accessKey = this.appConfig.accessKey;
    const languages = this.appConfig.languages;

    const url = `${baseUrl}/${newsPath}`;
    return this.httpClient.get<NewsResponse>(url, {
      params: {
        access_key: accessKey,
        limit,
        offset,
        languages
      },
    }).pipe(
      catchError((error: any): Observable<any> => {
       alert('An error occurred while loading news');
        return of(null);
      })
    );
  }
}
