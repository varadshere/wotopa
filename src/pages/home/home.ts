import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cards: any;
  category: string = 'posts';

  constructor(public navCtrl: NavController) {

    this.cards = new Array(10);

  }

}
