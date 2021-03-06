import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherProfilePageRoutingModule } from './other-profile-routing.module';

import { OtherProfilePage } from './other-profile.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        OtherProfilePageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [OtherProfilePage]
})
export class OtherProfilePageModule {}
