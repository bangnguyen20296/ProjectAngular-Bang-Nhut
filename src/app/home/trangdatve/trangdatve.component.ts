import { Component, OnInit, DoCheck, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuanLyDatVeService } from 'src/app/service/phim/quan-ly-dat-ve.service';
import { DanhsachgheComponent } from './danhsachghe/danhsachghe.component';

@Component({
  selector: 'app-trangdatve',
  templateUrl: './trangdatve.component.html',
  styleUrls: ['./trangdatve.component.css']
})
export class TrangdatveComponent implements OnInit, DoCheck, AfterViewInit {
  @ViewChild(DanhsachgheComponent) DSGheComp: DanhsachgheComponent;
  public MaLichChieu: string;
  public DanhSachGheNgoi: any[] = [];
  public DSGhe: any[];
  public tongTien = 0;
  public tenGhe: string;
  public tenND: string;
  constructor(private activatedRoute: ActivatedRoute, private phimService: QuanLyDatVeService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((res) => {
      this.MaLichChieu = res.malichchieu;
      this.phimService.LayChiTietPhongVe(this.MaLichChieu).subscribe((kq) => {
        this.DanhSachGheNgoi = kq.DanhSachGhe;
        console.log(this.DanhSachGheNgoi);

        const getThongTinND = JSON.parse(localStorage.getItem('nguoiDungDangNhap'));
        this.tenND = getThongTinND.HoTen;
      });
    }, (err) => {
      console.log(err);
    });
  }
  ngDoCheck() {
    this.tongTien = 0;
    this.DSGhe = this.DSGheComp.DSGheDangDat;
    console.log(this.DSGhe);
    for (const item of this.DSGhe) {
      this.tongTien += item.GiaVe;
      this.tenGhe = item.TenGhe;
    }
    return this.tongTien;
  }
}
