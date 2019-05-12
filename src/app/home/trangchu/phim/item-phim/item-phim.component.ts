import { Component, OnInit, Input } from '@angular/core';
import { PhimComponent } from '../phim.component';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.css']
})
export class ItemPhimComponent implements OnInit {
  @Input() phim: PhimComponent;
  @Input() in: PhimComponent;
  constructor(public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {

  }
}
