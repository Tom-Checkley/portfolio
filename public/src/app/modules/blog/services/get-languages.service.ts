import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import LANGUAGES_QUERY from 'src/app/apollo/queries/language/languages';
import LANGUAGE_POSTS_QUERY from 'src/app/apollo/queries/language/language-posts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetLanguagesService {

  constructor(private apollo: Apollo) {}

  getLanguages(): Observable<any> {

		return this.apollo
			.watchQuery<any>({
				query: LANGUAGES_QUERY
			})
			.valueChanges;
	}

    getLanguagePosts(urlSlug: string): Observable<any> {
        return this.apollo
            .watchQuery<any>({
                query: LANGUAGE_POSTS_QUERY,
                variables: {
                    urlSlug: urlSlug
                }
            })
            .valueChanges;
    }
}
