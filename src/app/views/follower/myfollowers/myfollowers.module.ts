import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyfollowersPageRoutingModule } from './myfollowers-routing.module';

import { MyfollowersPage } from './myfollowers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyfollowersPageRoutingModule
  ],
  declarations: [MyfollowersPage]
})
export class MyfollowersPageModule {}
