import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import BLOG_QUERY from 'src/app/apollo/queries/blog-post/blog-post';

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
            .valueChanges;
    
	}
}
