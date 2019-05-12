import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-quangcao',
  templateUrl: './quangcao.component.html',
  styleUrls: ['./quangcao.component.css']
})
export class QuangcaoComponent implements OnInit {

  constructor() { }

  customOptions: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
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
    },
    nav: true
  };

  ngOnInit() {

  }

}
