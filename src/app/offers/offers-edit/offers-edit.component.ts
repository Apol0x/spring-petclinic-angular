import { Component, OnInit } from '@angular/core';
import { Offers } from '../offers';
import { OffersService } from '../offers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-offers-edit',
  templateUrl: './offers-edit.component.html',
  styleUrls: ['./offers-edit.component.css']
})
export class OffersEditComponent implements OnInit {
  offer: Offers;
  constructor(private offerService: OffersService, private route: ActivatedRoute, private router: Router) { 
    this.offer = <Offers>{};
  }

  ngOnInit() {
    const offerId = this.route.snapshot.params['id'];
    this.offerService.getOffersById(offerId).subscribe(
      offer => this.offer = offer)
  }

  onSubmit(offer: Offers) {
    var that = this;
    this.offerService.updateOffer(offer.id.toString(), offer).subscribe(
      res => this.gotoOfferDetail(offer)
    )
  }

  gotoOfferDetail(offer: Offers) {
    this.router.navigate(['/offers', offer.id]);
  }
}
