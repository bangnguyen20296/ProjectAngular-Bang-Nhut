import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayChiTietPhimService {

  constructor(private http: HttpClient) { }
  public LayChiTietPhim(maPhim: string): Observable<any> {
    const obServe = this.http.get(`http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${maPhim}`);
    return obServe;
  }
}
