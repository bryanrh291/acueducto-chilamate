import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../models/noticia.model';
import { NoticiasService } from '../../../core/services/noticias/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  noticias:Noticia[] = [];

  constructor(
    private noticiasService:NoticiasService
  ) { }

  ngOnInit(): void {
    this.noticias = this.noticiasService.getAllNoticias();
  }

}
