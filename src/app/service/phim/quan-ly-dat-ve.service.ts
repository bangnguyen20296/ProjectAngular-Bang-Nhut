import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuanLyDatVeService {
  constructor(private http: HttpClient, private _http: Http) { }
  public LayChiTietPhongVe(maLichChieu: string): Observable<any> {
    // const obServe = this.http.get(`http://svcy2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${maLichChieu}`);
    // return obServe;
    const url = `http://svcy2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${maLichChieu}`;
    const obServe = this._http.get(url).pipe(map((result: Response) => result.json()));
    return obServe;
  }
}
