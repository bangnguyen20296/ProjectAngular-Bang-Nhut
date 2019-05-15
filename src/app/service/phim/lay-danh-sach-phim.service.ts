import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayDanhSachPhimService {

  constructor(private http: HttpClient) { }
  public LayDanhSachPhim(): Observable<any> {
    const obServe = this.http.get(`http://svcy2.myclass.vn/api/quanlyphim/laydanhsachphim?manhom=GP02`);
    return obServe;
  }
}
