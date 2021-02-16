import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPostContent]'
})
export class PostContentDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
