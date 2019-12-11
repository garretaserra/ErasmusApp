import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyfollowersPage } from './myfollowers.page';

const routes: Routes = [
  {
    path: '',
    component: MyfollowersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyfollowersPageRoutingModule {}
