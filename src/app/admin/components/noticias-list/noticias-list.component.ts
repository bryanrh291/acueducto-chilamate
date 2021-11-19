import { ViewChildren,ElementRef,Renderer2,Component, OnInit } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Noticia } from 'src/app/noticia/models/noticia.model';
import { NoticiasService } from '../../../core/services/noticias/noticias.service';

const ELEMENT_DATA:Noticia[] =[
  {
    id:'3i3M43YLRyKWquez6xlv', titulo:'tit',
    fecha:'fech1',descripcion:'desca',categoria:'cat1',
    imagenes:[
      'e',
      'a4',
      'o'],
    usuario:'kk'
  },
  {
    id:'6rkAczDwYPAeeMQD7Hx6', titulo:'tit',
    fecha:'fech1',descripcion:'desca',categoria:'cat1',
    imagenes:[
      'e',
      'a4',
      'o'],
    usuario:'kk'
  },
  {
    id:'7VMz0p8tRFFd41UIgbGm', titulo:'tit',
    fecha:'fech1',descripcion:'desca',categoria:'cat1',
    imagenes:[
      'e',
      'a4',
      'o'],
    usuario:'kk'
  },
  {
    id:'DbXOjNObaoK8aOidfM0m', titulo:'tit',
    fecha:'fech1',descripcion:'desca',categoria:'cat1',
    imagenes:[
      'e',
      'a4',
      'o'],
    usuario:'kk'
  },
  {
    id:'Il8p96iTffiKSEi1WAZD', titulo:'tit',
    fecha:'fech1',descripcion:'desca',categoria:'cat1',
    imagenes:[
      'e',
      'a4',
      'o'],
    usuario:'kk'
  },
  {
    id:'URY4oxUEa0HwiCskELb6', titulo:'tit',
    fecha:'fech1',descripcion:'desca',categoria:'cat1',
    imagenes:[
      'e',
      'a4',
      'o'],
    usuario:'kk'
  },
  {
    id:'URY4oxUEa0HwiCskELb6', titulo:'tit',
    fecha:'fech1',descripcion:'desca',categoria:'cat1',
    imagenes:[
      'e',
      'a4',
      'o'],
    usuario:'kk'
  },
];

@Component({
  selector: 'app-noticias-list',
  templateUrl: './noticias-list.component.html',
  styleUrls: ['./noticias-list.component.scss']
})
export class NoticiasListComponent implements OnInit {

  noticias = [...ELEMENT_DATA];

  displayedColumns: string[] = ['id','titulo','fecha','acciones'];

  constructor(
    private noticiasService:NoticiasService
  ) { }

  ngOnInit(): void {
    this.fetchNoticias();
  }

  fetchNoticias()
  {
    //this. = this.noticiasService.getAllNoticias();
    console.log('fetchNoticias this.noticias');
    console.log(this.noticias);
  }

  deleteNoticia(id:string)
  {
    //this.noticiasService.deleteNoticia(id);
  }

}
