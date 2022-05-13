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
    // per ogni pilota 
    // this.posizione= new PosizioneService();
    this.posizioneService.getPiloti()
                  .subscribe((_piloti) => {
                    this.piloti = _piloti
                    this.posizioneService.creaGriglia()

                  })

  }


  controllaPosizione(info:any){
    console.log(info)

  }

}
