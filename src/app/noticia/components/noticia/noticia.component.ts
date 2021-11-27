import { Component,Input, OnInit } from '@angular/core';
import { Noticia } from '../../models/noticia.model';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss']
})
export class NoticiaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() noticia: Noticia = {
    id:'1',
    titulo:'Noticia del Componente',
    descripcion:'desc Noticia 1',
    imagenes:['https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg','https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg'],
    categoria:"",
    usuario:"",
    fecha: "",
    estado:true
  };

}
