import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News, NewsData } from '../../models/news-response.model';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'mv-news',
  templateUrl: './news-post.component.html',
  styleUrls: ['./news-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsPostComponent {
  /**
   * Новость
   *
   * @type {News}
   * @memberof NewsPostComponent
   */
  news: News;

  pageIndex: number;

  /**
   * Creates an instance of NewsPostComponent.
   * @param {Router} router
   * @param {LocalStorageService} localStorage
   * @memberof NewsPostComponent
   */
  constructor(
    private router: Router,
    private localStorage: LocalStorageService
  ) {
    const newsData = this.router.getCurrentNavigation()?.extras
      .state as NewsData;
    this.news = newsData?.news || {};

    // При обновлении страницы подгружаем из локалстораджа, так как нельзя получить новость
    if (this.news) {
      this.localStorage.saveData('news', JSON.stringify(this.news));
    } else {
      const localStorageNews = this.localStorage.getData('news');
      this.news = localStorageNews ? JSON.parse(localStorageNews) : null;
    }

    this.pageIndex = newsData?.pageIndex || 0;
  }
}
