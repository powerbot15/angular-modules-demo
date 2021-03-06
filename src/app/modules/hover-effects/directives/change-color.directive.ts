import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverColor]'
})
export class ChangeColorDirective {

  @Input() appHoverColor: string;

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.transition = 'color 0.3s linear 0s';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHoverColor || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }

}
