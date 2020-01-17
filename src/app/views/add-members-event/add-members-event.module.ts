import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMembersEventPageRoutingModule } from './add-members-event-routing.module';

import { AddMembersEventPage } from './add-members-event.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMembersEventPageRoutingModule
  ],
  declarations: [AddMembersEventPage]
})
export class AddMembersEventPageModule {}
