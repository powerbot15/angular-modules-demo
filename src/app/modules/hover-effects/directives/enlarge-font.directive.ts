import {Directive, HostListener, ElementRef, AfterViewInit, Input} from '@angular/core';

@Directive({
  selector: '[appEnlargeFont]'
})
export class EnlargeFontDirective implements AfterViewInit {

  @Input() appEnlargeFont: string;

  private defaultSize: string;

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.transition = 'font-size 0.3s linear 0s';
  }

  ngAfterViewInit() {
    this.defaultSize = window.getComputedStyle(this.el.nativeElement).fontSize;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.enlarge(this.appEnlargeFont);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.enlarge();
  }

  private enlarge(size?: string) {
    this.el.nativeElement.style.fontSize = `${size ? size : this.defaultSize}`;
  }
}
