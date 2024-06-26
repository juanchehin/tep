import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { IndicadoresTecnicosComponent } from './apartados/indicadores-tecnicos/indicadores-tecnicos/indicadores-tecnicos.component';
import { AnalisisChartistaComponent } from './apartados/analisis-chartista/analisis-chartista/analisis-chartista.component';
import { AnalisisFundamentalComponent } from './apartados/analisis-fundamental/analisis-fundamental.component';
import { ReferenciasComponent } from './apartados/referencias/referencias.component';



const childRoutes: Routes = [
  { path: '', component: DashboardComponent, data: { titulo: 'Dashboard' } },
  { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
  { path: 'indicadores-tecnicos', component: IndicadoresTecnicosComponent },
  { path: 'analisis-chartista', component: AnalisisChartistaComponent },
  { path: 'analisis-fundamental', component: AnalisisFundamentalComponent },
  { path: 'referencias', component: ReferenciasComponent },

  // { 
  //   path: 'indicadores-tecnicos',
  //   loadChildren: () => import('./apartados/indicadores-tecnicos/indicadores-tecnicos-routing.module').then( m => m.IndicadoresTecnicosRoutingModule )
  // },
  // { 
  //   path: 'indicadores-tecnicos',
  //   // canActivate: [LoginGuardGuard, VerificaTokenGuard],
  //   data: { ruta: 'productos'},
  //   loadChildren: () => import('./indicadores-tecnicos/productos/productos-routing.module').then( m => m.ProductosRoutingModule )
  // }
 
]

@NgModule({
  imports: [ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule ]
})
export class ChildRoutesModule { }
