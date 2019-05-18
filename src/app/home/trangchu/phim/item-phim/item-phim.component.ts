import { Component, OnInit, Input } from '@angular/core';
import { PhimComponent } from '../phim.component';

@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.css']
})
export class ItemPhimComponent implements OnInit {
  @Input() phim: PhimComponent;
  constructor() { }
  ngOnInit() {

  }
}
