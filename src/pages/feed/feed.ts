import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EstoqueProvider } from "../../providers/estoque/estoque";
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
  providers:[
    EstoqueProvider
  ]
})
export class FeedPage {
  public objeto_feed = {
    id_marca:	"1",
    id_marca_fipe:	"6",
    name_marca:	"audi",
    name_fipe_marca:	"audi",
    order_marca:	"2",
    key_marca:	"audi-6",
    tipo_veiculo:	"carros",
    data_criacao:	"2016-12-08 05:15:13",
    ativo:	"1"
  }

  public list_marcas = new Array<any>();

  public nome_novena:string = "Novena de Hoje";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public EstoqueProvider: EstoqueProvider ) {
    
  }

  /**
   * name
   */
  public getName() : string {
    return "Novena de Hoje";
  }

  ionViewDidLoad() {
    this.EstoqueProvider.getMarcas().subscribe(
      data=>{
        const response = (data as any);
        const obj_json = JSON.parse(response._body);

        this.list_marcas = obj_json;
        
        console.log(obj_json[0].name_marca);
      }, error => {
        console.log(error);
      }
      );
  }

}
