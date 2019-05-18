import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DangNhapService {

  constructor(private http: HttpClient) {
  }
  signInUser(taikhoan: any, matkhau: any): Observable<any> {
    const url = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${taikhoan}&matkhau=${matkhau}`;
    return this.http.post(url, {
      headers: {'Content-Type': 'application/json;charset=UTF-8'}
    });
  }
}
