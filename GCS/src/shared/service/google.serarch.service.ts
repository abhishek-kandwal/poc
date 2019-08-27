import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// tslint:disable-next-line: class-name
export class googlesearchservice {

  constructor(private http: HttpClient) {}
  private formatErrors(error: any) {
    return throwError(error.error);
  }

  getResults(path: string): Observable<any> {
    return this.http.get(path)
    .pipe(catchError(this.formatErrors));
  }

}
