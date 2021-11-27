import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { NoticiaFormComponent } from './components/noticia-form/noticia-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { NoticiasListComponent } from './components/noticias-list/noticias-list.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MaterialModule } from '../material/material.module';
import { LoginComponent } from './components/login/login.component';
import { NoticiaTabsComponent } from './components/noticia-tabs/noticia-tabs.component';
import { NoticiaEditComponent } from './components/noticia-edit/noticia-edit.component';
import { ImagePickerComponent } from './components/image-picker/image-picker.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NoticiaFormComponent, NavComponent, NoticiasListComponent, InicioComponent, LoginComponent, NoticiaTabsComponent, NoticiaEditComponent, ImagePickerComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ]
})
export class AdminModule { }
