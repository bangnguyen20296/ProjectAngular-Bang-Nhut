import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuanLyDatVeService {
  constructor(private http: HttpClient) { }

  DatVe(ticket: any): Observable<any> {
    const url = 'http://svcy2.myclass.vn/api/QuanLyDatVe/DatVe';
    return this.http.post(url, ticket, {
      headers: {'Content-Type': 'application/json;charset=UTF-8'}
    });
  }
}
