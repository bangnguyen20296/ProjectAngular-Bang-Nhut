import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Phim } from 'src/app/model/phim';
import { LayDanhSachPhimService } from 'src/app/service/phim/lay-danh-sach-phim.service';
=======
>>>>>>> 06e0a7793db404190c893af0391d606b8c0bff00

@Component({
  selector: 'app-quan-ly-phim',
  templateUrl: './quan-ly-phim.component.html',
  styleUrls: ['./quan-ly-phim.component.css']
})
export class QuanLyPhimComponent implements OnInit {
<<<<<<< HEAD
  mangPhim: Phim[] = [];
  constructor(private phimSV: LayDanhSachPhimService) { }

  ngOnInit() {
    this.phimSV.LayDanhSachPhim().subscribe(
      (kq:any) => {
        this.mangPhim = kq;
        console.log(this.mangPhim)
      }
    )
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
=======

  constructor() { }

  ngOnInit() {
  }

>>>>>>> 06e0a7793db404190c893af0391d606b8c0bff00
}
