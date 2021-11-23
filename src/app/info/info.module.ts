import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InfoRoutingModule } from './info-routing.module';
import { NosotrosTabsComponent } from './components/nosotros-tabs/nosotros-tabs.component';
import { NosotrosFundadoresComponent } from './components/nosotros-fundadores/nosotros-fundadores.component';
import { NosotrosEstructuraComponent } from './components/nosotros-estructura/nosotros-estructura.component';
import { ReglamentosComponent } from './components/reglamentos/reglamentos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { TransparenciaComponent } from './components/transparencia/transparencia.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { NosotrosContactoComponent } from './components/nosotros-contacto/nosotros-contacto.component';
import { MaterialModule } from '../material/material.module';
import { NosotrosJuntaComponent } from './components/nosotros-junta/nosotros-junta.component';


@NgModule({
  declarations: [
    NosotrosTabsComponent,
    NosotrosFundadoresComponent,
    NosotrosEstructuraComponent,
    ReglamentosComponent,
    ServiciosComponent,
    TransparenciaComponent,
    ProveedoresComponent,
    NosotrosContactoComponent,
    NosotrosJuntaComponent
  ],
  imports: [
    CommonModule,
    InfoRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class InfoModule { }
