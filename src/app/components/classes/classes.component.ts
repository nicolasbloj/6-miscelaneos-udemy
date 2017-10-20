import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html'
})
export class ClassesComponent implements OnInit {

  alerta = 'alert-danger';
  loading = false;

  propiedades: Object = {
    danger: false
  };

  constructor() { }

  ngOnInit() {
  }

  ejecutar(): void {
    this.loading = true;
    setTimeout(() => this.loading = false , 3000);
  }

}
