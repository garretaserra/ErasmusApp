import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListEventsPage } from './list-events.page';

const routes: Routes = [
  {
    path: '',
    component: ListEventsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListEventsPageRoutingModule {}
