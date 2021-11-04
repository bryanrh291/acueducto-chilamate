import { Injectable } from '@angular/core';
import { Noticia } from '../../../noticia/models/noticia.model'

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  noticias: Noticia[]=[
    {
      id:'1',
      titulo:'Noticia 1',
      descripcion:'desc Noticia 1',
      imagenes:['https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg','https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg'],
      categoria:"",
      usuario:"",
      fecha: ""
    },
    {
      id:'2',
      titulo:'Noticia 2',
      descripcion:'desc Noticia 2',
      imagenes:['https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg','https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg'],
      categoria:"",
      usuario:"",
      fecha: ""
    },
    {
      id:'3',
      titulo:'Noticia 3',
      descripcion:'desc Noticia 3',
      imagenes:['https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg','https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg'],
      categoria:"",
      usuario:"",
      fecha: ""
    }
  ];

  constructor() { }

  getAllNoticias()
  {
    return this.noticias;
  }

  getNoticia(id:string)
  {
    return this.noticias.find(nt => id ===nt.id);
  }

}
