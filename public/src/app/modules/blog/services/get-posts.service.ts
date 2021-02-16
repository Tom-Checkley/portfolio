import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import BLOG_LIST_QUERY from 'src/app/apollo/queries/blog-posts/blog-posts';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetPostsService {
  posts: Observable<any>;

  constructor(private apollo: Apollo) {}

  getPostsList(): Observable<any> {
		return this.apollo
			.watchQuery<any>({
				query: BLOG_LIST_QUERY
			})
			.valueChanges;
    
	}
}
