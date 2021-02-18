import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogListingComponent } from './components/blog-listing/blog-listing.component';
import { BlogFilterComponent } from './components/blog-filter/blog-filter.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { PostContentDirective } from './directives/post-content.directive';
import { BlogPostBodyComponent } from './components/post-partials/blog-post-body/blog-post-body.component';
import { PartialTextComponent } from './components/post-partials/partial-text/partial-text.component';
import { PartialCodeComponent } from './components/post-partials/partial-code/partial-code.component';
import { PartialTwoColMediaComponent } from './components/post-partials/partial-two-col-media/partial-two-col-media.component';
import { PartialTwoColTextComponent } from './components/post-partials/partial-two-col-text/partial-two-col-text.component';
import { PartialMediaComponent } from './components/post-partials/partial-media/partial-media.component';
import { MarkdownModule } from 'ngx-markdown';
import { CategoryPostsComponent } from './components/category-posts/category-posts.component';
import { LanguagePostsComponent } from './components/language-posts/language-posts.component';


@NgModule({
  declarations: [
    BlogComponent,
    BlogListingComponent,
    BlogFilterComponent,
    BlogPostComponent,
    PostContentDirective,
    BlogPostBodyComponent,
    PartialTextComponent,
    PartialCodeComponent,
    PartialTwoColMediaComponent,
    PartialTwoColTextComponent,
    PartialMediaComponent,
    CategoryPostsComponent,
    LanguagePostsComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MarkdownModule.forRoot()
  ]
})
export class BlogModule { }
