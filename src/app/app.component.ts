import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title1: string = 'Angular-In-Examples';
  title2: string = 'ng-content';

  public temp: number;

  ngOnInit(): void {

    setInterval(() => {
      this.temp = Math.round(Math.random() * 10);
     }, 1000);
  }
}
