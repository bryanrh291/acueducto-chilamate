import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiaRoutingModule } from './noticia-routing.module';
import { NoticiaComponent } from './components/noticia/noticia.component';
import { NoticiaDetailComponent } from './components/noticia-detail/noticia-detail.component';
import { NoticiasComponent } from './components/noticias/noticias.component';

@NgModule({
  declarations: [
    NoticiaComponent,
    NoticiaDetailComponent,
    NoticiasComponent
  ],
  imports: [
    CommonModule,
    NoticiaRoutingModule
  ]
})
export class NoticiaModule { }
