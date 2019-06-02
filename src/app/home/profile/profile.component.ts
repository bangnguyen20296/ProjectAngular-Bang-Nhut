import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, DoCheck {
  status = false;
  thongTin: {
    TaiKhoan: string;
    HoTen: string;
    Email: string;
    SoDT: number;
  };
  constructor() { }

  ngOnInit() {

  }
  ngDoCheck() {
    const getThongTinND = JSON.parse(localStorage.getItem('nguoiDungDangNhap'));
    if (getThongTinND !== null) {
      this.status = true;
      this.thongTin = {
        TaiKhoan: getThongTinND.TaiKhoan,
        HoTen: getThongTinND.HoTen,
        Email: getThongTinND.Email,
        SoDT: getThongTinND.SoDT
      };
    } else {
      this.status = false;
    }
  }
  handleSignOut() {
    localStorage.removeItem('nguoiDungDangNhap');
  }

}
