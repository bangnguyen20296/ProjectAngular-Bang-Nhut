import { Component, OnInit, DoCheck, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DanhsachgheComponent } from './danhsachghe/danhsachghe.component';
import { QuanLyLichChieuService } from 'src/app/service/phim/quan-ly-lich-chieu.service';
import { DatVe } from 'src/app/model/datve';
import { QuanLyDatVeService } from 'src/app/service/phim/quan-ly-dat-ve.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trangdatve',
  templateUrl: './trangdatve.component.html',
  styleUrls: ['./trangdatve.component.css']
})
export class TrangdatveComponent implements OnInit, DoCheck {
  @ViewChild(DanhsachgheComponent) DSGheComp: DanhsachgheComponent;
  public MaLichChieu: number;
  public DanhSachGheNgoi: any[] = [];
  public DSGhe: any[];
  public tongTien = 0;
  public tenGhe: string;
  public taiKhoanND: string;
  public tenPhim: string;
  public hinhPhim: string;
  public ngayKhoiChieu: string;
  public datVe: DatVe;
  constructor(private activatedRoute: ActivatedRoute,
              private phimService: QuanLyLichChieuService,
              private datVeService: QuanLyDatVeService,
              private router: Router) { }
  LayTaiKhoanNguoiDung() {
    const nguoiDungHienTai = JSON.parse(localStorage.getItem('nguoiDungDangNhap'));
    if (nguoiDungHienTai !== null) {
      return this.taiKhoanND = nguoiDungHienTai.TaiKhoan;
    } else {
      alert('Please login to book a ticket');
      return false;
    }
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((res) => {
      this.MaLichChieu = res.malichchieu;
      this.phimService.LayChiTietPhongVe(this.MaLichChieu).subscribe((kq) => {
        this.DanhSachGheNgoi = kq.DanhSachGhe;
        console.log(this.DanhSachGheNgoi);
      });
    }, (err) => {
      console.log(err);
    });
    const getThongTinPhim = JSON.parse(localStorage.getItem('thongTinPhim'));
    this.tenPhim = getThongTinPhim.TenPhim;
    this.hinhPhim = getThongTinPhim.HinhAnh;
    this.ngayKhoiChieu = getThongTinPhim.NgayKhoiChieu;
  }
  ngDoCheck() {
    this.tongTien = 0;
    this.DSGhe = this.DSGheComp.DSGheDangDat2;
    for (const item of this.DSGhe) {
      this.tongTien += item.GiaVe;
      this.tenGhe = item.TenGhe;
    }
    const nguoiDungHienTai = JSON.parse(localStorage.getItem('nguoiDungDangNhap'));
    this.taiKhoanND = nguoiDungHienTai.TaiKhoan;
    this.datVe = {
      MaLichChieu: this.MaLichChieu,
      TaiKhoanNguoiDung: this.taiKhoanND,
      DanhSachVe:
        this.DSGheComp.DSGheDangDat
    };
    console.log(this.datVe);
  }

  handleBooking() {
    this.LayTaiKhoanNguoiDung();
    if (this.DSGheComp.DSGheDangDat[0] != null) {
      this.datVeService.DatVe(this.datVe).subscribe((res) => {
        console.log(res);
        alert('Successful booking');
        setTimeout(() => this.router.navigate(['/']), 1000);
      }, (err) => {
        console.log(err);
      });
    } else {
      alert('Please select a seat');
    }
  }
}
