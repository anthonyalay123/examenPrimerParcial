import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OninputPageRoutingModule } from './oninput-routing.module';

import { OninputPage } from './oninput.page';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OninputPageRoutingModule,
    ComponentsModule
  ],
  declarations: [OninputPage]
})
export class OninputPageModule {}
