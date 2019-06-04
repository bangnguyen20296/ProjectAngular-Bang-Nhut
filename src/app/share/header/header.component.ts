import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  hoTen: string;
  status: boolean;
  constructor() { }

  ngOnInit() {
  }
  ngDoCheck() {
    const getThongTinND = JSON.parse(localStorage.getItem('nguoiDungDangNhap'));
    if (getThongTinND !== null) {
      this.status = true;
      this.hoTen = getThongTinND.HoTen;
    } else {
      this.status = false;
    }
  }
  handleSignOut() {
    localStorage.removeItem('nguoiDungDangNhap');
  }
}
