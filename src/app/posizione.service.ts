import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PosizioneService {

  private posizioniGriglia:any[]=[];

  constructor(public http:HttpClient ) { }

  creaGriglia(){
    this.getPiloti().subscribe((_piloti)=>{
      
      const piloti = _piloti
    
      this.posizioniGriglia = piloti.map((pilota:any)=>{
        return {
          "nome":pilota.nome,
          "posizione":0
        }
      })

    })
    
  }

  /**
   * info.nome  è il nome della posizione che deve essere aggiornata
   * @param info 
   */
  aggiornaGriglia(info:any){

    const indiceTrovato = this.posizioniGriglia.findIndex( 
      (pilotaInGligia) => {
        return info.nome === pilotaInGligia.nome
      })
    
    this.posizioniGriglia[indiceTrovato].posizione = info.posizione

    return this.posizioniGriglia;
  }
  ordinaPosizioni(){
    
  }

  getPiloti():Observable<any> {
      return this.http.get('http://localhost:3000/piloti')
  }
}
