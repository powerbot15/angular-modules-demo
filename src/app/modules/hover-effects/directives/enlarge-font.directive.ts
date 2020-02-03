import {Directive, HostListener, ElementRef, AfterViewInit, Input} from '@angular/core';

@Directive({
  selector: '[appEnlargeFont]'
})
export class EnlargeFontDirective implements AfterViewInit {

  @Input() appEnlargeFont: string;

  private defaultSize: string;

  constructor(private el: ElementRef) {
    console.log('second created');
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
