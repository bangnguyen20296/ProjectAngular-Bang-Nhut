import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { Http , Headers} from '@angular/http';
=======
>>>>>>> 06e0a7793db404190c893af0391d606b8c0bff00

@Injectable({
  providedIn: 'root'
})
export class LayDanhSachPhimService {

<<<<<<< HEAD
  constructor(private http: HttpClient, private _htpp: Http) { }
=======
  constructor(private http: HttpClient) { }
>>>>>>> 06e0a7793db404190c893af0391d606b8c0bff00
  public LayDanhSachPhim(): Observable<any> {
    const obServe = this.http.get(`http://svcy2.myclass.vn/api/quanlyphim/laydanhsachphim?manhom=GP02`);
    return obServe;
  }
<<<<<<< HEAD
  
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
  
=======
>>>>>>> 06e0a7793db404190c893af0391d606b8c0bff00
}
