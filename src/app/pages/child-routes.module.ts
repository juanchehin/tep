import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
// Mantenimientos
// import { PedidosComponent } from './mantenimientos/pedidos/pedidos/pedidos.component';
import { LoginGuardGuard } from '../guards/login-guard.guard';
import { VerificaTokenGuard } from '../guards/verifica-token.guard';
import { IndicadoresTecnicosModule } from './apartados/indicadores-tecnicos/indicadores-tecnicos.module';
import { IndicadoresTecnicosComponent } from './apartados/indicadores-tecnicos/indicadores-tecnicos/indicadores-tecnicos.component';



const childRoutes: Routes = [
  { path: '', component: DashboardComponent, data: { titulo: 'Dashboard' } },
  { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
  { path: 'indicadores-tecnicos', component: IndicadoresTecnicosComponent },

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
