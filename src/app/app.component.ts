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
  public piloti;
  // public posizione:PosizioneService; 


  // Design pattern Dependecy Injection 
  constructor(public posizioneService:PosizioneService){
    // per ogni pilota 
    // this.posizione= new PosizioneService();
    this.piloti = this.posizioneService.getPiloti();
    this.posizioniGriglia = this.posizioneService.creaGriglia()
  }


  controllaPosizione(info:any){
   
  }

}
