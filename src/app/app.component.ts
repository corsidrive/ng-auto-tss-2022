import { Component } from '@angular/core';
import { PosizioneService } from './posizione.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'auto';
  
  public posizioniGriglia:Array<any> = []
  public piloti:any[] = [];

  public nomeCircuito = "Le mans";
  constructor(public posizioneService:PosizioneService){
     
   this.posizioneService.getPiloti().subscribe((piloti)=>{
              // QUESTO E' IL MOMENTO DOVE I PILOTI SONO DISPONIBILI
              this.piloti = piloti
              this.posizioniGriglia = this.posizioneService.creaGriglia(piloti)
              
         }) 
  }

  controllaPosizione(info:any){ 
     // c = c+1  
      this.posizioniGriglia = this.posizioneService.aggiornaGriglia(info,this.posizioniGriglia)
  }

}
