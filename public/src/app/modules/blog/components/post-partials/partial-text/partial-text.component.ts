import { Component, OnInit } from '@angular/core';
import { SectionComponent } from '../../../../../interfaces/partial-views/section-component';

@Component({
  selector: 'app-partial-text',
  templateUrl: './partial-text.component.html',
  styleUrls: ['./partial-text.component.scss']
})
export class PartialTextComponent extends SectionComponent implements OnInit {

  constructor() {
    super()
  }

  ngOnInit(): void {
  }

}
