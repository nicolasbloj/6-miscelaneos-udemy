import { USUARIO_ROUTES } from './components/usuario/usuario.routes';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'usuario/:id', component: UsuarioComponent,
        children: USUARIO_ROUTES
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
    // Si no puede machear ninguna de las anteriores
];

// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true}); // soporte parametros, mas navegadores webs

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
//   necesario <base href="/"> en index
