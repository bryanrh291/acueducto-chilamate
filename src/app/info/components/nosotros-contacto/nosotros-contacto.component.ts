import { Component, OnInit } from '@angular/core';

export interface mail
{
  name:string,
  mail:string
}

@Component({
  selector: 'app-nosotros-contacto',
  templateUrl: './nosotros-contacto.component.html',
  styleUrls: ['./nosotros-contacto.component.scss']
})
export class NosotrosContactoComponent implements OnInit {

  mails:mail[] =
  [
    {name:'Asistente',mail:'asistente@asadachilamate.com'},
    {name:'Gerencia',mail:'gerencia@asadachilamate.com'},
    {name:'Proveduria',mail:'proveeduria@asadachilamate.com'},
    {name:'Documentos',mail:'documentos@asadachilamate.com'},
    {name:'Residencia',mail:'residencia@asadachilamate.com'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
