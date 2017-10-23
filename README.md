# Miscelaneos

*****RUTAS HIJAS

Pasar parametro de componente hijo a componente padre.

1. Conozco dos formas, una que implica emitir desde el hijo un evento, y que el padre este escuchando para ejecutar algo.

2. La segunda es inyectar el padre en el hijo, para poder llamar métodos del padre.

Es bastante simple la segunda forma:

1. Realizar el import del componente del padre en el componente hijo

import { UsuarioComponent } from "./usuario.component"; 

2. Inyectarlo en el constructor

constructor( private usuarioComponent: UsuarioComponent ){ } 

3. Te creas algún método que llame esta función por ejemplo:

enviarParametro(){
 
    this.usuarioComponent.datosDelHijo('hola');  // Tu parametro, puede ser objetos o lo que sea
 
}




*****CICLO DE VIDA

Antes que todo se ejecuta el constructor .

ngOnInit
Se dispara tambien despues del primer ngOnChanges

ngIf --> dispara ngOnDestroy

Con ngOnDestroy podemos des subscribirnos de algun observador pendiente de cambio .

---onChanges---

ngOnChanges is not called every time a component property changes internally. It gets called when the databinding from the parent component pushes a new value into the child component. So if your parent component has

<child-comp [name]="parentValue"></child-comp>
When parentValue changes, the child component's @Input() name will change and that will trigger ngOnChanges

Take a look at the docs:

ngOnChanges

Respond when Angular (re)sets data-bound input properties...Called before ngOnInit() and whenever one or more data-bound input properties change.
To be notified when your form inputs change, in the long run the best approach is to learn Reactive Forms because they make you create the FormControl objects in your component and expose a very simple observable that emits every time the form value changes.

