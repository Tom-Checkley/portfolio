import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { GetCategoriesService } from '../../services/get-categories.service';

@Component({
	selector: 'app-category-posts',
	templateUrl: './category-posts.component.html',
	styleUrls: ['./category-posts.component.scss'],
})
export class CategoryPostsComponent implements OnInit {
	posts: any[];
	category: string;
    urlSlug: string;

	constructor(
        private getCategoriesService: GetCategoriesService,
        private route: ActivatedRoute
    ) {}

	ngOnInit(): void {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.urlSlug = params.get('urlSlug');
            this.getCategoriesService.getCategoryPosts(this.urlSlug)
                .subscribe(res => {
                    this.category = res.data.categories[0].name;
                    this.posts = res.data.categories[0].posts;
                })
        })
    }
}
