import { Component, OnInit } from '@angular/core';

export interface fundadores
{
  nombre:string,
  ci:string
}

const fundadores:fundadores[]=
[
  {nombre:'Ricardo Pérez Hernández',ci:'50124 0977'},
  {nombre:'Eliecer Guillen Duran',ci:'1 0393 0534'},
  {nombre:'Mario Castrillo Castrillo',ci:'5 0128 1002'},
  {nombre:'Emilia Carmona Quirós',ci:'5 0119 0108'},
  {nombre:'Manuel Pérez Jiménez',ci:'2 0220 0424'},
  {nombre:'Efraín Arroyo Castro',ci:'4 0100 0105'},

  {nombre:'Bolívar Hernández Marín',ci:'1 0395 0526'},
  {nombre:'Ovidio Solórzano Fonseca',ci:'2 0267 0437'},
  {nombre:'Faustino Gomez Calvo',ci:'9 0044 0804'},
  {nombre:'Enrique Alexis Rodríguez Villegas',ci:'4 0102 1260'},
  {nombre:'Gilberto Montero Padilla',ci:'9 0044 0804'},
  {nombre:'Álvaro Ulate Hidalgo',ci:'9 0049 0795'},

  {nombre:'Omar Porras Arias',ci:'5 0147 1160'},
  {nombre:'Bernal Hidalgo Artavia',ci:'4 0118 0657'},
  {nombre:'Eida Molina Castro',ci:'2 0300 0307'},
  {nombre:'María Socorro Gonzales',ci:'2 0456 0136'},
  {nombre:'Víctor Julio Jiménez',ci:'2 0307 0665'},
  {nombre:'Adllery Gomez Rojas',ci:'2 0476 0925'},

  {nombre:'Rosibel Rodríguez Soto',ci:'2 0297 0920'},
  {nombre:'Cristina huertas Arias',ci:'2 0299 0235'},
  {nombre:'Gilberto Rodríguez Barquero ',ci:'5 0147 1283'},
  {nombre:'Geovanny Camacho Méndez',ci:'6 0232 0004'},
  {nombre:'Yenny Castillo Castillo',ci:'5 0228 0783'},
  {nombre:'Gerardo Blanco Garita',ci:'1 0628 0832'},

  {nombre:'Daniel Rojas Portugués',ci:'7 055 0513'},
  {nombre:'Marlen Espinoza Alfaro',ci:'5 0168 0328'},
]

@Component({
  selector: 'app-nosotros-fundadores',
  templateUrl: './nosotros-fundadores.component.html',
  styleUrls: ['./nosotros-fundadores.component.scss']
})
export class NosotrosFundadoresComponent implements OnInit {

  fundadores = fundadores;
  constructor() { }

  ngOnInit(): void {
  }

}
