import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  apiKey = '17bc352cf68c5faf';
  url: string;

  city: string;
  state: string;

  constructor(private http: HttpClient) {
    this.url = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q';
  }

  setLocation() {
    return null;
  }

  getLocation() {
    return null;
  }

  getWeather(city, state) {
    console.log(city, state);
    return this.http.get(this.url + '/' + state + '/' + city + '.json')
  }
}
