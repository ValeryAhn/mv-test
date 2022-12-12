import { ChangeDetectionStrategy, Input, Output } from '@angular/core';
import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NewsData, NewsResponse } from '../../models/news-response.model';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'mv-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsListComponent {
  /**
   * Количeство записей для пагинации
   *
   * @memberof NewsListComponent
   */
  pageSize = 10;

  /**
   * Номер текущей страницы
   *
   * @memberof NewsListComponent
   */
  pageIndex = 0;

  /**
   * Суммарное количество записей
   *
   * @memberof NewsListComponent
   */
  length = 0;

  /**
   * Новости
   *
   * @type {Observable<NewsResponse>}
   * @memberof NewsListComponent
   */
  newsList$: Observable<NewsResponse>;

  hidePageSize = false;
  showPageSizeOptions = false;
  showFirstLastButtons = true;
  disabled = false;

  mode: ProgressSpinnerMode = 'indeterminate';

  /**
   * Обработчик нажатий на пагинацию
   *
   * @param {PageEvent} e
   * @memberof NewsListComponent
   */
  handlePageEvent(e: PageEvent) {
    this.length = e.length;
    this.pageIndex = e.pageIndex;
    this.newsList$ = this.newsService.getNews(this.pageIndex);
  }

  /**
   * Creates an instance of NewsListComponent.
   * @param {NewsService} newsService
   * @param {Router} router
   * @memberof NewsListComponent
   */
  constructor(private newsService: NewsService, private router: Router) {
    // При возврате переходить на последнюю открытую страницу
    const state = this.router.getCurrentNavigation()?.extras.state as NewsData;
    this.pageIndex = Number(state?.pageIndex) || 0;

    this.newsList$ = this.newsService.getNews(this.pageIndex);
  }
}
