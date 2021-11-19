import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore,{ Autoplay,Pagination, Navigation } from 'swiper';

SwiperCore.use([Autoplay, Pagination, Navigation]);


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  encapsulation:ViewEncapsulation.None,
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images: string[] = [
    "https://images.unsplash.com/photo-1590845947670-c009801ffa74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80",
    "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1614850715649-1d0106293bd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"];

}
