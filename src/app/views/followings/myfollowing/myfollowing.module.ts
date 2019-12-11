import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyfollowingPageRoutingModule } from './myfollowing-routing.module';

import { MyfollowingPage } from './myfollowing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyfollowingPageRoutingModule
  ],
  declarations: [MyfollowingPage]
})
export class MyfollowingPageModule {}
