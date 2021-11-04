import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiaRoutingModule } from './noticia-routing.module';
import { NoticiaComponent } from './components/noticia/noticia.component';
import { NoticiaDetailComponent } from './components/noticia-detail/noticia-detail.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    NoticiaComponent,
    NoticiaDetailComponent,
    NoticiasComponent
  ],
  imports: [
    CommonModule,
    NoticiaRoutingModule,
    MaterialModule
  ]
})
export class NoticiaModule { }
