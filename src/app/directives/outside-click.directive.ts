import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output
} from '@angular/core';

@Directive({
  selector: '[outsideClick]'
})
export class OutsideClickDirective {
  constructor(private el: ElementRef) {}

  @Output() outsideClick = new EventEmitter();

  @HostListener('document:click', ['$event'])
  public onClick(event: MouseEvent) {
    const insideClicked = this.el.nativeElement.contains(event.target);
    if (!insideClicked) {
      this.outsideClick.emit();
    }
  }
}
