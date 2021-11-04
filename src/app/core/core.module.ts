import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiasService } from './services/noticias/noticias.service'



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    NoticiasService
  ]
})
export class CoreModule { }
