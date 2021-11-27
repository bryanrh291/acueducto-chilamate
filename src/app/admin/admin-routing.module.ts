import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { NoticiaTabsComponent } from './components/noticia-tabs/noticia-tabs.component';
import { NoticiaEditComponent } from './components/noticia-edit/noticia-edit.component';

const routes: Routes = [
  {
    path:'',
    component:NavComponent,
    children:[
      {
        path:'',
        component:InicioComponent
      },
      {
        path:'noticias',
        component:NoticiaTabsComponent
      },
      {
        path:'noticias/update/:id',
        component:NoticiaEditComponent
      },
    ]
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
