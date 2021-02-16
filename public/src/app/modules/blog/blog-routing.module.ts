import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import { BlogListingComponent } from './components/blog-listing/blog-listing.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';

const routes: Routes = [
  {
    path: '', 
    component: BlogComponent,
    children: [
      { path: ':id', component: BlogPostComponent },
      { path: '', component: BlogListingComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }