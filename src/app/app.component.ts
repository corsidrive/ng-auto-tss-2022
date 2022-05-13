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
  // public posizione:PosizioneService; 


  // Design pattern Dependecy Injection 
  constructor(public posizioneService:PosizioneService){

    /** 
     * nell'appicazione principale ho bisogno dei piloti per inizializzare il gioco
     */
    this.posizioneService.getPiloti()
                  .subscribe((_piloti) => {

                    console.log("ottengo piloti: --> ",_piloti)
                    this.piloti = _piloti
                    this.posizioniGriglia = this.posizioneService.creaGriglia(_piloti)
                  })
  }


  controllaPosizione(info:any){
    
    this.posizioniGriglia = this.posizioneService.aggiornaGriglia(info)

  }

}
