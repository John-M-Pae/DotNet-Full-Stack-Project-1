import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Passenger } from '../models/passenger';


@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  
  private baseURL = `https://localhost:7057/api/passenger`;
  
  private httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  };
  
  constructor(private http: HttpClient) { }

  getAll(): Observable<Passenger[]> {
    return of(
      [{
        id: 14,
        firstName: 'John',
        lastName: 'Pae',
        job: 'programer',
        email: 'JPae@skillstorm.com',
        age: 25
    }, {
      id: 23,
      firstName: 'Latisha',
      lastName: 'Walcott',
      job: null,
      email: 'tisha23@gmail.com',
      age: 24
    }] as Passenger[]
    );
    //return this.http.get<Passenger[]>(this.baseURL, this.httpOptions);
  }

  get(id: any): Observable<Passenger> {
    return this.http.get<Passenger>(`${this.baseURL}/${id}`, this.httpOptions);
  }

  create(outgoingPassenger: Passenger): Observable<Passenger> {
    return this.http.post(this.baseURL, outgoingPassenger);
  }

  remove(id: any): Observable<Passenger> {
    return this.http.delete(`${this.baseURL}/${id}`, this.httpOptions);
  }

}
