import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MypostsPage } from './myposts.page';

const routes: Routes = [
  {
    path: '',
    component: MypostsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MypostsPageRoutingModule {}
