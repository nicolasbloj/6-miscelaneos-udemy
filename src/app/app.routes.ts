import { RouterModule, Routes } from '@angular/router';

import { EditarUsuarioComponent } from './components/usuario/editar-usuario.component';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { NuevoUsuarioComponent } from './components/usuario/nuevo-usuario.component';
import { DetallarUsuarioComponent } from './components/usuario/detallar-usuario.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'usuario/:id', component: UsuarioComponent,
        children: [
            { path: 'nuevo', component: NuevoUsuarioComponent },
            { path: 'editar', component: EditarUsuarioComponent },
            { path: 'detallar', component: DetallarUsuarioComponent },
            { path: '**', pathMatch: 'full', redirectTo: 'nuevo' }
        ]
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
    // Si no puede machear ninguna de las anteriores
];

// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true}); // soporte parametros, mas navegadores webs

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
//   necesario <base href="/"> en index
