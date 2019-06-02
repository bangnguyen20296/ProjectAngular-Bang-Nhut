import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { TrangchitietComponent } from './trangchitiet/trangchitiet.component';
import { PhimComponent } from './trangchu/phim/phim.component';
import { SliderComponent } from './trangchu/slider/slider.component';
import { ItemPhimComponent } from './trangchu/phim/item-phim/item-phim.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { HomeComponent } from './home.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { TrangdatveComponent } from './trangdatve/trangdatve.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from '../share/header/header.component';
import { FooterComponent } from '../share/footer/footer.component';
import { MenuComponent } from '../share/menu/menu.component';
import { QuangcaoComponent } from './trangchu/quangcao/quangcao.component';
import { DanhsachgheComponent } from './trangdatve/danhsachghe/danhsachghe.component';
import { GheComponent } from './trangdatve/ghe/ghe.component';
import { ProfileComponent } from './profile/profile.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PipeModule } from '../pipe/pipe.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, HomeRoutingModule,
    CarouselModule, NgxPaginationModule,
    AngularFontAwesomeModule, PipeModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [
    TrangchuComponent,
    TrangchitietComponent,
    TrangdatveComponent,
    PhimComponent,
    SliderComponent,
    ItemPhimComponent,
    TintucComponent,
    HomeComponent,
    DangnhapComponent,
    TrangdatveComponent,
    LienheComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    QuangcaoComponent,
    DanhsachgheComponent,
    GheComponent,
    ProfileComponent
  ],

  exports: [
    TrangchuComponent,
    TrangchitietComponent,
    TrangdatveComponent,
    PhimComponent,
    SliderComponent,
    ItemPhimComponent,
    TintucComponent,
    HomeComponent,
    DangnhapComponent,
    TrangdatveComponent,
    LienheComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    QuangcaoComponent,
    DanhsachgheComponent,
    GheComponent,
    ProfileComponent
  ]
})
export class HomeModule { }
