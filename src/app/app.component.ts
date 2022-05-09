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
  ]

  controllaPosizione(info:any){
    // alert("una macchina si è mossa");
    console.log("l'auto di " + info.nome + "è nella posizone" + info.posizione);
  }

}
