import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import {
  Http,
  URLSearchParams,
  Response,
  Headers,
  RequestOptions
} from "@angular/http";

import "rxjs/add/operator/map";

/**
 * Generated class for the MarketplacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-marketplace",
  templateUrl: "marketplace.html"
})
export class MarketplacePage {
  listings: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http
  ) {
    this.http
      .get("../../assets/data/listings.json")
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        this.listings = data;
      });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad MarketplacePage");
  }
}
