import { Component, OnInit } from '@angular/core';
import { WeatherService } from '@services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weather: any;
  location: {
    city: string,
    state: string
  }

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getWeather('Miami', 'FL')
      .subscribe(weather => {
        console.log(weather);
        this.weather = weather;
      })
  }
}
