import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosErasmusPage } from './datos-erasmus.page';

const routes: Routes = [
  {
    path: '',
    component: DatosErasmusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosErasmusPageRoutingModule {}
