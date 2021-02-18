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
    id: string;

  constructor(
    private getLanguagesService: GetLanguagesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
        this.id = params.get('id');
        this.getLanguagesService.getLanguagePosts(this.id)
            .subscribe(res => {
                this.language = res.data.language.name;
                this.posts = res.data.language.posts;
            })
    })
  }

}
