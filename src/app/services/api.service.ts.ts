import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  status(): Observable<any> {
    return this.http.get(`${ this.baseUrl }/ping`);
  }

  ping(): Observable<any> {
    return this.http.get(`${ this.baseUrl }/ping`);
  }
}
