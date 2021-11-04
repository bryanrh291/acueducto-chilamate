import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { Noticia } from '../../models/noticia.model';
import { NoticiasService } from '../../../core/services/noticias/noticias.service';

@Component({
  selector: 'app-noticia-detail',
  templateUrl: './noticia-detail.component.html',
  styleUrls: ['./noticia-detail.component.scss']
})
export class NoticiaDetailComponent implements OnInit {

  noticia:Noticia = {id:'',categoria:'',fecha:'',descripcion:'',imagenes:[''],titulo:'',usuario:''};

  constructor(
    private route:ActivatedRoute,
    private noticiasService:NoticiasService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>
    {
      const id = params.id;
      const noti = this.noticiasService.getNoticia(id);
      if(noti !== undefined)
      {
        this.noticia = noti;
        console.log('no es indefinido');
      }
      else
      {
        console.log('es indefinido');
      }
    });
  }

}
