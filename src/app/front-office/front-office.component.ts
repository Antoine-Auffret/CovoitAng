import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import {SuiModule} from 'ng2-semantic-ui';

@Component({
  selector: 'app-front-office',
  templateUrl: './front-office.component.html',
  styleUrls: ['./front-office.component.css']
})

@Injectable()
export class FrontOfficeComponent {
  constructor(private http: Http){}
  valueRetour: any;
  //methode appelée à chaque appel du composant
  ngAfterViewInit(){
    this.doGET();
  }
  // methode réalisant l'appel au web service et insérant la réponse
  // dans une variable définie avant
  doGET() {
  console.log("GET");
  let url = `http://prjsym.cir3-frm-smf-ang-33/api/trajets`;
  //this.http.get(url).subscribe(res => console.log(res.json()));
  this.http.get(url).subscribe(res => this.valueRetour = res.json()['0']);
  }
}
