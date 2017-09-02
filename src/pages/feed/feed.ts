import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nome_novena:string = "Novena de Hoje";


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  /**
   * name
   */
  public getName() : string {
    return "Novena de Hoje";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

}
