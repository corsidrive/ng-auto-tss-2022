import { Observable } from "rxjs"


class App {
    public colori
   //3                                       1
    this.colori = this.servizio.getColori()
    
    this.colori.map()

}


class Servizio {

    // 2
    getColori(){

        return ['rosso','verde']
    }
}

// ASICRONO
class App {

    public colori
    //3                   ---->Observable.subscribe()                    1
    this.servizio.getColori().subscribe((_piloti)=>{
            
            this.piloti = _piloti
          this.posiz   posizioniService.creaGriglia()
          quadratini  =  this.colori.map()

    })
 

 
 }
 
 
 class Servizio {
 


    creaGriglia()[

    ]

     // Promessa 
     getColori():Observable
     {
 
         return this.httpClient.get('httop:colori')
     }
 }
