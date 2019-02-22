import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Offers } from '../offers';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {
  errorMessage: string;
  offers: Offers[];

  constructor(private router: Router, private offerService: OffersService) { }

  ngOnInit() {
  }

}
