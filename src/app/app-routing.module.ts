import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from './news/components/news-list/news-list.component';
import { NewsPostComponent } from './news/components/news-post/news-post.component';

const routes: Routes = [
  { path: '', redirectTo: 'news-list', pathMatch: 'full' },
  { path: 'news-list', component: NewsListComponent },
  { path: 'news', component: NewsPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
