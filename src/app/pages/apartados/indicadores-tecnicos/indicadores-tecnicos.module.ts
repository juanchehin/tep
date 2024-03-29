import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicadoresTecnicosComponent } from './indicadores-tecnicos/indicadores-tecnicos.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    IndicadoresTecnicosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class IndicadoresTecnicosModule { }
