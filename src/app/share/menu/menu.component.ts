import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  status1: boolean;
  status2: boolean;
  status3: boolean;
  status4: boolean;
  status5: boolean;
  constructor() {
  }

  ngOnInit() {
  }
  changeActive(stt: number) {
    if (stt === 1) {
      this.status1 = true;
      this.status2 = false;
      this.status3 = false;
      this.status4 = false;
      this.status5 = false;
    } else if (stt === 2) {
      this.status1 = false;
      this.status2 = true;
      this.status3 = false;
      this.status4 = false;
      this.status5 = false;
    } else if (stt === 3) {
      this.status1 = false;
      this.status2 = false;
      this.status3 = true;
      this.status4 = false;
      this.status5 = false;
    } else if (stt === 4) {
      this.status1 = false;
      this.status2 = false;
      this.status3 = false;
      this.status4 = true;
      this.status5 = false;
    } else if (stt === 5) {
      this.status1 = false;
      this.status2 = false;
      this.status3 = false;
      this.status4 = false;
      this.status5 = true;
    }
  }
}
