import { Offers } from './offers';
import { HttpClient } from '@angular/common/http';
import { HandleError } from './../error.service';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Owner } from 'app/owners/owner';

@Injectable()
export class OffersService {

  private handlerError: HandleError;
  

  constructor(private httpClient: HttpClient) { }

  getOffers() {
    return this.httpClient.get<Offers[]>("http://localhost:9966/petclinic/api/offers");
  }
     
  getOffersById(offersId: string){
    return this.httpClient.get<Offers>("http://localhost:9966/petclinic/api/offers/" + offersId);
  }

  getOffersValid() {
    return this.httpClient.get<Offers[]>("http://localhost:9966/petclinic/api/offers/valid");
  }

  addOffer(offer: Offers){
    return this.httpClient.post<Offers>("http://localhost:9966/petclinic/api/offers/",offer);
  }

  updateOffer(offerId: string, offer: Offers){
    return this.httpClient.put<Offers>("http://localhost:9966/petclinic/api/offers/"+offerId,offer);
  }

  deleteOffer(offerId: string){
    return this.httpClient.delete<Offers>("http://localhost:9966/petclinic/api/offers/"+offerId);
  }
}
