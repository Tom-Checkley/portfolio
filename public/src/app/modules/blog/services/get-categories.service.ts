import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import CATEGORIES_QUERY from 'src/app/apollo/queries/category/categories';
import CATEGORY_POSTS_QUERY from 'src/app/apollo/queries/category/category-posts';
import { Observable } from 'rxjs';


@Injectable({
	providedIn: 'root',
})
export class GetCategoriesService  {

	constructor(
		private apollo: Apollo
	) {}

	getCategories(): Observable<any> {

		return this.apollo
			.watchQuery<any>({
				query: CATEGORIES_QUERY
			})
			.valueChanges;
	}

	getCategoryPosts(id: string): Observable<any> {
		return this.apollo
			.watchQuery<any>({
				query: CATEGORY_POSTS_QUERY,
				variables: {
					id: id
				}
			})
			.valueChanges;
	}
}
