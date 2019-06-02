import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { TrangchitietComponent } from './trangchitiet/trangchitiet.component';
import { TrangdatveComponent } from './trangdatve/trangdatve.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
      {path: '', component: HomeComponent, children: [
          {path: '', redirectTo: 'trang-chu', pathMatch: 'full'},
          {path: 'trang-chu', component: TrangchuComponent },
          {path: 'chi-tiet/:maphim', component: TrangchitietComponent},
          {path: 'dat-ve/:malichchieu', component: TrangdatveComponent},
          {path: 'tin-tuc', component: TintucComponent},
          {path: 'lien-he', component: LienheComponent},
          {path: 'profile', component: ProfileComponent},
          {path: 'dang-nhap', component: DangnhapComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
