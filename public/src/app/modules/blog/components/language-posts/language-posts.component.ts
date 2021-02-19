import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { GetLanguagesService } from '../../services/get-languages.service';

@Component({
  selector: 'app-language-posts',
  templateUrl: './language-posts.component.html',
  styleUrls: ['./language-posts.component.scss']
})
export class LanguagePostsComponent implements OnInit {
    posts: any[];
    language: string;
    urlSlug: string;

  constructor(
    private getLanguagesService: GetLanguagesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
        this.urlSlug = params.get('urlSlug');
        this.getLanguagesService.getLanguagePosts(this.urlSlug)
            .subscribe(res => {
                this.language = res.data.languages[0].name;
                this.posts = res.data.languages[0].posts;
            })
    })
  }

}
