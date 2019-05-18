import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyNguoiDungComponent } from './quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { AdminRoutingModule } from './admin-routing.module';
import { QuanLyPhimComponent } from './quan-ly-phim/quan-ly-phim.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { ThongKeComponent } from './thong-ke/thong-ke.component';
<<<<<<< HEAD
import { AdminComponent } from './admin.component';
=======
<<<<<<< HEAD
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [QuanLyNguoiDungComponent, QuanLyPhimComponent, DangnhapComponent, ThongKeComponent, MenuAdminComponent, AdminComponent  ],
  imports: [
    CommonModule, AdminRoutingModule , FormsModule , ReactiveFormsModule
  ],
  exports: [
    
=======
>>>>>>> 6859f721e9cb08348f2a36633a04afd6ac41f5e1


@NgModule({
  declarations: [QuanLyNguoiDungComponent, QuanLyPhimComponent, DangnhapComponent, ThongKeComponent, AdminComponent],
  imports: [
    CommonModule, AdminRoutingModule
<<<<<<< HEAD
  ],
  exports: [
    QuanLyNguoiDungComponent, QuanLyPhimComponent, DangnhapComponent, ThongKeComponent
=======
>>>>>>> 06e0a7793db404190c893af0391d606b8c0bff00
>>>>>>> 6859f721e9cb08348f2a36633a04afd6ac41f5e1
  ]
})
export class AdminModule { }
