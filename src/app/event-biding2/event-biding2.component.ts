import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-biding2',
  templateUrl: './event-biding2.component.html',
  styleUrls: ['./event-biding2.component.css']
})
export class EventBiding2Component implements OnInit {

  name: string = 'Tyler McCollin'
  name2: string = 'Tyler McCollin'
  name3: string = 'Kirk McCollin'
  name4: string = 'Luke McCollin'

  clickSave(): void{
    alert('Hello!');
  }

  clickSave2(): void{
    this.name2 = "Tyler updated"
    setTimeout ( () => {
      this.name2 = 'Tyler McCollin'

    } , 3000);
  }

  clickSave3(): void{
    alert('Kirk Franklin Clicked');
  }

  over(): void{
    this.name3 = 'Kirk Franklin Over';
  }

  txtChange(): void{
    this.name4 = 'Original name has been changed.';
  }
  clickSave4(): void{
    alert('A new name has been saved.');
  }

  constructor() { }

  ngOnInit(): void {
  }


}
