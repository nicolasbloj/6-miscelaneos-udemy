import { Routes } from '@angular/router';

import { DetallarUsuarioComponent } from './detallar-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario.component';
import { NuevoUsuarioComponent } from './nuevo-usuario.component';


export const USUARIO_ROUTES: Routes = [
    { path: 'nuevo', component: NuevoUsuarioComponent },
    { path: 'editar', component: EditarUsuarioComponent },
    { path: 'detallar', component: DetallarUsuarioComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'editar' }
];
