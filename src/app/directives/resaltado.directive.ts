import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  // tslint:disable-next-line:no-input-rename
  @Input('appResaltado') nuevoColor: string;

  constructor(private _el: ElementRef) {
    console.log('directiva inicializada');
    _el.nativeElement.style.backgroundColor = 'blue';
  }
  // directivas se aplican sobre tags html, pipes sobre variables angular.

  @HostListener('mouseenter')
  mouseEntro() {
    this.restaltar(this.nuevoColor || 'yellow');
  }

  @HostListener('mouseleave')
  mouseSalio() {
    this.restaltar(null);
  }

  private restaltar(color: string) {
    this._el.nativeElement.style.backgroundColor = color;
  }

}
