import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `

  <p [ngStyle] = "{ 'font-size' : styleExp1 + 'px' }" >
    Hola mundo ... Esta es una etiqueta html.
  </p>
  <button class='btn btn-primary' (click)="styleExp1 = styleExp1 - 5 ">
  <i class="fa fa-minus"> </i>
 </button>

 <br>

 <p [style.fontSize.px] = "styleExp2" >
 Hola mundo ... Esta es una etiqueta html.
 </p>

 <button class='btn btn-primary' (click)="styleExp2 = styleExp2 + 5">
  <i class="fa fa-plus"> </i>
 </button>

 <button class='btn btn-primary' (click)="styleExp2 = styleExp2 - 5 ">
 <i class="fa fa-minus"> </i>
</button>

 `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  styleExp1 = 50;
  styleExp2 = 25;

  constructor() { }

  ngOnInit() {
  }

}
