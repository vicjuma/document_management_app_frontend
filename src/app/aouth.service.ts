import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AouthService {

  constructor(private http:HttpClient, private router:Router) { }

  options = {
    Httpheaders: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  }

  handleErrors(error:HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      // CLIENT ERROR
      console.error(`${error.error.message}`);
    }else{
      // SERVER ERROR
      console.error(`server: ${error.status} client: ${error.error}`);
    }
    return throwError('Something went wrong');
  }
}
