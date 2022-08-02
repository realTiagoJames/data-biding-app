import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {
  cursoAngular: boolean = true;

  url: string = 'http://foxnews.com';

  firstname ="Jhon";
  age = 100;
  person = {
    firstname: "Jhon",
    lastname: "Wick",
    age: 50,
    address: "Route 100"
  }

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
