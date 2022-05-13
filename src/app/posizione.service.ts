import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PosizioneService {

  constructor(public http:HttpClient ) { 

    // this.getPiloti().subscribe((piloti)=>{
    //     alert(piloti)
    // })

  }

  public creaGriglia(piloti:any[]){
    
    const posizioniGriglia = piloti.map((pilota:any)=>{
        return {
          "nome":pilota.nome,
          "posizione":0
        }
    })
    return posizioniGriglia
  }

  /**
   * info.nome  è il nome della posizione che deve essere aggiornata
   * @param info 
   * FUNZIONE PURA 
   *  
   */
  aggiornaGriglia(info:any,posizioniGriglia:any) {
    
    const indiceTrovato = posizioniGriglia.findIndex((pilotaInGligia:any) => {
        return info.nome === pilotaInGligia.nome
    })
    posizioniGriglia[indiceTrovato].posizione = info.posizione

    return posizioniGriglia
  }

  getPiloti():Observable<any> {
       
      return this.http.get('http://localhost:3000/piloti')
  }
}
