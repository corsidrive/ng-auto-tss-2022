import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PosizioneService {

  private posizioniGriglia:any[]=[];

  constructor() { }

  creaGriglia(){
    const piloti = this.getPiloti()

    // function () {}
    this.posizioniGriglia = piloti.map((pilota:any)=>{
        return {
          "nome":pilota.nome,
          "posizione":0
        }
    })

    return this.posizioniGriglia
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



  getPiloti(){
    // HTTPClient --_>
  }
}
