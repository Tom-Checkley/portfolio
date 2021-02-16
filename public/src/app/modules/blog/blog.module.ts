import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogListingComponent } from './components/blog-listing/blog-listing.component';
import { BlogFilterComponent } from './components/blog-filter/blog-filter.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { PostContentDirective } from './directives/post-content.directive';


@NgModule({
  declarations: [
    BlogComponent,
    BlogListingComponent,
    BlogFilterComponent,
    BlogPostComponent,
    PostContentDirective
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
  ]
})
export class BlogModule { }
