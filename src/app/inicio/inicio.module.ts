import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { InicioRoutingModule } from './inicio-routing.module';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations:[
    BannerComponent,
    InicioComponent
  ],
  imports:[
    InicioRoutingModule,
    CommonModule,
    SwiperModule
  ]
})
  export class InicioModule
  {

  }
