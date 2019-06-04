import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Http , Headers} from '@angular/http';
import { Phim } from 'src/app/model/phim';

@Injectable({
  providedIn: 'root'
})
export class LayDanhSachPhimService {
  mangPhim: Phim[] = [];
  constructor(private http: HttpClient, private _htpp: Http) { }
  public LayDanhSachPhim(): Observable<any> {
    const obServe = this.http.get(`http://svcy2.myclass.vn/api/quanlyphim/laydanhsachphim?manhom=GP02`);
    return obServe;
  }
  
 
  public uploadFile(file: File, TenPhim: string) {
    const formData = new FormData();
    formData.append('Files', file);
    formData.append('TenPhim', TenPhim);
    // Đối với formData, không set content type
    const obs = this._htpp.post('http://svcy2.myclass.vn/api/QuanLyPhim/UploadFile', formData);
    return obs;
  }

  public addMovive(movie: any) {
    const url = `http://svcy2.myclass.vn/api/QuanLyPhim/ThemPhimMoi`;
    let header = new Headers();
    header.append('Content-Type','application/json;charset=UTF-8');
    return this._htpp.post(url, movie, {
      headers: header
    });
  }
  
 

}
