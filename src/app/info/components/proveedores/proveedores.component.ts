import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Proveedor } from './model/proveedor.model';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss']
})
export class ProveedoresComponent implements OnInit {

  areas:string[] = [
    'Instalación de tubería para agua potable',
    'Instalación de válvulas certificadas para agua potable',
    'Instalación de Hidrantes conforme a la Ley de Hidrantes 8641',
    'Limpieza y pintura de infraestructuras'
  ];

  requisitos:string[] = [
    'Estar inscrito ante el Ministerio de Hacienda',
    'Constancia de estar inscrito y al día con la CCSS',
    'Disponibilidad de contar con póliza de riesgos',
    'Copia de la cedula física',
    'En casos de ser persona jurídica aportar personería al día y copia de la cédula del representante legal',
    'Constancia de conocimientos en Fontanería y relacionados',
    'Experiencia en las áreas por las que se registra',
    'Adjuntar nota con los datos para el contacto (Número de teléfono y correo electrónico)'
  ];

  form: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder,
  private _snackBar: MatSnackBar)
  {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm()
  {
    this.form = this.fb.group(
      {
        nombre_rep_legal:['',[Validators.required]],
        apellido_rep_legal:['',[Validators.required]],
        cedula_rep_legal:['',[Validators.required]],
        codigo_tel_rep_legal:['',[Validators.required]],
        numero_tel_rep_legal:['',[Validators.required]],
        nombre_emp:['',[Validators.required]],
        categoria_emp:['',[Validators.required]],
        direccion_calle:['',[Validators.required]],
        direccion_calle_ln2:['',[Validators.required]],
        ciudad:['',[Validators.required]],
        estado_provincia:['',[Validators.required]],
        codigo_tel_emp:['',[Validators.required]],
        numero_tel_emp:['',[Validators.required]],
        correo:['',[Validators.required]],
        arch_cedula_rep:['',[Validators.required]],
        arch_cedula_juri:['',[Validators.required]],
        arch_certif_ccss:['',[Validators.required]],
        arch_reg_min_hacienda:['',[Validators.required]],
        arch_personeria:['',[Validators.required]],
        arch_fontaneria:['',[Validators.required]],
        arch_experiencia:['',[Validators.required]],
      });
  }

  saveProveedor(event:Event)
  {
    event.preventDefault();
  }

}
