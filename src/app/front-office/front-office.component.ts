import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';

class Filter{
  text: string;
  type: string;
}

// Permet la réception des détails d'un trajet
class Details{
  valueRetour: any;
  url = "";
  urlDetails = "";
  constructor(private http: Http){
    this.url = "http://prjsymf.cir3-frm-smf-ang-33/api/trajets?id=";
  }
  getDetail(id){
    this.urlDetails = this.url.concat(id);
    this.http.get(this.urlDetails).subscribe(res => this.valueRetour = res.json()[0]);
  }
}

@Component({
  selector: 'app-front-office',
  templateUrl: './front-office.component.html',
  styleUrls: ['./front-office.component.css']
})

@Injectable()
export class FrontOfficeComponent {
  
  constructor(private http: Http){}
  valueRetour: any; // Liste des trajets ( filtré ou non )
  url: string; // URL de l'api
  filterType: string; // URL du type de l'api
  filterText: string; // URL du search de l'api
  filter = new Filter;
  detail = new Details(this.http); 
  //methode appelée à chaque appel du composant
  ngAfterViewInit(){
    this.show();
  }
  // methode réalisant l'appel au web service et insérant la réponse
  // dans une variable définie avant

  // Affiche les trajets selon les filtres
  show(){
    this.url = "http://prjsymf.cir3-frm-smf-ang-33/api/trajets";
    this.filterType = "?filter=";
    this.filterText = "&search=";
    
    if(this.filter.text != undefined){ // Fait correspondre le label à une valeur voulu par l'api
      switch(this.filter.type){
        case "Ville de départ":
          this.filter.type = "dep";
        break;
        case "Ville d'arrivée":
          this.filter.type = "arr";
        break;
        case "Ville de départ et d'arrivée":
          this.filter.type = "deparr";
        break;
      }
      this.filterType = this.filterType.concat(this.filter.type);
      this.filterText = this.filterText.concat(this.filter.text);
      this.url = this.url.concat(this.filterType,this.filterText);
      this.detail.getDetail("NULL"); // Remise à zero du tableau des détails
    }

    this.http.get(this.url).subscribe(res => this.valueRetour = res.json()[0]);

  }

}

