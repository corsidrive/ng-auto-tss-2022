import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'auto';
  piloti = [
    {
      "nome":"Mario",
      "colore":"45deg",
      "potenza":40
    },
    {
      "nome":"Luigi",
      "colore":"85deg",
      "potenza":30
    },
    {
      "nome":"Ciccio",
      "colore":"185deg",
      "potenza":130
    },
  ];
  public posizioniGriglia:Array<any> = []
  
  constructor(){
    // per ogni pilota 
    this.posizioniGriglia = this.piloti.map((pilota:any)=>{
        return {
          "nome": pilota.nome,
          "posizione":0
        }
      })
      console.log(this.posizioniGriglia)
  }


  controllaPosizione(info:any){
    // alert("una macchina si è mossa");
    console.log("l'auto di " + info.nome + "è nella posizone" + info.posizione);

     this.posizioniGriglia.find((pilota)=>{

    })


    // clalcoliamo chi è in testa
  

  }

}
