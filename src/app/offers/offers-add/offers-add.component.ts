import { OffersService } from './../offers.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offers } from '../offers';


@Component({
  selector: 'app-offers-add',
  templateUrl: './offers-add.component.html',
  styleUrls: ['./offers-add.component.css']
})
export class OffersAddComponent implements OnInit {
  offer: Offers;
  constructor(private offerService: OffersService, private router: Router ) { 
    this.offer = <Offers>{};
  }

  ngOnInit() {
  }

  onSubmit(offer: Offers) {
    offer.id = null;
    this.offerService.addOffer(offer).subscribe(
      new_offer => {
        this.offer = new_offer;
        this.gotoOffersList();
      }
  
    );
  }

  gotoOffersList() {
    this.router.navigate(['/offers']);
  }
}
 