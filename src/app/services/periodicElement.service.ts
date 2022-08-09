import { PeriodicElement } from './../models/PeriodicElement';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PeriodicElementService {
    elementApiUrl = 'https://localhost:44366/swagger/index.html';
  constructor(private http: HttpClient) { }

  getElements(): Observable<PeriodicElement[]>{
    return this.http.get<PeriodicElement[]>(this.elementApiUrl)
  }

}
