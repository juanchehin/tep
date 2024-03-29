import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modulos
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { AnalisisChartistaComponent } from './apartados/analisis-chartista/analisis-chartista.component';

@NgModule({
  declarations: [
    PagesComponent,
    AnalisisChartistaComponent
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
