import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent implements OnInit {

  // ____________________ exemplo 2:
  size = 25;
  font = 'Arial';
  color = 'darkblue';

  // ____________________ exemplo 3:
  classes = ["green-title", "small-title"];

  // ____________________ exemplo 3:
  underline = 'underlined-title';


  constructor() { }

  ngOnInit(): void {
  }

}
