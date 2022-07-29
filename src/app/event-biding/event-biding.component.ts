import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-biding',
  templateUrl: './event-biding.component.html',
  styleUrls: ['./event-biding.component.css']
})
export class EventBidingComponent implements OnInit {

  buttonName = "My button";
  i = 0;

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    console.log("CLICK");

  }

  // método:
  inc() {
    this.i++;
  }

}
