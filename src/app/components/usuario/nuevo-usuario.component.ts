import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-usuario',
  template: `
    <p>
      nuevo-usuario works!
    </p>
  `,
  styles: []
})
export class NuevoUsuarioComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute) {

    this._activatedRoute.parent.params.subscribe((parametros) => {
      console.log('RUTA HIJA');
      console.log('USUARIO NUEVO');
      console.log(parametros);
    });

  }

  ngOnInit() {
  }

}
