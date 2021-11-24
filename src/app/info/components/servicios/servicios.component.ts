import { Component, OnInit } from '@angular/core';

export interface servicio
{
  nombre:string,
  enlace:string
}

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  servicios:servicio[]=
  [
    {
      nombre:'Contrato de Prevista',
      enlace:'https://mega.nz/file/j7BTlKIB#yrQ54LeXVwEH5_xnFcnWrHMHxfOOPZycjJbtVEAna74'
    },
    {
      nombre:'Eliminación o suspensión',
      enlace:'https://mega.nz/file/H7QhwaZL#urKOe9jezjM_KodZTFF46z2pEtOokxnHS_UUWzDIo6A'
    },
    {
      nombre:'Formulario para cambio de nombre',
      enlace:'https://mega.nz/file/zjIDhAZY#U2LDHkmYqshX2xGh8ZLhpfHHsgwaFtDp17cDJN85qTY'
    },
    {
      nombre:'Solicitud de disponibilidad',
      enlace:'https://mega.nz/file/3jITjCZY#6JYVVHPS_igDhPZ1x05Oo7QbnbQXBAUZ1KD6Blt9g3M'
    },
    {
      nombre:'Solicitud de afiliación',
      enlace:'https://mega.nz/file/H2IFmYwb#FQxTLAtr1JZzQ6y_rzl_MZtJS6h5E0yY2ELr2pPKNjA'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
