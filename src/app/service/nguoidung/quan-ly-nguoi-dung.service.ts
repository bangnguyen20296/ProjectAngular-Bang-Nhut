import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuanLyNguoiDungService {

  constructor(private http: Http) { }
  // layDanhSachNguoiDung():Observable<any> {
  //   const obServe = this.http.get(`http://svcy2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`);
  //   return obServe;
  // }
  layDanhSachNguoiDung(): Observable<any> {
    const url = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`;
    const obServe = this.http.get(url).pipe(map((result: Response) => result.json()));
    return obServe;
  }
}
