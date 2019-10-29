import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
let RestApiService = class RestApiService {
    constructor(http) {
        this.http = http;
        // Define API
        this.apiURL = 'http://localhost:3000';
        /*========================================
          CRUD Methods for consuming RESTful API
        =========================================*/
        // Http Options
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    // HttpClient API get() method => Fetch Comics list
    getComics() {
        return this.http.get(this.apiURL + '/Comics')
            .pipe(retry(1), catchError(this.handleError));
    }
    // HttpClient API get() method => Fetch Comic
    getComic(id) {
        return this.http.get(this.apiURL + '/Comics/' + id)
            .pipe(retry(1), catchError(this.handleError));
    }
    // HttpClient API post() method => Create Comic
    createComic(Comic) {
        return this.http.post(this.apiURL + '/Comics', JSON.stringify(Comic), this.httpOptions)
            .pipe(retry(1), catchError(this.handleError));
    }
    // HttpClient API put() method => Update Comic
    updateComic(id, Comic) {
        return this.http.put(this.apiURL + '/Comics/' + id, JSON.stringify(Comic), this.httpOptions)
            .pipe(retry(1), catchError(this.handleError));
    }
    // HttpClient API delete() method => Delete Comic
    deleteComic(id) {
        return this.http.delete(this.apiURL + '/Comics/' + id, this.httpOptions)
            .pipe(retry(1), catchError(this.handleError));
    }
    // Error handling 
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }
};
RestApiService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], RestApiService);
export { RestApiService };
//# sourceMappingURL=rest-api.service.js.map