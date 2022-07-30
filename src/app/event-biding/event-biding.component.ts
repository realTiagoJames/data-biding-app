import { Component, OnInit } from '@angular/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-event-biding',
  templateUrl: './event-biding.component.html',
  styleUrls: ['./event-biding.component.css']
})
export class EventBidingComponent implements OnInit {

  buttonName = "My button";
  i = 0;
  constructor() { }
  btnEnable = true;
  spinnerMode : ProgressSpinnerMode = 'determinate';


  ngOnInit(): void {
  }

  save() {
    console.log("Click");
  }

  // método:
  inc() {
    this.i++;
    this.buttonName = "It was clicked " + this.i + " times";
  }

  disable(){
    this.btnEnable = false;
    this.spinnerMode = "indeterminate";
    setTimeout ( () => {
      this.btnEnable = true;
      this.spinnerMode = "determinate";
    } , 3000);
  }

  // cbChange(event) {
  //   console.log("event");
  // }

}
