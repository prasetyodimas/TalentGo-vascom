import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: 'img[appImgSrc]'
})
export class ImgSrcDirective implements OnInit {
  @Input('appImgSrc') appImgSrc!: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const img = this.el.nativeElement;
    if (this.appImgSrc) {
      img.src = this.appImgSrc;
    }
  }
}
