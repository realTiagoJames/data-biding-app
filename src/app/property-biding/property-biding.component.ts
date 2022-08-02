import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-biding',
  templateUrl: './property-biding.component.html',
  styleUrls: ['./property-biding.component.css']
})
export class PropertyBidingComponent implements OnInit {

  nameCliente:  string = 'Tyler';
  color: string = "accent";

  urlImagem = 'https://picsum.photos/200/300';
  btnDisabled = false;
  colors = ['primary', 'accent', 'warn', '']
  idx = 0;
  disableBox=true;
  disableBox2=true;

  enableBox(){
    this.disableBox=false
  }

  enableBox2(){
    this.disableBox2=false
  }

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.idx = (this.idx+1) % this.colors.length;
    },1000);
  }

}
