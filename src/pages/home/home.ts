import { Component } from '@angular/core';
import { IonicPage } from '../../../node_modules/ionic-angular/umd';
import { NavController } from '../../../node_modules/ionic-angular/navigation/nav-controller';
import { MenuController } from '../../../node_modules/ionic-angular/components/app/menu-controller';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController, public menu:MenuController) {
  }

  
  ionViewWillEnter() {
  this.menu.swipeEnable(false);
  }
  ionViewDidLeave() {
  this.menu.swipeEnable(true);
  }
  login(){
    this.navCtrl.setRoot('CategoriasPage');
  }

}
