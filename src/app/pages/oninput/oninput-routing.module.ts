import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OninputPage } from './oninput.page';

const routes: Routes = [
  {
    path: '',
    component: OninputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OninputPageRoutingModule {}
