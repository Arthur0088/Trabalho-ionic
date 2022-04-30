import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsportPageRoutingModule } from './esport-routing.module';

import { EsportPage } from './esport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsportPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EsportPage]
})
export class EsportPageModule {}
