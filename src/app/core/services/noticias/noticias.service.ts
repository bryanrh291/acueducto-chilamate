import { Injectable, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { addDoc,doc, getDoc, collection, getDocs } from "firebase/firestore";
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

async function addNoticiaFs(noticia:Partial<Noticia>)
{
  const docRef = await addDoc(collection(db,"noticias"),
  {
    categoria:noticia.categoria,
    descripcion:noticia.descripcion,
    fecha:noticia.fecha,
    imagenes:noticia.imagenes,
    titulo:noticia.titulo,
    usuario:noticia.usuario,
    fecha_creacion:serverTimestamp()
  });

  return docRef;
}

async function getNoticiaFs(id:string) {
  noticia.splice(0,noticia.length);

  const docRef = doc(db,"noticias",id);
  const docSnap = await getDoc(docRef);
  let noti:Noticia;

  if(docSnap.exists())
  {
    const data = docSnap.data();
    noti = {
      id:docSnap.id,
      categoria:data.categoria,
      descripcion:data.descripcion,
      fecha:data.fecha,
      imagenes:data.imagenes,
      titulo:data.titulo,
      usuario:data.usuario
     };
  }
  else
  {
    noti = {
      id:'',
      categoria:'',
      descripcion:'',
      fecha:'',
      imagenes:[],
      titulo:'',
      usuario:''
     };
  }
  noticia.push(noti);
  return noti;
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
     return getNoticiaFs(id);
    }

   addNoticia(noticia:Partial<Noticia>)
   {
     return addNoticiaFs(noticia);
   }

}
