import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comics, Character } from "../shared/Comics";
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  // Define API
  apiURL = 'https://propertymecomics.s3.amazonaws.com';

  constructor(private http: HttpClient) {
  }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // HttpClient API get() method => Fetch Comics list
  getComics(): Observable<Comics> {
    return this.http.get<Comics>(this.apiURL + '/comics')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch Comic
  getComic(id): Observable<Comics> {
    return this.http.get<Comics>(this.apiURL + '/comics/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getCharacters(): Observable<Character> {
    return this.http.get<Character>(this.apiURL + "/characters")
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API post() method => Create Comic
  createComic(Comic): Observable<Comics> {
    return this.http.post<Comics>(this.apiURL + '/comics', JSON.stringify(Comic), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete Comic
  deleteComic(id){
    return this.http.delete<Comics>(this.apiURL + '/comics/' + id, this.httpOptions)
     .pipe(
       retry(1),
       catchError(this.handleError)
     )
   }

  // Error handling
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}