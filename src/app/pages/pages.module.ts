import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modulos
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { IndicadoresTecnicosComponent } from './indicadores-tecnicos/indicadores-tecnicos.component';

@NgModule({
  declarations: [
    PagesComponent,
    IndicadoresTecnicosComponent
  ],
  exports: [
    PagesComponent
  ],
  imports: [ 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
