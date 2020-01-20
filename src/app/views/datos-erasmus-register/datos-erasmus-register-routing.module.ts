import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosErasmusRegisterPage } from './datos-erasmus-register.page';

const routes: Routes = [
  {
    path: '',
    component: DatosErasmusRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosErasmusRegisterPageRoutingModule {}
