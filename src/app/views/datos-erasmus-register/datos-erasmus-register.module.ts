import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosErasmusRegisterPageRoutingModule } from './datos-erasmus-register-routing.module';

import { DatosErasmusRegisterPage } from './datos-erasmus-register.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DatosErasmusRegisterPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [DatosErasmusRegisterPage]
})
export class DatosErasmusRegisterPageModule {}
