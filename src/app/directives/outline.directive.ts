import { Directive, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOutline]'
})
export class OutlineDirective implements OnInit {
  @Input() date: string;
  constructor(private el: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit() {
    if (this.date !== '2019') {
      this.renderer.setStyle(this.el.nativeElement, 'border', '10px solid orange');
      this.renderer.setStyle(this.el.nativeElement, 'background', 'gray');
    }
  }

}
