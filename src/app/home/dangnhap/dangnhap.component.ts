import { Component, OnInit } from '@angular/core';
import { DangNhapService } from 'src/app/service/nguoidung/dang-nhap.service';
import { DangKyService } from 'src/app/service/nguoidung/dang-ky.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NguoiDung } from 'src/app/model/nguoidung';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {

  constructor(private loginService: DangNhapService, private registerService: DangKyService, private router: Router) { }
  TaiKhoanKhongHopLe = ['admin01', 'admin02', 'admin03'];
  formSignIn: FormGroup;
  ngOnInit() {
    this.formSignIn = new FormGroup({
// tslint:disable-next-line: max-line-length
      TaiKhoan: new FormControl(null, [Validators.required, Validators.pattern('^[a-z0-9_-]+$'), Validators.maxLength(16), Validators.minLength(8), this.CheckKhongHopLe.bind(this)]),
      MatKhau: new FormControl(null, [Validators.required, Validators.maxLength(12), Validators.minLength(6)])
    });
  }

  handleSignIn() {
    const nguoiDungDN = this.formSignIn.value;
    this.loginService.signInUser(nguoiDungDN.TaiKhoan, nguoiDungDN.MatKhau).subscribe((res) => {
      if (typeof (res) === 'object') {
        const objTemp = {
          TaiKhoan: res.TaiKhoan,
          HoTen: res.HoTen,
          Email: res.Email,
          SoDT: res.SoDT
        };
        localStorage.setItem('nguoiDungDangNhap', JSON.stringify(objTemp));
        this.router.navigate(['/']);
        console.log(res);
      } else {
        alert('Username or Password is incorrect');
      }
    }, (err) => {
      console.log(err);
    });
  }
  CheckKhongHopLe(control: FormControl) {
    for (const taikhoan of this.TaiKhoanKhongHopLe) {
      if (control.value === taikhoan) {
        return { KhongHopLe: true };
      }
    }
    return null;
  }

  handleSignUp(user: NguoiDung) {
    user.MaNhom = 'GP01';
    user.MaLoaiNguoiDung = 'KhachHang';
    this.registerService.signUpUser(user).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }
}
