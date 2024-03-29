import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndicadoresTecnicosComponent } from './indicadores-tecnicos/indicadores-tecnicos.component';

const routes: Routes = [
   // 
   { path: '', component: IndicadoresTecnicosComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndicadoresTecnicosRoutingModule { }
