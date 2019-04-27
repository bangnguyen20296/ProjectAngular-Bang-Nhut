import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { TrangchitietComponent } from './trangchitiet/trangchitiet.component';
import { TrangdatveComponent } from './trangdatve/trangdatve.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';


const routes: Routes = [
      {path: '', component: HomeComponent, children: [
          {path: '', redirectTo: 'trang-chu', pathMatch: 'full'},
          {path: 'trang-chu', component: TrangchuComponent },
          {path: 'trang-chi-tiet', component: TrangchitietComponent},
          {path: 'trang-dat-ve', component: TrangdatveComponent},
          {path: 'tin-tuc', component: TintucComponent},
          {path: 'lien-he', component: LienheComponent},
          {path: 'dang-nhap', component: DangnhapComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
