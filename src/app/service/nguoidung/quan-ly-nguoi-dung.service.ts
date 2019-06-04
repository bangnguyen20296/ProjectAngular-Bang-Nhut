import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { NguoiDung } from 'src/app/model/nguoidung';

@Injectable({
  providedIn: 'root'
})
export class QuanLyNguoiDungService {

  constructor(private _http: Http,private http: HttpClient ) { }
  // layDanhSachNguoiDung():Observable<any> {
  //   const obServe = this.http.get(`http://svcy2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`);
  //   return obServe;
  // }
  layDanhSachNguoiDung():Observable<any> {
    let url = `http://svcy2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`;
    let obServe = this._http.get(url).pipe(map((result:Response) => result.json()));
    return obServe;
  }
  public DeleteUser(taikhoan: any):Observable<any>{
    const obServe = this.http.delete(`http://svcy2.myclass.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taikhoan}`);
    return obServe; 
  }

   public UpdateUser(nguoidung: NguoiDung):Observable<any>{
     const obServe = this.http.post(`http://svcy2.myclass.vn/api/QuanLyNguoiDung/CapNhatThongTin`,nguoidung,{
       headers: {'Content-Type': 'application/json;charset=UTF-8'}});
     return obServe; 
   }
}
