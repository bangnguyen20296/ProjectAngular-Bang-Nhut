import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

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
  DSGheDangDat2 = [];
  trangThai: boolean;
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
    const ve: {MaGhe: number, GiaVe: number} = {
      MaGhe: ghe.MaGhe,
      GiaVe: ghe.GiaVe
    };
    if (status) {
      this.soGheDaDat++;
      this.soGheConLai--;
      this.DSGheDangDat.push(ve);
      this.DSGheDangDat2.push(ghe);
    } else {
      this.soGheDaDat--;
      this.soGheConLai++;
      for (const index in this.DSGheDangDat) {
        if (this.DSGheDangDat[index].MaGhe === ghe.MaGhe) {
          this.DSGheDangDat.splice(parseInt(index, 10), 1);
        }
      }
      for (const index in this.DSGheDangDat2) {
        if (this.DSGheDangDat2[index].MaGhe === ghe.MaGhe) {
          this.DSGheDangDat2.splice(parseInt(index, 10), 1);
        }
      }
    }
  }
}
