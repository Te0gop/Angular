import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  exportAs: 'appHighlight'
})
export class HighlightDirective implements OnChanges {

  @HostBinding('class.is-highlighted') get isHighlighted() {
    return this.appHighlight;
  }

  @Input() color = 'green';

  @Input() appHighlight = false;

  @HostListener('mouseenter', ['$event']) onMouseListener(e: any) {
    if(this.appHighlight) { return; }
    this.appHighlight = !this.appHighlight; 
    this.highlight();
  }

  @HostListener('mouseleave') onMouseLeave() {
    if(!this.appHighlight) { return; }
    this.appHighlight = !this.appHighlight; 
    this.highlight();
  }

  constructor(
    private render: Renderer2,
    private elementRef: ElementRef) { }

  highlight() {
    this.render.setStyle(
      this.elementRef.nativeElement, 'backgroundColor', this.appHighlight ? this.color : 'inherit'
    )
  }

  ngOnChanges(): void {
    this.highlight();
  }
}
