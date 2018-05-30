import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  date: Date;
  dateTime: string;
  constructor() {
    this.updateTime();
  }
  ngAfterViewInit() {
    this.updateTime();
    this.updateClock();
    setInterval(this.loop.bind(this), 1000);
  }
  loop() {
    this.updateTime();
    this.updateClock();
  }
  updateTime() {
    this.date = new Date();
    this.dateTime = this.date.toLocaleString();
  }
  updateClock() {
    // get hours, update hand
    var hours = this.date.getHours();
    var hoursRotation = (360/12) * (hours%12);
    document.getElementsByClassName("hour-hand")[0].setAttribute("style", "transform: rotateZ("+hoursRotation+"deg);");
    // get minutes, update hand
    var minutes = this.date.getMinutes();
    var minutesRotation = (360/60) * minutes;
    document.getElementsByClassName("minute-hand")[0].setAttribute("style", "transform: rotateZ("+minutesRotation+"deg);");
    // get seconds, update hand
    var seconds = this.date.getSeconds();
    var secondsRotation = (360/60) * seconds;
    document.getElementsByClassName("second-hand")[0].setAttribute("style", "transform: rotateZ("+secondsRotation+"deg); color: hsl("+secondsRotation+", 100%, 50%);");
  }
}
