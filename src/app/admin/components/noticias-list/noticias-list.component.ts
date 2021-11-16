import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/noticia/models/noticia.model';
import { NoticiasService } from '../../../core/services/noticias/noticias.service'

@Component({
  selector: 'app-noticias-list',
  templateUrl: './noticias-list.component.html',
  styleUrls: ['./noticias-list.component.scss']
})
export class NoticiasListComponent implements OnInit {

  noticias:Noticia[] = [];
  displayedColumns: string[] = ['id','título','fecha','acciones'];

  constructor(
    private noticiasService:NoticiasService
  ) { }

  ngOnInit(): void {
    this.fetchNoticias();
  }

  fetchNoticias()
  {
    /*this.noticiasService.getAllNoticias()
    .subscribe(noticias=>
      {
        this.noticias=noticias;
      });*/
  }

  deleteNoticia(id:string)
  {
    //this.noticiasService.deleteNoticia(id);
  }

}
