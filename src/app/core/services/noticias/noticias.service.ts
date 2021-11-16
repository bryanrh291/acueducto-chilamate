import { Injectable, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { environment } from '../../../../environments/environment';
import { Noticia } from '../../../noticia/models/noticia.model';

const firebaseApp = initializeApp(environment.firebase);
const db = getFirestore();
const noticias:Noticia[] = [];
const noticia: Noticia[] = [];

async function getNoticiasFs() {
  noticias.splice(0,noticias.length);
  const querySnapshot = await getDocs(collection(db, "noticias"));

  querySnapshot.forEach((doc) => {

    const data = doc.data();
    const noti:Noticia = {
      id:doc.id,
      categoria:data.categoria,
      descripcion:data.descripcion,
      fecha:data.fecha,
      imagenes:data.imagenes,
      titulo:data.titulo,
      usuario:data.usuario
     };
    noticias.push(noti);
  });

}

async function getNoticiaFs(id:string) {

  noticia.splice(0,noticias.length);

  const docRef = doc(db,"noticias",id);
  const docSnap = await getDoc(docRef);

  if(docSnap.exists())
  {
    const data = docSnap.data();
    const noti:Noticia = {
      id:docSnap.id,
      categoria:data.categoria,
      descripcion:data.descripcion,
      fecha:data.fecha,
      imagenes:data.imagenes,
      titulo:data.titulo,
      usuario:data.usuario
     };
    noticia.push(noti);
  }
  else
  {

    const noti:Noticia = {
      id:'',
      categoria:'',
      descripcion:'',
      fecha:'',
      imagenes:[],
      titulo:'',
      usuario:''
     };

     noticia.push(noti);
  }

  return noticia[0];

}


@Injectable({
  providedIn: 'root'
})

export class NoticiasService implements OnInit{
  constructor(
  ) {
   }

   ngOnInit(): void {
   }

   getAllNoticias()
   {
     getNoticiasFs();
     return noticias;
   }

   getNoticia(id:string)
   {
     getNoticiasFs();
     const data = noticias.find( noti => noti.id === id);

     if(data !== undefined)
     {
       return data;
     }
     else
     {
       getNoticiaFs(id).then(nt=> {
        console.log(nt);
        const ntp:Noticia = {
          id:nt.id,
          categoria:nt.categoria,
          descripcion:nt.descripcion,
          fecha:nt.fecha,
          imagenes:nt.imagenes,
          titulo:nt.titulo,
          usuario:nt.usuario
        };
        return ntp;
        });
       return noticia[0];

     };

   }

}
