import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    $(document).ready(function(){
      $('[data-toggle="tooltip"]').tooltip({
        animated: 'fade'
      });
      $('[data-toggle="tooltip"]').hover(function () {
        $('.tooltip-inner').css('min-width', '50px');
        $('.tooltip-inner').css('color', 'white');
        $('.tooltip-inner').css('background-color', 'black');
      });
    });
  }
}
