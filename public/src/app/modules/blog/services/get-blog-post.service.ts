import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import BLOG_QUERY from 'src/app/apollo/queries/blog-post/blog-post';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetBlogPostService {

  constructor(private apollo: Apollo) {}

  getPost(id: string): Observable<any> {
		return this.apollo
			.watchQuery<any>({
				query: BLOG_QUERY,
        variables: {
          id: id
        }
			})
			.valueChanges
    
	}
}
