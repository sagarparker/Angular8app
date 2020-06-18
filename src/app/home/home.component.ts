import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCount: number = 0;

  name : string ='Hello';

  constructor() { }

  ngOnInit(): void {
  }

  countClick(){
    this.clickCount += 1;
  }

  setClasses(){
    let myClasses = {
      active:this.clickCount > 4,
      notactive:this.clickCount <=4
    }
    return myClasses;
  }

}
