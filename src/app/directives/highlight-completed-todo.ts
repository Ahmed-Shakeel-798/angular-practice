import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
})
export class HighlightCompletedTodo {

  @Input() appHighlightCompletedTodo = false;

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    if (this.appHighlightCompletedTodo) {
      this.el.nativeElement.style.backgroundColor = '#d4edda';
    } else {
      this.el.nativeElement.style.backgroundColor = '';
    }
  }

}
