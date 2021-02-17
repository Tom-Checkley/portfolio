import { Component, OnInit } from '@angular/core';
import { SectionComponent } from '../../../../../interfaces/partial-views/section-component';

@Component({
  selector: 'app-partial-code',
  templateUrl: './partial-code.component.html',
  styleUrls: ['./partial-code.component.scss']
})
export class PartialCodeComponent extends SectionComponent implements OnInit {

  constructor() {
    super()
  }

  ngOnInit(): void {
  }

}
