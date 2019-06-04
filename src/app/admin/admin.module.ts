import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyNguoiDungComponent } from './quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { AdminRoutingModule } from './admin-routing.module';
import { QuanLyPhimComponent } from './quan-ly-phim/quan-ly-phim.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { ThongKeComponent } from './thong-ke/thong-ke.component';
import { AdminComponent } from './admin.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [QuanLyNguoiDungComponent, QuanLyPhimComponent, DangnhapComponent, ThongKeComponent, AdminComponent, MenuAdminComponent],
  imports: [
    CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule
  ],
  exports: [

  ]
})
export class AdminModule { }
