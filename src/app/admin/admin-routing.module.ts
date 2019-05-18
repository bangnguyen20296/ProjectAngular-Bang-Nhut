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
<<<<<<< HEAD
  exports: [RouterModule]
=======
<<<<<<< HEAD
  exports: [RouterModule]
=======
  exports: [RouterModule, AdminRoutingModule]
>>>>>>> 06e0a7793db404190c893af0391d606b8c0bff00
>>>>>>> 6859f721e9cb08348f2a36633a04afd6ac41f5e1
})
export class AdminRoutingModule { }
