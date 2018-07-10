import { Component } from '@angular/core';
import { IonicPage } from '../../../node_modules/ionic-angular/umd';
import { NavController } from '../../../node_modules/ionic-angular/navigation/nav-controller';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
