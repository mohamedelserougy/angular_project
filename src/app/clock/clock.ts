import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  imports: [DatePipe],
  templateUrl: './clock.html',
  styleUrl: './clock.css'
})
export class Clock implements OnInit, OnDestroy {
  currentDate : Date = new Date();
  intervalId :any ;

  ngOnInit() :void {
      this.intervalId = setInterval(()=> {
      this.currentDate = new Date();
    },1000)
  }

  ngOnDestroy() :void {
    console.log("destory");

    clearInterval(this.intervalId);
  }
  status :boolean = true

  toggle() :void {
    console.log("build");

    this.status = !this.status ;
  }


}
