import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeolocationPageRoutingModule } from './geolocation-routing.module';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { GeolocationPage } from './geolocation.page';
import {Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: GeolocationPage
  }
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeolocationPageRoutingModule
  ],
  declarations: [GeolocationPage],
  providers: [Geolocation]
})
export class GeolocationPageModule {}
