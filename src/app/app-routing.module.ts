import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'pagina-inicial',
    pathMatch: 'full'
  },
  {
    path: 'pagina-inicial',
    loadChildren: () => import('./paginas/pagina-inicial/pagina-inicial.module').then( m => m.PaginaInicialPageModule)
  },
  {
    path: 'equipes',
    loadChildren: () => import('./paginas/equipes/equipes.module').then( m => m.EquipesPageModule)
  },
  {
    path: 'tipos',
    loadChildren: () => import('./paginas/tipos/tipos.module').then( m => m.TiposPageModule)
  },
  {
    path: 'apostas',
    loadChildren: () => import('./paginas/apostas/apostas.module').then( m => m.ApostasPageModule)
  },
  {
    path: 'campeonato',
    loadChildren: () => import('./paginas/campeonato/campeonato.module').then( m => m.CampeonatoPageModule)
  },
  {
    path: 'nacional',
    loadChildren: () => import('./paginas/nacional/nacional.module').then( m => m.NacionalPageModule)
  },
  {
    path: 'internacional',
    loadChildren: () => import('./paginas/internacional/internacional.module').then( m => m.InternacionalPageModule)
  },
  {
    path: 'moba',
    loadChildren: () => import('./paginas/moba/moba.module').then( m => m.MobaPageModule)
  },
  {
    path: 'fps',
    loadChildren: () => import('./paginas/fps/fps.module').then( m => m.FpsPageModule)
  },
  {
    path: 'esport',
    loadChildren: () => import('./paginas/esport/esport.module').then( m => m.EsportPageModule)
  },
  {
    path: 'luta',
    loadChildren: () => import('./paginas/luta/luta.module').then( m => m.LutaPageModule)
  },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
