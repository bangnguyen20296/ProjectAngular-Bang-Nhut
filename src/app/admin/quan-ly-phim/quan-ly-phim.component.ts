import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Phim } from 'src/app/model/phim';
import { LayDanhSachPhimService } from 'src/app/service/phim/lay-danh-sach-phim.service';
import { QuanLyPhimService } from 'src/app/service/phim/quan-ly-phim.service';

@Component({
  selector: 'app-quan-ly-phim',
  templateUrl: './quan-ly-phim.component.html',
  styleUrls: ['./quan-ly-phim.component.css']
})
export class QuanLyPhimComponent implements OnInit {
  mangPhim: Phim[] = [];
  tenPhim: string;
  maPhim: number;
  trailer: string;
  moTa: string;
  maNhom: string;
  ngayKhoiChieu: any;
  danhGia: string;
  constructor(private phimSV: LayDanhSachPhimService,
              private http: HttpClient,
              private XoaDsService: QuanLyPhimService,
              private UpdateMovieService: QuanLyPhimService) { }

  ngOnInit() {
    this.phimSV.LayDanhSachPhim().subscribe(
      (kq: any) => {
        this.mangPhim = kq;
        console.log(this.mangPhim);
      }
    );
  }
  handleAddMovie(movie: any, imageFiles: FileList): void {
    movie.MaPhim = '';
    movie.HinhAnh = imageFiles[0].name;
    // Bước 1: upload cái hình từ máy lên server
    // Bước 2: tiến hành thêm phim, với thuộc tính HinhAnh = name của hình
    // lấy từ máy.
    this.phimSV.uploadFile(imageFiles[0], movie.TenPhim)
      .subscribe(
        res => {
          this.phimSV.addMovive(movie)
            .subscribe(
              result => {
                console.log(result);
              }
            );
        }
      );
  }
  DeleteMovie(index: any) {
    this.XoaDsService.DeleteMovie(index).subscribe(res => {
      this.phimSV.LayDanhSachPhim().subscribe(
        (kq: any) => {
          this.mangPhim = kq;
          console.log(this.mangPhim);
        }
      );
    });
  }
  UpdateMovie(phim: Phim) {
    this.UpdateMovieService.UpdateMovie(phim).subscribe(res => {
      console.log(res);
      this.phimSV.LayDanhSachPhim().subscribe(
        (kq: any) => {
          this.mangPhim = kq;
          console.log(this.mangPhim);
        }
      );
    }, err => {
      console.log(err);
    });

  }
  suaPhim(phim: any) {
    console.log(phim);
    for (const item of this.mangPhim) {
      if (item.MaPhim === phim.MaPhim) {
        this.maPhim = phim.MaPhim,
          this.tenPhim = phim.TenPhim,
          this.trailer = phim.Trailer,
          this.moTa = phim.MoTa,
          this.maNhom = phim.MaNhom,
          this.ngayKhoiChieu = phim.NgayKhoiChieu,
          this.danhGia = phim.DanhGia;
      }
    }
    console.log(this.ngayKhoiChieu);
  }
}
