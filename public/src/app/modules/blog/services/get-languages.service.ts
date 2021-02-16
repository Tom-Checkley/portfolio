import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import LANGUAGES_QUERY from 'src/app/apollo/queries/language/languages';
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
}
