import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Swiper } from 'swiper';
import 'swiper/css';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit, AfterViewInit {

  mySwiper: Swiper = new Swiper('');

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit()
  {
    this.mySwiper = new Swiper('.swiper-container');
  }

}
