import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersListComponent } from './offers-list/offers-list.component';
import { OffersAddComponent } from './offers-add/offers-add.component';
import { OffersEditComponent } from './offers-edit/offers-edit.component';
import { OfferRoutingModule } from './offers-routing.module';
import { OffersService } from './offers.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OfferRoutingModule
  ],
  declarations: [OffersListComponent, OffersAddComponent, OffersEditComponent],
  providers: [OffersService]
})
export class OffersModule { }
