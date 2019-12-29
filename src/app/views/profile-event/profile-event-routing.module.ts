import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileEventPage } from './profile-event.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileEventPageRoutingModule {}
