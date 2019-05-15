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
import { HomeRoutingModule } from './home-routing.mudule';
import { HeaderComponent } from '../share/header/header.component';
import { FooterComponent } from '../share/footer/footer.component';
import { MenuComponent } from '../share/menu/menu.component';
import { ThongtinComponent } from './trangchitiet/thongtin/thongtin.component';
import { DanhgiaComponent } from './trangchitiet/danhgia/danhgia.component';
import { QuangcaoComponent } from './trangchu/quangcao/quangcao.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PipeModule } from '../pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule, HomeRoutingModule,
    CarouselModule, NgxPaginationModule,
    AngularFontAwesomeModule, PipeModule
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
    ThongtinComponent,
    DanhgiaComponent,
    QuangcaoComponent
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
    ThongtinComponent,
    DanhgiaComponent,
    QuangcaoComponent
  ]
})
export class HomeModule { }
