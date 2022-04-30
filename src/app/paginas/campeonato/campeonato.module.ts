import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampeonatoPageRoutingModule } from './campeonato-routing.module';

import { CampeonatoPage } from './campeonato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampeonatoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CampeonatoPage]
})
export class CampeonatoPageModule {}
