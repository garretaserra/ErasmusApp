import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlobePage } from './globe.page';

const routes: Routes = [
  {
    path: '',
    component: GlobePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlobePageRoutingModule {}
