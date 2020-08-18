import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appItalic]'
})
export class ItalicDirective implements OnInit {

  @Input() setStyle = 'blue';
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // way 1
    this.elementRef.nativeElement.style.fontStyle = 'italic';
    // way 2
    const { nativeElement } = this.elementRef;
    this.renderer.setStyle(nativeElement, 'font-weight', 'bold');
    // way 3
    this.renderer.setStyle(nativeElement, 'color', this.setStyle);
  }

}
