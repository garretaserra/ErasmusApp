import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListEventsPageRoutingModule } from './list-events-routing.module';

import { ListEventsPage } from './list-events.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListEventsPageRoutingModule
  ],
  declarations: [ListEventsPage]
})
export class ListEventsPageModule {}
