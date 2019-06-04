import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { NguoiDung } from 'src/app/model/nguoidung';
import { QuanLyNguoiDungService } from 'src/app/service/nguoidung/quan-ly-nguoi-dung.service';


@Component({
  selector: 'app-quan-ly-nguoi-dung',
  templateUrl: './quan-ly-nguoi-dung.component.html',
  styleUrls: ['./quan-ly-nguoi-dung.component.css']
})
export class QuanLyNguoiDungComponent implements OnInit {
  taiKhoan:string;
  matKhau:string;
  email:string;
  soDT:number;
  maNhom:string;
  maLoaiNguoiDung:string;
  hoTen:string;
  mangNguoiDung:NguoiDung[] = [];
  constructor(private nguoiDungSV: QuanLyNguoiDungService ,
     private XoaNdService: QuanLyNguoiDungService,
     private UpdateUserService: QuanLyNguoiDungService) { }

   ngOnInit() {
     this.nguoiDungSV.layDanhSachNguoiDung().subscribe(
       (kq:any) => {
         this.mangNguoiDung = kq;
         console.log(this.mangNguoiDung)
       }
     )
   }

   DeleteUser(index: any){
    this.XoaNdService.DeleteUser(index).subscribe(res => {
      this.nguoiDungSV.layDanhSachNguoiDung().subscribe(
        (kq:any) => {
          this.mangNguoiDung = kq;
        }
      )
    })
  };
  UpdateUser(nguoidung: NguoiDung) {
    this.UpdateUserService.UpdateUser(nguoidung).subscribe(res => {
      console.log(res);
      this.nguoiDungSV.layDanhSachNguoiDung().subscribe(
        (kq:any) => {
          this.mangNguoiDung = kq;
          console.log(this.mangNguoiDung)
        }
      )
    },err => {
      console.log(err)
    })

  }
  suaND(nguoidung:any){
    console.log(nguoidung);
    for (let item of this.mangNguoiDung) {
      if (item.TaiKhoan === nguoidung.TaiKhoan) {
            this.taiKhoan=nguoidung.TaiKhoan;
            this.matKhau = nguoidung.MatKhau;
            this.email = nguoidung.Email;
            this.soDT = nguoidung.SoDT;
            this.maNhom = nguoidung.MaNhom;
            this.maLoaiNguoiDung = nguoidung.MaLoaiNguoiDung;
            this.hoTen = nguoidung.HoTen
           
      }
    }
    console.log(this.maLoaiNguoiDung);
  } 
}
