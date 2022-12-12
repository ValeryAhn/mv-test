import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './components/news-list/news-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NewsPostComponent } from './components/news-post/news-post.component';
import { RouterModule } from '@angular/router';
import { ExcerptPipe } from './pipes/excerpt.pipe';

@NgModule({
  declarations: [NewsListComponent, NewsPostComponent, ExcerptPipe],
  imports: [
    CommonModule,
    RouterModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
  exports: [NewsListComponent, NewsPostComponent],
})
export class NewsModule {}
