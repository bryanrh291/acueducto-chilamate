import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './admin.guard';

const routes: Routes =
[
  {
    path:'',
    component: LayoutComponent,
    children:
    [
      {
        path:'',
        redirectTo:'/inicio',
        pathMatch:'full',
      },

      {
        path: 'inicio',
        loadChildren: () => import ('./inicio/inicio.module').then(m=>m.InicioModule)
      },
      {
        path: 'noticias',
        loadChildren: () => import ('./noticia/noticia.module').then(m=>m.NoticiaModule)
      },
      {
        path: 'noticias/:id',
        loadChildren: () => import ('./noticia/noticia.module').then(m=>m.NoticiaModule)
      },
      {
        path: 'contacto',component:ContactoComponent,
      },
      {
        path: 'proveedores',component:ProveedoresComponent,
        canActivate:[AdminGuard]
      },
    ]
  },
  {
        path:'admin',
        loadChildren: () => import ('./admin/admin.module').then(m=>m.AdminModule)
  },
  {
        path: '**',component:PageNotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { preloadingStrategy:PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
