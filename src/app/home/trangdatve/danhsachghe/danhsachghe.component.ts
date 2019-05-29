import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-danhsachghe',
  templateUrl: './danhsachghe.component.html',
  styleUrls: ['./danhsachghe.component.css']
})
export class DanhsachgheComponent implements OnInit, OnChanges {
  @Input() gheArray: any[] = [];
  soGheDaDat = 0;
  soGheConLai = this.gheArray.length;
  DSGheDangDat = [];
  constructor() { }

  ngOnInit() {

  }
  ngOnChanges() {
    for (const ghe of this.gheArray) {
      if (!ghe.DaDat) {
        this.soGheConLai++;
      }
    }
  }
  datGheParent(status: any, ghe: any) {
    if (status) {
      this.soGheDaDat++;
      this.soGheConLai--;
      this.DSGheDangDat.push(ghe);
    } else {
      this.soGheDaDat--;
      this.soGheConLai++;
      for (const index in this.DSGheDangDat) {
        if (this.DSGheDangDat[index].TenGhe === ghe.TenGhe) {
          this.DSGheDangDat.splice(parseInt(index, 10), 1);
        }
      }
    }
  }
}
