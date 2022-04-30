import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsportPage } from './esport.page';

const routes: Routes = [
  {
    path: '',
    component: EsportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsportPageRoutingModule {}
