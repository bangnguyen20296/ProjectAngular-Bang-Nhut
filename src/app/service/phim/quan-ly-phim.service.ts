import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Http , Headers} from '@angular/http';
import { Phim } from 'src/app/model/phim';

@Injectable({
  providedIn: 'root'
})
export class QuanLyPhimService {

  constructor(private http: HttpClient) { }

  public DeleteMovie(maPh: number):Observable<any>{
    const obServe = this.http.delete(`http://svcy2.myclass.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPh}`);
    return obServe; 
  }
  
  public UpdateMovie(phim: Phim):Observable<any>{
    const obServe = this.http.post(`http://svcy2.myclass.vn/api/QuanLyPhim/CapNhatPhim`,phim,{
      headers: {'Content-Type': 'application/json;charset=UTF-8'}});
    return obServe; 
  }
}
