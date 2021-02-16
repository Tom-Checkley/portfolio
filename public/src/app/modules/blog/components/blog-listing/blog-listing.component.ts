import { Component, OnInit } from '@angular/core';
import { GetPostsService } from '../../services/get-posts.service';

@Component({
	selector: 'app-blog-listing',
	templateUrl: './blog-listing.component.html',
	styleUrls: ['./blog-listing.component.scss'],
})
export class BlogListingComponent implements OnInit {
    posts: any;

	constructor(private getPostsService: GetPostsService) {}

    ngOnInit(): void {
        this.getPostsService.getPostsList()
            .subscribe(data => {                
                this.posts = data.data.posts;
            })
    }

}
