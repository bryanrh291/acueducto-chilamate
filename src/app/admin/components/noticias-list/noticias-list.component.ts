import { ViewChildren,ElementRef,Renderer2,Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router'
import { Noticia } from 'src/app/noticia/models/noticia.model';
import { NoticiasService } from '../../../core/services/noticias/noticias.service';

@Component({
  selector: 'app-noticias-list',
  templateUrl: './noticias-list.component.html',
  styleUrls: ['./noticias-list.component.scss']
})
export class NoticiasListComponent implements OnInit {

  noticias:Noticia[] = [];

  displayedColumns: string[] = ['id','titulo','fecha','acciones'];

  constructor(
    private noticiasService:NoticiasService, private router:Router
  ) { }

  ngOnInit(): void {
    this.fetchNoticias();
  }

  fetchNoticias()
  {
    this.noticias = this.noticiasService.getAllNoticias();
    console.log('fetchNoticias this.noticias');
    console.log(this.noticias);
  }

  verDetalle(id:string)
  {
    this.router.navigate(['/noticias/'+id]);
  }

  deleteNoticia(id:string)
  {
    //this.noticiasService.deleteNoticia(id);
  }

  editNoticia(id:string)
  {
    this.router.navigate(['admin/noticias/update/'+id]);
  }

}
