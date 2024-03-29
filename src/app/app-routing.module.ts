import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { MaintenanceComponent } from './shared/maintenance/maintenance.component';
import { IndicadoresTecnicosComponent } from './pages/indicadores-tecnicos/indicadores-tecnicos.component';


const routes: Routes = [
  // {  path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'indicadores-tecnicos', component: IndicadoresTecnicosComponent },

  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
    PagesRoutingModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
