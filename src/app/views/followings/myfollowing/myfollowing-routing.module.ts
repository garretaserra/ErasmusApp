import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyfollowingPage } from './myfollowing.page';

const routes: Routes = [
  {
    path: '',
    component: MyfollowingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyfollowingPageRoutingModule {}
