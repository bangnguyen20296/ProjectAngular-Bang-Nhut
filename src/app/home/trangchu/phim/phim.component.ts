import { Component, OnInit, OnDestroy } from '@angular/core';
import { LayDanhSachPhimService } from 'src/app/service/phim/lay-danh-sach-phim.service';
import { Subscription } from 'rxjs';
import { Phim } from 'src/app/model/phim';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-phim',
  templateUrl: './phim.component.html',
  styleUrls: ['./phim.component.css']
})
export class PhimComponent implements OnInit, OnDestroy {
  subService: Subscription;
  dsPhim: Phim;
  constructor(private layDSPhim: LayDanhSachPhimService, public ngxSmartModalService: NgxSmartModalService) {

  }

  ngOnInit() {
    this.subService = this.layDSPhim.LayDanhSachPhim().subscribe((res) => {
      this.dsPhim = res;
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }
  ngOnDestroy() {
    this.subService.unsubscribe();
  }
}
