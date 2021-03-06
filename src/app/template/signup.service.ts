import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  public insertData(record: any): Observable<any>{
    return this.http.post<any>(`http://localhost:8080/insert`, record);
  }
}
