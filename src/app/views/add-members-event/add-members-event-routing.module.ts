import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMembersEventPage } from './add-members-event.page';

const routes: Routes = [
  {
    path: '',
    component: AddMembersEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMembersEventPageRoutingModule {}
