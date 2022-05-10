import { Component,   EventEmitter,   Input,   OnInit, Output } from '@angular/core';


@Component({
  // p --> <p>
  // app-auto --> <app-auto>
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss']
})
export class AutoComponent implements OnInit {

  @Input()
  public velocita:number = 10
  public posizione:number = 0;
  
  @Input()
  public colore:string = ""
  
  @Input()
  public nome:string = "";

  @Output() onPositionChange:EventEmitter<any>  = new EventEmitter();

  constructor() { 
    //console.log("posizione",this.posizione)
    //console.log("costruttore",this.nome)
  }

  /** hook */
  ngOnInit(): void {
    //console.log("init",this.nome)
    //console.log("colore",this.colore)
  }

  getColor(){
    // genera un colorea caso
    return 'hue-rotate('+ this.colore + ')'
  }

  avanti() {
    this.posizione += this.velocita; 
    this.onPositionChange.emit(this)
  }

}




