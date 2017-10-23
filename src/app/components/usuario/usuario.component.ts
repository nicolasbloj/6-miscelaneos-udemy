import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute) {

    this._activatedRoute.params.subscribe((parametros) => {
      console.log('RUTA PADRE');
      console.log(parametros);
    });

  }

  ngOnInit() {
  }

}
