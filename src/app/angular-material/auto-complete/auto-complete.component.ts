import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css'],
  providers: [DataService]
})
export class AutoCompleteComponent  {

  //Exemplo 1
  options: string[] = ['Angular', 'React', 'Vue'];

  //Exemplo 2
  // ObjectOptions = [] = [
  //   { name: 'Angular'},
  //   { name: 'Angular Material'},
  //   { name: 'React'},
  //   { name: 'Vue'}

  // ];

  // displayFn(s) {
  //   return  ? subject.name : undefined;
  // }

  //Exemplo 3
  // public keyword = "name";

  // public data$!: Observable<any[]>;
  // public keywords = ["name", "capital", "region"];

  // constructor(private dataSvc: DataService) {
  //   this.getData();
  // }

  // getData(): void {
  //   this.data$ = this.dataSvc.getAllCountries();
  // }

}
