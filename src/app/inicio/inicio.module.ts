import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { InicioRoutingModule } from './inicio-routing.module';

@NgModule({
  declarations:[
    BannerComponent,
    InicioComponent
  ],
  imports:[
    InicioRoutingModule,
    CommonModule
  ]
})
  export class InicioModule
  {

  }
