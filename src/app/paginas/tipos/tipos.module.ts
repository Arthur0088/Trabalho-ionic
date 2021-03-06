import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TiposPageRoutingModule } from './tipos-routing.module';

import { TiposPage } from './tipos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiposPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TiposPage]
})
export class TiposPageModule {}
