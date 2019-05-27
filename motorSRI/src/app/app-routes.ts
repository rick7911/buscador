import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ControlComponent } from './admi/control/control.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'buscador/:palabra', component: BuscadorComponent },
  { path: 'controlPaginas',component: ControlComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'index' }  
];
export const AppRouting= RouterModule.forRoot(routes);
