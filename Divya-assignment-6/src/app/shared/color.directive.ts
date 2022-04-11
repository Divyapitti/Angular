import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private elementref:ElementRef) { }

  private changeColor(color:string,tcolor:string){
    this.elementref.nativeElement.style.backgroundColor = color;
    this.elementref.nativeElement.style.color = tcolor;
  }

  @HostListener('mouseover') applyMouseOver(){
    this.changeColor('grey','white');
  }

  @HostListener('mouseleave') applyMouseLeave(){
    this.changeColor('white','black');
  }

}
