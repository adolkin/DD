import { Box } from './../../shared/models/box';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BoxService {

  private url = 'api/boxs';

  constructor(
    private http: HttpClient
  ) { }

  getBoxs(): Observable<Box[]> {
    return this.http.get<Box[]>(this.url)
      .pipe(
        catchError(this.handleError('getBoxs', []))
      );
  }

  addBox(): Observable<Box> {
    let box = new Box;
    return this.http.post<Box>(this.url, box, httpOptions)
      .pipe(
        catchError(this.handleError<Box>('addBox'))
      );
  }

  editBox(box: Box): Observable<Box> {
    return this.http.put<Box>(this.url, box, httpOptions)
      .pipe(
        catchError(this.handleError<any>('editBox'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
