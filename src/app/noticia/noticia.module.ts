import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiaRoutingModule } from './noticia-routing.module';
import { NoticiaComponent } from './components/noticia/noticia.component';
import { NoticiaDetailComponent } from './components/noticia-detail/noticia-detail.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NoticiaComponent,
    NoticiaDetailComponent,
    NoticiasComponent
  ],
  imports: [
    CommonModule,
    NoticiaRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class NoticiaModule { }
