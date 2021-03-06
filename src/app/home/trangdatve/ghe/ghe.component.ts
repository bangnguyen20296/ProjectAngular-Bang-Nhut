import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.css']
})
export class GheComponent implements OnInit {
  status = false;
  @Input() itemGhe: any;
  @Output() emitStatus = new EventEmitter();
  constructor() { }

  datGhe() {
    if (this.status) {
      this.status = false;
    } else {
      this.status = true;
    }
    this.emitStatus.emit(this.status);
  }

  ngOnInit() {
  }

}
