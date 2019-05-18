<<<<<<< HEAD
import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { NguoiDung } from 'src/app/model/nguoidung';
import { QuanLyNguoiDungService } from 'src/app/service/nguoidung/quan-ly-nguoi-dung.service';

=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 06e0a7793db404190c893af0391d606b8c0bff00

@Component({
  selector: 'app-quan-ly-nguoi-dung',
  templateUrl: './quan-ly-nguoi-dung.component.html',
  styleUrls: ['./quan-ly-nguoi-dung.component.css']
})
export class QuanLyNguoiDungComponent implements OnInit {
<<<<<<< HEAD
  mangNguoiDung:NguoiDung[] = [];
  constructor(private nguoiDungSV: QuanLyNguoiDungService) { }

   ngOnInit() {
     this.nguoiDungSV.layDanhSachNguoiDung().subscribe(
       (kq:any) => {
         this.mangNguoiDung = kq;
         console.log(this.mangNguoiDung)
       }
     )
   }
=======

  constructor() { }

  ngOnInit() {
  }
>>>>>>> 06e0a7793db404190c893af0391d606b8c0bff00

}
