import { Component, OnInit, OnDestroy } from '@angular/core';
import { LayDanhSachPhimService } from 'src/app/service/phim/lay-danh-sach-phim.service';
import { Subscription } from 'rxjs';
import { Phim } from 'src/app/model/phim';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { animate, trigger, transition, style, sequence } from '@angular/animations';

@Component({
  selector: 'app-phim',
  templateUrl: './phim.component.html',
  styleUrls: ['./phim.component.css'],
  animations: [
    trigger('anim', [
      transition('void => *', [
        style({ opacity: '0.7', transform: 'translateY(5px)' }),
        sequence([
          animate('1.3s ease', style({ opacity: '1', transform: 'translateY(0px)' })),
        ])
      ])
    ])
  ]
})
export class PhimComponent implements OnInit, OnDestroy {
  subService: Subscription;
  dsPhim: Phim[] = [];
  urlTrailer: SafeResourceUrl;
  public trailerPhim: any;
  p = 1;
  constructor(private layDSPhim: LayDanhSachPhimService, private sanz: DomSanitizer) {

  }

  ngOnInit() {
    this.subService = this.layDSPhim.LayDanhSachPhim().subscribe((res) => {
      for (const obj of res) {
        let trailer: any = obj.Trailer;
        trailer = trailer.split('watch?v=');
        trailer = trailer[0] + 'embed/' + trailer[1];
        obj.Trailer = trailer;
      }
      this.dsPhim = res;
      console.log(this.dsPhim);
    }, (err) => {
      console.log(err);
    });
  }
  ngOnDestroy() {
    this.subService.unsubscribe();
  }
  changeModal(trailer: any) {
    console.log(trailer);
    for (const item of this.dsPhim) {
      if (trailer === item.Trailer) {
        this.trailerPhim = item.Trailer;
        this.urlTrailer = this.sanz.bypassSecurityTrustResourceUrl(this.trailerPhim);
        console.log(this.urlTrailer);
      }
    }
  }
}
