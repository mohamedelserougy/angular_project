import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class Color {

  constructor(private el : ElementRef) {
   }


   @HostListener ("mouseover") onMouseover(){
    this.el.nativeElement.style.border = "10px solid red"
   }
   @HostListener ("mouseleave") mouseleave(){
    this.el.nativeElement.style.border  = ".125rem solid white"
   }

}
