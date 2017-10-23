import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { ClassesComponent } from './components/classes/classes.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTING } from './app.routes';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { NuevoUsuarioComponent } from './components/usuario/nuevo-usuario.component';
import { EditarUsuarioComponent } from './components/usuario/editar-usuario.component';
import { DetallarUsuarioComponent } from './components/usuario/detallar-usuario.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    ClassesComponent,
    ResaltadoDirective,
    NgSwitchComponent,
    HomeComponent,
    UsuarioComponent,
    NuevoUsuarioComponent,
    EditarUsuarioComponent,
    DetallarUsuarioComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
