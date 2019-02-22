import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { OffersListComponent } from './offers-list/offers-list.component';
import { OffersAddComponent } from './offers-add/offers-add.component';
import { OffersEditComponent } from './offers-edit/offers-edit.component';

const ownerRoutes: Routes = [
  {path: 'offers', component: OffersListComponent},
  {path: 'offers/add', component: OffersAddComponent},
  {path: 'offers/:id', component: OffersEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(ownerRoutes)],
  exports: [RouterModule]
})

export class OfferRoutingModule {
}
