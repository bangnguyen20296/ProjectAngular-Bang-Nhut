import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NguoiDung } from 'src/app/model/nguoidung';

@Injectable({
  providedIn: 'root'
})
export class DangKyService {

  constructor(private http: HttpClient) {
  }
  signUpUser(user: NguoiDung): Observable<any> {
    const url = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung`;
    return this.http.post(url, user, {
      headers: {'Content-Type': 'application/json;charset=UTF-8'}
    });
  }
}
