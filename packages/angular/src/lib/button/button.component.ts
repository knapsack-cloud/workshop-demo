import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ap-ng-button',
  templateUrl: './button.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
  @Input() public disabled = false;
  @Input() public size: 's' | 'm' | 'l';
  @Input() text: string;
  @Input() public style: 'primary' | 'secondary';

  @Output() public readonly clickAction = new EventEmitter<
    MouseEvent | KeyboardEvent
  >();
  @Output() public readonly tabAction = new EventEmitter<KeyboardEvent>();

  constructor() {
    console.log(`btn here ()`);
  }

  public onClick(event: MouseEvent | KeyboardEvent) {
    if (this.disabled) return;
    console.log(`Button Text: ${this.text}`);
    this.clickAction.emit(event);
  }

  public onKeydown(event: KeyboardEvent) {
    if (event.key === 'Tab') {
      this.tabAction.emit(event);
    }
  }
}
