import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'My first AGM project';
  lat: Number = 51.678418;
  lng: Number = 7.809007;
}
