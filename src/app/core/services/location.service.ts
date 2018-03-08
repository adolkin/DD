import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Jsonp } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Location } from '@models/location';

@Injectable()
export class LocationService {

  constructor(
    private http: HttpClient,
  ) { }

  searchLocation(term: string): Observable<Location[]> {
    var url = "https://www.willyweather.com.au/search/autocomplete.html?query=" + term + "&area=location";
    return this.http.jsonp<Location[]>(url, 'callback');
  }
}
