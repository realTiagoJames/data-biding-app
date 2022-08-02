import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-biding',
  templateUrl: './property-biding.component.html',
  styleUrls: ['./property-biding.component.css']
})
export class PropertyBidingComponent implements OnInit {

  color: string = "accent";

  urlImagem = 'https://picsum.photos/200/300';
  btnDisabled = false;
  colors = ['primary', 'accent', 'warn', '']
  idx = 0;


  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.idx = (this.idx+1) % this.colors.length;
    },1000);
  }

}
