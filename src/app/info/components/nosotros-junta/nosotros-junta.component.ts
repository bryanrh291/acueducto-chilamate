import { Component, OnInit } from '@angular/core';

export interface miembroJunta
{
  nombre:string,
  cargo:string,
  correo:string,
  telefono:string,
  imagen:string
}

@Component({
  selector: 'app-nosotros-junta',
  templateUrl: './nosotros-junta.component.html',
  styleUrls: ['./nosotros-junta.component.scss']
})
export class NosotrosJuntaComponent implements OnInit {

  image_url = '../../../../assets/images/junta/';

  junta_directiva:miembroJunta[] =
  [
    {
      nombre:'Emilia Carmona Quirós',
      cargo:'Presidenta',
      correo: 'ecarmonaq@gmail.com',
      telefono:'',
      imagen:this.image_url.concat('emilia_carmona_quiroz.jpg')
    },
    {
      nombre:'Marcial Parra Arias',
      cargo:'Vicepresidente',
      correo: 'miriamph24@yahoo.com',
      telefono:'',
      imagen:this.image_url.concat('marcial_parra_arias.jpg')
    },

    {
      nombre:'Hannsel Snayth Diaz Parrales',
      cargo:'Secretario',
      correo: 'miriamph24@yahoo.com',
      telefono:'6129 1831',
      imagen:this.image_url.concat('hannsel_snayth_diaz_parrales.jpg')
    },
    {
      nombre:'Yoilyn María Durán Núñez',
      cargo:'Tesorera',
      correo: 'yoilindurannunes@gmail.com',
      telefono:'6073 1879',
      imagen:this.image_url.concat('yoilyn_maría_durán_núñez.jpg')
    },
    {
      nombre:'Evelyn Vargas Araya',
      cargo:'Vocal 1',
      correo: 'evyvargas@hotmail.com',
      telefono:'',
      imagen:this.image_url.concat('evelyn_vargas_araya.jpg')
    },
    {
      nombre:'Luis Roberto Cardenas Colombari',
      cargo:'Vocal 2',
      correo: 'ranchorobertos@hotmail.com',
      telefono:'',
      imagen:this.image_url.concat('luis_roberto_cardenas_colombari.jpg')
    },
    {
      nombre:'Luis Mario Aguilar Alvarado',
      cargo:'Vocal 3',
      correo: '',
      telefono:'8666 3310',
      imagen:this.image_url.concat('luis_mario_aguilar_alvarado.jpg')
    },
    {
      nombre:'Adelaida Castro Fernández',
      cargo:'Fiscal',
      correo: 'adelaida.cas.fer@gmail.com',
      telefono:'8392 3393',
      imagen:this.image_url.concat('adelaida_castro_fernández.jpg')
    },
    {
      nombre:'Álvaro Ulate Hidalgo',
      cargo:'Fiscal Suplente',
      correo: '',
      telefono:'8520 8113',
      imagen:this.image_url.concat('alvaro_ulate_hidalgo.jpg')
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
