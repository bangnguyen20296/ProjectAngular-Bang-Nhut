import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LayChiTietPhimService } from 'src/app/service/phim/lay-chi-tiet-phim.service';

@Component({
  selector: 'app-trangchitiet',
  templateUrl: './trangchitiet.component.html',
  styleUrls: ['./trangchitiet.component.css']
})
export class TrangchitietComponent implements OnInit {
  public MaPhim: string;
  public ChiTietPhim: any;
  constructor(private activated: ActivatedRoute, private phimService: LayChiTietPhimService) { }

  ngOnInit() {
    this.activated.params.subscribe(
      (kq) => {
        this.MaPhim = kq.maphim;
        this.phimService.LayChiTietPhim(this.MaPhim).subscribe(
          (chitiet) => {
            let trailer: any = chitiet.Trailer;
            trailer = trailer.split('watch?v=');
            trailer = trailer[0] + 'embed/' + trailer[1];
            chitiet.Trailer = trailer;
            this.ChiTietPhim = chitiet;
            console.log(this.ChiTietPhim);
          }
        );
      }
    );
  }

}
