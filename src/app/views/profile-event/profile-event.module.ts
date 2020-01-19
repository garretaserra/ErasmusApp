import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileEventPageRoutingModule } from './profile-event-routing.module';

import { ProfileEventPage } from './profile-event.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileEventPageRoutingModule
  ],
  declarations: [ProfileEventPage]
})
export class ProfileEventPageModule {}
