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

  constructor(public posizioneService:PosizioneService){

    
  }

  controllaPosizione(info:any){
    
  }

}
