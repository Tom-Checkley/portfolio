import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import { BlogListingComponent } from './blog-listing/blog-listing.component';

const routes: Routes = [
  {
    path: '', 
    component: BlogComponent,
    children: [
      { path: '', component: BlogListingComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
