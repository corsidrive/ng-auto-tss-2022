import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PosizioneService {

  private posizioniGriglia:any[]=[];

  constructor(public http:HttpClient ) { }

  
  
  
  public creaGriglia(piloti:any[]){
    
    
  const posizioniGriglia = piloti.map((pilota:any)=>{
        return {
          "nome":pilota.nome,
          "posizione":0
        }
      })

    this.posizioniGriglia = posizioniGriglia  
    return posizioniGriglia;
  }

  /**
   * info.nome  è il nome della posizione che deve essere aggiornata
   * @param info 
   */
  aggiornaGriglia(info:any){
    console.log("info",info.nome,info.posizione);
    const indiceTrovato = this.posizioniGriglia.findIndex((pilotaInGligia) => {
        return info.nome === pilotaInGligia.nome
    })
    console.log(this.posizioniGriglia,"trovato in classifica;",this.posizioniGriglia[indiceTrovato]);
    this.posizioniGriglia[indiceTrovato].posizione = info.posizione
      console.log("this.posizioniGriglia",this.posizioniGriglia)
    return this.posizioniGriglia;
  }
  ordinaPosizioni(){
    
  }

  getPiloti():Observable<any> {
      return this.http.get('http://localhost:3000/piloti')
  }
}
