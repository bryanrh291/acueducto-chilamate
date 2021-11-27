import { Component, OnInit } from '@angular/core';

export interface estados
{
  nombre:string,
  url:string
}

@Component({
  selector: 'app-transparencia',
  templateUrl: './transparencia.component.html',
  styleUrls: ['./transparencia.component.scss']
})
export class TransparenciaComponent implements OnInit {

  estados_financieros:estados[] = [
    {
      nombre:'Info-N°106-2021 ABRIL 2021',
      url:'https://drive.google.com/file/d/1QDMLC2HeiTAQMjCdTCeOpY4ql9YVMOU7/view?usp=sharing'
    },
    {
      nombre:'FQ1 Mayo 2021',
      url:'https://drive.google.com/file/d/1MonrAE6ap1kmscIU1Osmaxku8dplw_wB/view?usp=sharing'
    },
    {
      nombre:'FQ2 Mayo 2021',
      url:'https://drive.google.com/file/d/1IyhZBMPn0YidgW4yCQwKGmBZaUZ8lREM/view?usp=sharing'
    },
    {
      nombre:'Análisis Microbiológico 20/05/2021',
      url:'https://drive.google.com/file/d/1HKwdX8mBJMUfXmlMJe9kPAcd8Zp11M-6/view?usp=sharing'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
