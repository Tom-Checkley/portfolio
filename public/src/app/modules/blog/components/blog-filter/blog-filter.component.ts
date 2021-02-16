import { Component, OnInit } from '@angular/core';
import { GetLanguagesService } from '../../services/get-languages.service';
import { GetCategoriesService } from '../../services/get-categories.service';
import { Category } from 'src/app/interfaces/category';
import { Language } from 'src/app/interfaces/language';

@Component({
  selector: 'app-blog-filter',
  templateUrl: './blog-filter.component.html',
  styleUrls: ['./blog-filter.component.scss']
})
export class BlogFilterComponent implements OnInit {
  categories: Category[];
  languages: Language[];

constructor(
      private getCategoriesService: GetCategoriesService,
      private getLanguagesService: GetLanguagesService
  ) {}

ngOnInit(): void {
      this.getCategoriesService.getCategories()
          .subscribe(data => {
              this.categories = data.data.categories;
          });
      
      this.getLanguagesService.getLanguages()
          .subscribe(data => {
              this.languages = data.data.languages;
          });
  
}
  ngOnDestroy() {
      // this.queryCategories.unsubscribe();
      // this.queryLanguages.unsubscribe();
  }

}
