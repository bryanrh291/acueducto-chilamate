import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiaFormComponent } from './components/noticia-form/noticia-form.component';
import { NavComponent } from './components/nav/nav.component'

const routes: Routes = [
  {
    path:'',
    component:NavComponent,
    children:[
      {
        path:'noticias/create',
        component:NoticiaFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
