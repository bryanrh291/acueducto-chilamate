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

  noticia:Noticia = {id:'',categoria:'',fecha:'',descripcion:'',imagenes:[''],titulo:'',usuario:'',estado:true};
  noticias:Noticia[]=[this.noticia];

  constructor(
    private route:ActivatedRoute,
    private noticiasService:NoticiasService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>
    {
      const id = params.id;
      this.fetchNoticia(id);
    });
  }

  fetchNoticia(id:string)
  {
    this.noticiasService.getNoticia(id).then(result=>
      {
        this.noticia = result;
      });
  }

}
