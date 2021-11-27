import { Component, OnInit } from '@angular/core';

export interface reglamento
{
  nombre:string,
  url:string
}

@Component({
  selector: 'app-reglamentos',
  templateUrl: './reglamentos.component.html',
  styleUrls: ['./reglamentos.component.scss']
})
export class ReglamentosComponent implements OnInit {

  reglamentos:reglamento[] = [
    {
      nombre:'Reglamento Asadas 2005',
      url:'https://drive.google.com/file/d/1WhbTeM6xy4CWggPncX6rIpIDG63Am5VU/view?usp=sharing'
    },
    {
      nombre:'Decreto Hidrantes mayo 2009',
      url:'https://drive.google.com/file/d/15yEsIat6tPNhhiAKNJ1GHg4nRvHpsRzS/view?usp=sharing'
    },
    {
      nombre:'Reglamento Asadas',
      url:'https://drive.google.com/file/d/1OxW299V62XgPum3AUcXoEwzgWc_wPAqA/view?usp=sharing'
    },
    {
      nombre:'Acuerdo junta directiva 2019',
      url:'https://drive.google.com/file/d/1Ird1mFunCBih7lREmjm0WKQSNSsxb7f-/view?usp=sharing'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
