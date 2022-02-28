import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ng-author',
  templateUrl: './author.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AuthorComponent {
  @Input() public read: string;
  @Input() public imgSrc: string;
  @Input() public date: string;
  @Input() public author: string;

  constructor() {}
}
