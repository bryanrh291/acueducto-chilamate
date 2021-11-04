import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { NoticiaDetailComponent } from './components/noticia-detail/noticia-detail.component';

const routes: Routes= [{
  path:'',
  component:NoticiasComponent
},
{
  path:':id',
  component:NoticiaDetailComponent
}];

@NgModule(
  {
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
  })
export class NoticiaRoutingModule
{

}
