import { Component } from '@angular/core';

@Component({
  selector: 'app-analisis-chartista',
  templateUrl: './analisis-chartista.component.html',
  styleUrls: ['./analisis-chartista.component.css']
})
export class AnalisisChartistaComponent {

  //
  escenarios_alcistas = 0;
  escenarios_bajistas = 0;
  escenarios_neutrales = 0;

   //
   select_inversion = "-";
   resultado_inversion = "-";
   observaciones_inversion = "-";

   //
   select_inversion2 = "-";
   resultado_inversion2 = "-";
   observaciones_inversion2 = "-";

   //
   select_inversion3 = "-";
   resultado_inversion3 = "-";
   observaciones_inversion3 = "-";

   // ==========================
   calcular_inversion(){
     if(this.select_inversion == "-")
     {
       this.observaciones_inversion = "Problema con los datos";
       return;
     }
     this.observaciones_inversion = "-";
 
 
     if(this.select_inversion == "asc"){
       this.resultado_inversion = "Alcista";
       this.escenarios_alcistas += 1;
       return;
     }
      
   }

   // ==========================
   calcular_inversion2(){
    if(this.select_inversion == "-")
    {
      this.observaciones_inversion = "Problema con los datos";
      return;
    }
    this.observaciones_inversion = "-";


    if(this.select_inversion == "asc"){
      this.resultado_inversion = "Alcista";
      this.escenarios_alcistas += 1;
      return;
    }
     
  }

  // ==========================
  calcular_inversion3(){
    if(this.select_inversion == "-")
    {
      this.observaciones_inversion = "Problema con los datos";
      return;
    }
    this.observaciones_inversion = "-";


    if(this.select_inversion == "asc"){
      this.resultado_inversion = "Alcista";
      this.escenarios_alcistas += 1;
      return;
    }
     
  }
}
