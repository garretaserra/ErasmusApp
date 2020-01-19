import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GlobePageRoutingModule } from './globe-routing.module';
import { GlobePage } from './globe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlobePageRoutingModule
  ],
  declarations: [GlobePage]
})
export class GlobePageModule {}
