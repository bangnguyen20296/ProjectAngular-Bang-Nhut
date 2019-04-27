import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { QuanLyNguoiDungComponent } from './quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { ThongKeComponent } from './thong-ke/thong-ke.component';
import { QuanLyPhimComponent } from './quan-ly-phim/quan-ly-phim.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: '', redirectTo: 'thong-ke', pathMatch: 'full' },
      { path: 'thong-ke', component: ThongKeComponent },
      { path: 'quan-ly-nguoi-dung', component: QuanLyNguoiDungComponent },
      { path: 'quan-ly-phim', component: QuanLyPhimComponent },
      { path: 'dang-nhap', component: DangnhapComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, AdminRoutingModule]
})
export class AdminRoutingModule { }
