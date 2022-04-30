import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MobaPageRoutingModule } from './moba-routing.module';

import { MobaPage } from './moba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MobaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MobaPage]
})
export class MobaPageModule {}
