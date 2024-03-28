import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentasComponent } from './listar-ventas/ventas.component';
import { MisVentasComponent } from './mis-ventas/mis-ventas.component';
import { NuevaVentaComponent } from './nueva-venta/nueva-venta.component';

const routes: Routes = [
  { path: 'listar', component: VentasComponent, data: { titulo: 'Listado de Ventas' }},
  { path: 'nueva', component: NuevaVentaComponent, data: { titulo: 'Nueva venta' }},
  { path: 'usuario/:IdPersona', component: MisVentasComponent, data: { titulo: 'Mis ventas' }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasRoutingModule { }
