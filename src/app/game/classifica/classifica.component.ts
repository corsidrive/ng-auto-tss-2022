import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'classifica',
  templateUrl: './classifica.component.html',
  styleUrls: ['./classifica.component.scss']
})
export class ClassificaComponent implements OnInit {
  @Input() public posizioniInGriglia:any[] = []
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
