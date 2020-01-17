import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosErasmusPageRoutingModule } from './datos-erasmus-routing.module';

import { DatosErasmusPage } from './datos-erasmus.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DatosErasmusPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [DatosErasmusPage]
})
export class DatosErasmusPageModule {}
