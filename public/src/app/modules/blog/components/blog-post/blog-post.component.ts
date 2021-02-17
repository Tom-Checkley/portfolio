import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { GetBlogPostService } from '../../services/get-blog-post.service';

@Component({
	selector: 'app-blog-post',
	templateUrl: './blog-post.component.html',
	styleUrls: ['./blog-post.component.scss'],
})
export class BlogPostComponent implements OnInit {

	post: any;

	constructor(
        private getPostService: GetBlogPostService,
        private route: ActivatedRoute
    ) {}

	ngOnInit(): void {
        this.getPostService.getPost(this.route.snapshot.paramMap.get('id'))
            .subscribe(res => {
                this.post = res.data.post;
            })
    }
}
