import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosTabsComponent } from './components/nosotros-tabs/nosotros-tabs.component';
import { ReglamentosComponent } from './components/reglamentos/reglamentos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { TransparenciaComponent } from './components/transparencia/transparencia.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';

const routes: Routes = [
  {
    path:'nosotros',
    component:NosotrosTabsComponent
  },
  {
    path:'reglamentos',
    component:ReglamentosComponent
  },
  {
    path:'servicios',
    component:ServiciosComponent
  },
  {
    path:'transparencia',
    component:TransparenciaComponent
  },
  {
    path:'proveedores',
    component:ProveedoresComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
