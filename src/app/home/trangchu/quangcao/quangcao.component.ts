import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-quangcao',
  templateUrl: './quangcao.component.html',
  styleUrls: ['./quangcao.component.css']
})
export class QuangcaoComponent implements OnInit {
  danhSachQuangCao = [
    {
      hinhAnh: '../../../../assets/images/poster1.jpg',
      tenPhim: 'Avengers Endgame',
      noiDung: 'Avengers: Hồi kết là phim điện ảnh siêu anh hùng Mỹ ra mắt năm 2019'
    },
    {
      hinhAnh: '../../../../assets/images/poster2.jpg',
      tenPhim: 'Spider-Man: Homecoming',
      noiDung: 'Sau sự kiện trở lại của Spider-Man qua vai diễn hoàn toàn mới của Tom Holland'
    },
    {
      hinhAnh: '../../../../assets/images/poster3.jpg',
      tenPhim: 'The Lion King',
      noiDung: 'Một trong những bộ phim hoạt hình nổi tiếng nhất mọi thời đại - The Lion King'
    },
    {
      hinhAnh: '../../../../assets/images/poster4.jpg',
      tenPhim: 'Detective Pikachu',
      noiDung: 'Detective Pikachu xoay quay hành trình truy tìm manh mối phá án về cái chết của Harry Goodman'
    },
    {
      hinhAnh: '../../../../assets/images/poster1.jpg',
      tenPhim: 'Avengers Endgame',
      noiDung: 'Avengers: Hồi kết là phim điện ảnh siêu anh hùng Mỹ ra mắt năm 2019'
    },
    {
      hinhAnh: '../../../../assets/images/poster2.jpg',
      tenPhim: 'Spider-Man: Homecoming',
      noiDung: 'Sau sự kiện trở lại của Spider-Man qua vai diễn hoàn toàn mới của Tom Holland'
    },
    {
      hinhAnh: '../../../../assets/images/poster3.jpg',
      tenPhim: 'The Lion King',
      noiDung: 'Một trong những bộ phim hoạt hình nổi tiếng nhất mọi thời đại - The Lion King'
    },
    {
      hinhAnh: '../../../../assets/images/poster4.jpg',
      tenPhim: 'Detective Pikachu',
      noiDung: 'Detective Pikachu xoay quay hành trình truy tìm manh mối phá án về cái chết của Harry Goodman'
    }
  ];
  constructor() { }

  customOptions: any = {
    loop: true,
    margin: 20,
    mouseDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    }
  };

  ngOnInit() {

  }

}
