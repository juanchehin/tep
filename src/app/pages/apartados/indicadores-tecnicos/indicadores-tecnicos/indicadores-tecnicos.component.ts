import { Component } from '@angular/core';

@Component({
  selector: 'app-indicadores-tecnicos',
  templateUrl: './indicadores-tecnicos.component.html',
  styleUrls: ['./indicadores-tecnicos.component.css']
})
export class IndicadoresTecnicosComponent {

    //
    escenarios_alcistas = 0;
    escenarios_bajistas = 0;
    escenarios_neutrales = 0;
  
  
    // media movil
    select_dir_ma = "-";
    select_cruce_ma = "-";
    observaciones_ma = "-";
  
    // 
    resultado_ma = "-";
    resultado_wma = "-";
  
    //
    select_dir_wma = "-";
    select_cruce_entre_wma = "-";
    select_cruce_precio_wma = "-";
    observaciones_wma = "-";
  
    //
    select_cruce_entre_ema = "-";
    resultado_ema = "-";
    select_dir_ema = "-";
    observaciones_ema = "-";
  
    //
    select_precio_boll = "-";
    select_cruce_boll = "-";
    resultado_boll = "-";
    observaciones_boll = "-";
    //
    select_tendencia_vwap = "-";
    resultado_vwap = "-";
    observaciones_vwap = "-";
  
  
    //
    select_tendencia_avl = "-";
    resultado_avl = "-";
    observaciones_avl = "-";
  
    //
    select_tendencia_trix = "-";
    select_cero_trix = "-";
    observaciones_trix = "-";
    resultado_trix = "-";
  
    //
    select_tendencia_sar = "-";
    select_divergencia_sar = "-";
    observaciones_sar = "-";
    resultado_sar = "-";
  
    //
    select_tendencia_vol = "-";
    select_divergencia_vol = "-";
    observaciones_vol = "-";
    resultado_vol = "-";
  
    //
    select_cruce_macd = "-";
    select_divergencia_macd = "-";
    observaciones_macd = "-";
    resultado_macd = "-";
    select_dif_dea_macd = "-";
  
    //
    select_sobre_cv_rsi = "-";
    select_divergencia_rsi = "-";
    observaciones_rsi = "-";
    resultado_rsi = "-";
  
    //
    select_precio_mfi = "-";
    select_divergencia_mfi = "-";
    observaciones_mfi = "-";
    resultado_mfi = "-"
    select_sobre_cv_mfi = "-";
  
    //
    select_tendencia_kdj = "-";
    select_divergencia_kdj = "-";
    observaciones_kdj = "-";
    resultado_kdj = "-"
    select_sobre_cv_kdj = "-";
  
    //
    select_valor_cci = "-";
    resultado_cci = "-"
    observaciones_cci = "-";
  
    //
    select_senal = "-";
    resultado_senal = "-";
  
    // ==========================
    calcular_ma(){
      if(this.select_dir_ma == "-")
      {
        this.observaciones_ma = "Problema con los datos";
        return;
      }
      this.observaciones_ma = "-";
  
  
      if(this.select_dir_ma == "asc"){
        this.resultado_ma = "Alcista";
        this.escenarios_alcistas += 1;
        return;
      }
  
      if(this.select_dir_ma == "desc"){
        this.resultado_ma = "Bajista";
        return;
      }
  
      if(this.select_cruce_ma == "encima"){
          this.resultado_ma = "Ascista";
          this.escenarios_alcistas += 1;
      }else{
        this.resultado_ma = "Bajista";
      }
      
    }
  
    // ==========================
    calcular_ema(){
      
      if(this.select_cruce_entre_ema == "-")
      {
        this.observaciones_ema = "Problema con los datos";
        return;
      }else{
        this.observaciones_ema = "-";
      }
  
      if((this.select_cruce_entre_ema == "encima") && (this.select_dir_ema == "asc")){
        this.resultado_ema = "Alcista";
        this.escenarios_alcistas += 1;
        return;
      }
  
      if((this.select_cruce_entre_ema == "debajo") && (this.select_dir_ema == "desc")){
        this.resultado_ema = "Bajista";
        this.escenarios_bajistas += 1;
        return;
      }
  
      if((this.select_cruce_entre_ema == "encima") && (this.select_dir_ema == "desc")){
        this.resultado_ema = "Bajista";
        this.escenarios_bajistas += 1;
        return;
      }
  
      if((this.select_cruce_entre_ema == "debajo") && (this.select_dir_ema == "asc")){
        this.resultado_ema = "Alcista";
        this.escenarios_alcistas += 1;
        return;
      }
      
    }
  
    // ==========================
    calcular_wma(){
      if(this.select_dir_wma == "-")
      {
        this.observaciones_wma = "Problema con los datos";
        return;
      }else{
        this.observaciones_wma = "-";
      }
  
      if((this.select_dir_wma == "asc") && (this.select_cruce_entre_wma == "encima")){
        this.resultado_wma = "Alcista";
        this.escenarios_alcistas += 1;
        return;
      }
  
      if((this.select_dir_wma == "asc") && (this.select_cruce_entre_wma == "encima")){
        this.resultado_wma = "Alcista";
        this.escenarios_alcistas += 1;
        return;
      }
  
      if((this.select_dir_wma == "desc") && (this.select_cruce_entre_wma == "debajo")){
        this.resultado_wma = "Bajista";
        return;
      }
  
      if((this.select_dir_wma == "desc") && (this.select_cruce_entre_wma == "debajo")){
        this.resultado_wma = "Bajista";
        return;
      }
  
      if((this.select_cruce_precio_wma == "nulo")){
        this.observaciones_wma = "Puede sugerir una Tendencia estable";
        return;
      }
  
      if((this.select_cruce_precio_wma == "encima")){
        this.observaciones_wma = "Puede sugerir un posible movimiento alcista en el precio";
      }else{
        this.observaciones_wma = "Puede sugerir un posible movimiento bajista en el precio";
      }
      
    }
    
    // ==========================
    calcular_boll(){
      if(this.select_precio_boll == "-")
      {
        this.observaciones_boll = "Problema con los datos";
        return;
      }else{
        this.observaciones_boll = "-";
      }
  
      switch (this.select_precio_boll) {
        case "superior":
            this.resultado_boll = "Bajista";
            this.observaciones_boll = "Puede indicar que el activo está sobrecomprado, lo que podría sugerir una posible reversión a la baja";
            this.escenarios_bajistas += 1;
            break;
         case "inferior":
            this.resultado_boll = "Alcista";
            this.observaciones_boll = "Puede indicar que el activo está sobrevendido, lo que podría sugerir una posible reversión alcista";
            this.escenarios_alcistas += 1;
            break;
        case "encima":
          this.resultado_boll = "Bajista";
          this.observaciones_boll = "Sugiere una posible reversión a la baja o un período de consolidación antes de continuar la tendencia bajista";
          this.escenarios_bajistas += 1;
          break;
        case "debajo":
          this.resultado_boll = "Alcista";
          this.observaciones_boll = "Puede indicar que el activo está sobrevendido. Esto podría sugerir una posible reversión alcista o un período de consolidación antes de continuar la tendencia bajista.";
          this.escenarios_alcistas += 1;
          break;
        case "ascendente":
          this.resultado_boll = "Alcista";
          this.observaciones_boll = "Sugiere un impulso ascendente en el corto plazo. Algunos traders podrían ver esto como una oportunidad para entrar en una posición larga o mantener posiciones largas existentes";
          this.escenarios_alcistas += 1;
          break;
        case "descendente":
          this.resultado_boll = "Bajista";
          this.observaciones_boll = "Sugiere un impulso descendente en el corto plazo. Algunos traders podrían ver esto como una señal para entrar en una posición corta o mantener posiciones cortas existentes";
          this.escenarios_bajistas += 1;
          break;
        default:
          this.resultado_boll = "Neutral";
          this.observaciones_boll = "-";
          this.escenarios_neutrales += 1;
          break;
      }
  
    }
  
    // ==========================
    calcular_vwap(){
      if(this.select_tendencia_vwap == "-")
      {
        this.observaciones_vwap = "Problema con los datos";
        return;
      }else{
        this.observaciones_vwap = "-";
      }
  
      if((this.select_tendencia_vwap == "encima")){
        this.resultado_vwap = "Alcista";
        this.escenarios_alcistas += 1;
      }else{
        this.resultado_vwap = "Bajista";
        this.escenarios_bajistas += 1;
      }
  
    }
  
    // ==========================
    calcular_avl(){
      if(this.select_tendencia_avl == "-")
      {
        this.observaciones_avl = "Problema con los datos";
        return;
      }else{
        this.observaciones_avl = "-";
      }
  
      if(this.select_tendencia_avl == "subiendo"){
        this.resultado_avl = "Alcista";
        this.observaciones_avl = "Si la línea AVL está subiendo y se confirma con un aumento en el volumen de operaciones, puede ser una señal adicional de una tendencia alcista sólida";
        this.escenarios_alcistas += 1;
      }else if(this.select_tendencia_avl == "cayendo"){
          this.resultado_avl = "Bajista";
          this.observaciones_avl = "-";
          this.escenarios_bajistas += 1;
        }else{
          this.resultado_avl = "Neutral";
          this.observaciones_avl = "-";
          this.escenarios_neutrales += 1;
      }
  
    }
  
     // ==========================
     calcular_trix(){
      if(this.select_tendencia_trix == "-")
      {
        this.observaciones_trix = "Problema con los datos";
        return;
      }else{
        this.observaciones_trix = "-";
      }
  
      if(this.select_tendencia_trix == "positivo"){
        this.resultado_trix = "Alcista";
        this.escenarios_alcistas += 1;
        this.observaciones_trix = " Cuanto mayor sea el valor positivo del TRIX, más fuerte podría ser la tendencia alcista. Los valores positivos significativos podrían indicar una tendencia alcista saludable.";
      }
  
      if(this.select_tendencia_trix == "negativo"){
        this.resultado_trix = "Bajista";
        this.escenarios_bajistas += 1;
        this.observaciones_trix = " Cuanto más negativo sea el valor del TRIX, más fuerte podría ser la tendencia bajista. Los valores negativos significativos podrían indicar una tendencia bajista pronunciada.";
      }
  
      if(this.select_cero_trix == "encima"){
        this.resultado_trix = "Alcista";
        this.escenarios_alcistas += 1;
        this.observaciones_trix = "Indica un cambio de impulso de bajista a alcista, lo que podría sugerir una posible reversión alcista o un fortalecimiento de la tendencia alcista existente";
        return;
      }
  
      if(this.select_cero_trix == "debajo"){
        this.resultado_trix = "Bajista";
        this.escenarios_bajistas += 1;
        this.observaciones_trix = "Puede interpretarse como una señal de venta potencial. Este cruce indica un cambio de impulso de alcista a bajista, lo que podría sugerir una posible reversión bajista o un fortalecimiento de la tendencia bajista existente.";
        return;
      }
  
      this.resultado_trix = "Neutral";
      this.escenarios_neutrales += 1;
      this.observaciones_trix = "Chequear otros indicadores";
  
    }
  
     // ==========================
     calcular_sar(){
      if(this.select_tendencia_sar == "-")
      {
        this.observaciones_sar = "Problema con los datos";
        return;
      }else{
        this.observaciones_sar = "-";
      }
      
      this.observaciones_sar = "El SAR puede servir como un nivel de stop loss dinámico que se ajusta conforme avanza la tendencia";
  
      if((this.select_tendencia_sar == "alcista")){
        this.resultado_sar = "Alcista";
        this.escenarios_alcistas += 1;
        this.observaciones_sar = "Señales de compra";
      }
  
      if((this.select_tendencia_sar == "bajista")){
        this.resultado_sar = "Bajista";
        this.escenarios_bajistas += 1;
        this.observaciones_sar = "Señales de venta";
      }
  
      switch (this.select_divergencia_sar) {
        case "encima":
            // this.resultado_sar = "Bajista";
            this.observaciones_sar = "Puede ser interpretado como una señal de que la tendencia alcista ha llegado a su fin y podría estar comenzando una tendencia bajista";
            this.escenarios_bajistas += 1;
            break;
         case "debajo":
            // this.resultado_sar = "Alcista";
            this.observaciones_sar = "Posible cambio en la dirección de la tendencia,sugiere que la tendencia bajista previa podría estar perdiendo fuerza o que podría estar surgiendo una tendencia alcista.Señal de compra potencial";
            this.escenarios_alcistas += 1;
            break;
        default:
          // this.resultado_sar = "Neutral";
          // this.observaciones_sar = "-";
          this.escenarios_neutrales += 1;
          break;
      }
  
      this.resultado_sar = "Neutral";
  
    }
  
    // ==========================
    calcular_vol(){
      if(this.select_tendencia_vol == "-")
      {
        this.observaciones_vol = "Problema con los datos";
        return;
      }else{
        this.observaciones_vol = "-";
      }
          
      if((this.select_tendencia_vol == "alcista")){
        this.resultado_vol = "Alcista";
        this.observaciones_vol = "fuerte interés en comprar, lo que respalda la tendencia alcista";
        this.escenarios_alcistas += 1;
      }
  
      if((this.select_tendencia_vol == "bajista")){
        this.resultado_vol = "Bajista";
        this.escenarios_bajistas += 1;
      }
  
      if((this.select_tendencia_vol == "bajista2")){
        this.resultado_vol = "Bajista";
        this.observaciones_vol = "Agotamiento de la tendencia alcista,Ausencia de confirmación,Potencial reversión";
        this.escenarios_bajistas += 1;
      }
  
      if((this.select_tendencia_vol == "alcista2")){
        this.resultado_vol = "Bajista";
        this.observaciones_vol = "Presión de venta:,Confirmación de tendencia bajista,Pánico o capitulación,Manipulación del mercado";
        this.escenarios_bajistas += 1;
      }
  
      //
      if((this.select_divergencia_vol == "alcista")){
        // this.resultado_vol = "Alcista";
        // this.observaciones_vol = "Presión de venta:,Confirmación de tendencia bajista,Pánico o capitulación,Manipulación del mercado";
        this.escenarios_alcistas += 1;
        return;
      }
  
      if((this.select_divergencia_vol == "bajista")){
        // this.resultado_vol = "Bajista";
        this.observaciones_vol = "Podría señalar una falta de interés o una debilidad en la tendencia alcista";
        this.escenarios_bajistas += 1;
        return;
      }
  
  
    }
  
    // ==========================
    calcular_macd(){
      if(this.select_cruce_macd == "-")
      {
        this.observaciones_macd = "Problema con los datos";
        return;
      }else{
        this.observaciones_macd = "-";
      }
  
      switch (this.select_cruce_macd) {
        case "alcista":
            this.resultado_macd = "Alcista";
            this.escenarios_alcistas += 1;
            break;
        case "bajista":
          this.resultado_macd = "Bajista";
            this.escenarios_bajistas += 1;
            break;
        default:
          // this.resultado_boll = "Neutral";
          // this.observaciones_boll = "-";
          this.escenarios_neutrales += 1;
          break;
      }
      
  
      switch (this.select_divergencia_macd) {
        case "alcista":
            // this.resultado_boll = "Bajista";
            this.observaciones_macd = "Fortaleza en la tendencia alcista actual";
            this.escenarios_alcistas += 1;
            break;
         case "bajista":
            // this.resultado_boll = "Alcista";
            this.observaciones_macd = "Tendencia alcista está perdiendo fuerza";
            this.escenarios_bajistas += 1;
            break;
        default:
          // this.resultado_boll = "Neutral";
          // this.observaciones_boll = "-";
          this.escenarios_neutrales += 1;
          break;
      }
  
      switch (this.select_dif_dea_macd) {
        case "alcista":
            // this.resultado_boll = "Bajista";
            this.observaciones_macd = "Fuerte impulso alcista. Es una señal de que la tendencia alcista es sólida y probablemente continuará.";
            this.escenarios_alcistas += 1;
            break;
         case "alcista2":
            // this.resultado_boll = "Alcista";
            this.observaciones_macd = "Esto podría indicar una reversión alcista en desarrollo. Los traders pueden esperar confirmación adicional, como un cruce alcista de la DIF por encima de la DEA";
            this.escenarios_alcistas += 1;
            break;
        case "bajista":
            // this.resultado_boll = "Bajista";
            this.observaciones_macd = "Fuerte impulso bajista. Es una señal de que la tendencia bajista es sólida y probablemente continuará.";
            this.escenarios_bajistas += 1;
            break;
        case "bajista2":
          // this.resultado_boll = "Alcista";
          this.observaciones_macd = "Esperar confirmación adicional, como un cruce bajista de la DIF por debajo de la DEA";
          this.escenarios_bajistas += 1;
          break;
        default:
          // this.resultado_boll = "Neutral";
          // this.observaciones_boll = "-";
          this.escenarios_neutrales += 1;
          break;
      }
  
    }
  
    // ==========================
    calcular_rsi(){
      if(this.select_sobre_cv_rsi == "-")
      {
        this.observaciones_rsi = "Problema con los datos";
        return;
      }else{
        this.observaciones_rsi = "-";
      }
      
      // this.observaciones_macd = "Si el precio sube pero el macdumen disminuye, esto podría señalar una falta de interés o una debilidad en la tendencia alcista";
      
      if((this.select_sobre_cv_rsi == "bajista") && (this.select_divergencia_macd == "bajista")){
        this.resultado_rsi = "Bajista";
        this.observaciones_rsi = "Posible reversión bajista";
        this.escenarios_bajistas += 1;
        return;
      }
  
      if((this.select_sobre_cv_rsi == "alcista") && (this.select_divergencia_macd == "alcista")){
        this.resultado_rsi = "Alcista";
        this.escenarios_alcistas += 1;
        this.observaciones_rsi = "Posible reversión alcista";
        return;
      }
  
      if((this.select_sobre_cv_rsi == "bajista") && (this.select_divergencia_macd == "alcista")){
        this.resultado_rsi = "Bajista";
        this.escenarios_bajistas += 1;
        this.observaciones_rsi = "Posible reversión bajista";
        return;
      }
  
      if((this.select_sobre_cv_rsi == "alcista") && (this.select_divergencia_macd == "bajista")){
        this.resultado_rsi = "Alcista";
        this.escenarios_alcistas += 1;
        return;
      }

      this.resultado_rsi = "Neutral";
      this.escenarios_neutrales += 1;
  
    }
  
    // ========== MFI ================
    calcular_mfi(){
      if(this.select_sobre_cv_mfi == "-")
      {
        this.observaciones_mfi = "Problema con los datos";
        return;
      }

      // --
      if((this.select_precio_mfi == "asciende")){
        this.observaciones_mfi += "Debilidad en la tendencia alcista";
        this.escenarios_bajistas += 1;
      }

      if((this.select_precio_mfi == "desciende")){
        this.observaciones_mfi += "Potencial reversión alcista";
        this.escenarios_alcistas += 1;
      }
      
      //  --
      if((this.select_sobre_cv_mfi == "bajista")){
        this.resultado_mfi = "Bajista";
        this.escenarios_bajistas += 1;
        return;
      }
  
      if((this.select_sobre_cv_mfi == "alcista")){
        this.resultado_mfi = "Alcista";
        this.escenarios_alcistas += 1;
        return;
      }
  
      if((this.select_sobre_cv_mfi == "bajista") && (this.select_divergencia_macd == "alcista")){
        this.resultado_mfi = "Bajista";
        this.escenarios_bajistas += 1;
        return;
      }
  
      if((this.select_sobre_cv_mfi == "alcista") && (this.select_divergencia_macd == "bajista")){
        this.resultado_mfi = "Alcista";
        this.escenarios_alcistas += 1;
        return;
      }

      
  
    }
  
    //
    changeStatusMFI1(){
      this.observaciones_mfi += "- Bajista ";
    }
  
    //
    changeStatusMFI2(){
      this.observaciones_mfi += "- Cambio posible en la tendencia";
    }
  
    // ==========================
    calcular_kdj(){
      if(this.select_sobre_cv_rsi == "-")
      {
        this.observaciones_kdj = "Problema con los datos";
        return;
      }
      
      // this.observaciones_macd = "Si el precio sube pero el macdumen disminuye, esto podría señalar una falta de interés o una debilidad en la tendencia alcista";
      
      if((this.select_sobre_cv_mfi == "bajista")){
        this.resultado_mfi = "Bajista";
        this.escenarios_bajistas += 1;
        return;
      }
  
      if((this.select_sobre_cv_mfi == "alcista")){
        this.resultado_mfi = "Alcista";
        this.escenarios_alcistas += 1;
        return;
      }
  
      if((this.select_sobre_cv_mfi == "bajista") && (this.select_divergencia_macd == "alcista")){
        this.resultado_mfi = "Bajista";
        this.escenarios_bajistas += 1;
        return;
      }
  
      if((this.select_sobre_cv_mfi == "alcista") && (this.select_divergencia_macd == "bajista")){
        this.resultado_mfi = "Alcista";
        this.escenarios_alcistas += 1;
        return;
      }
  
    }
  
    // ==========================
    calcular_cci(){
  
      if(this.select_valor_cci == "-")
      {
        this.observaciones_cci = "Problema con los datos";
        return;
      }
      
      // this.observaciones_macd = "Si el precio sube pero el macdumen disminuye, esto podría señalar una falta de interés o una debilidad en la tendencia alcista";
      
      if((this.select_valor_cci == "alcista")){
        this.resultado_cci = "Alcista";
        return;
      }
  
      if((this.select_valor_cci == "bajista")){
        this.resultado_cci = "Bajista";
        return;
      }
  
      if((this.select_valor_cci == "alcista_100")){
        this.resultado_cci = "Alcista";
        this.observaciones_cci = "Activo está sobrecomprado, lo que podría indicar una posible reversión bajista";
        return;
      }
  
      if((this.select_valor_cci == "bajista_100")){
        this.resultado_cci = "Bajista";
        this.observaciones_cci = "Activo está sobrevendido, lo que podría indicar una posible reversión alcista.";
        return;
      }
  
    }
  
    // ==========================
    calcular_senal_grupos(){
      
      // this.observaciones_macd = "Si el precio sube pero el macdumen disminuye, esto podría señalar una falta de interés o una debilidad en la tendencia alcista";
      
      if((this.select_senal == "alcista")){
        this.resultado_senal = "Alcista";
        this.escenarios_alcistas += 1;
      }else{
        this.resultado_senal = "Neutral";
      }
  
  
    }
  
    // ==========================
    calcular_prediccion_binance(){
      
      // this.observaciones_macd = "Si el precio sube pero el macdumen disminuye, esto podría señalar una falta de interés o una debilidad en la tendencia alcista";
      
      if((this.select_senal == "alcista")){
        this.resultado_senal = "Alcista";
        this.escenarios_alcistas += 1;
      }else if((this.select_senal == "bajista")){
        this.resultado_senal = "Bajista";
      }else{
        this.resultado_senal = "Neutral";
      }
  
  
    }
    // ==========================
    calcular_tendencia(){
      this.calcular_ma();
      this.calcular_ema();
      this.calcular_wma();
      this.calcular_boll();
      this.calcular_vwap();
      this.calcular_avl();
      this.calcular_trix();
      this.calcular_sar();
      this.calcular_vol();
      this.calcular_macd();
      this.calcular_rsi();
      this.calcular_mfi();
      this.calcular_kdj();
      this.calcular_cci();
      this.calcular_senal_grupos();
    }
  
}
