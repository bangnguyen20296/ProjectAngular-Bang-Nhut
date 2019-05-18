import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
=======
>>>>>>> 06e0a7793db404190c893af0391d606b8c0bff00

@Injectable({
  providedIn: 'root'
})
export class QuanLyNguoiDungService {

<<<<<<< HEAD
  constructor(private http: Http ) { }
  // layDanhSachNguoiDung():Observable<any> {
  //   const obServe = this.http.get(`http://svcy2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`);
  //   return obServe;
  // }
  layDanhSachNguoiDung():Observable<any> {
    let url = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`;
    let obServe = this.http.get(url).pipe(map((result:Response) => result.json()));
    return obServe;
  }
=======
  constructor() { }
>>>>>>> 06e0a7793db404190c893af0391d606b8c0bff00
}
