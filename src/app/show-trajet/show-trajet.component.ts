import { Component } from '@angular/core';

@Component({
  selector: 'app-show-trajet',
  templateUrl: './show-trajet.component.html',
  styleUrls: ['./show-trajet.component.css']
})
export class ShowTrajetComponent {

  constructor() { }
  MyCtrl() {
    console.log("reload")
    window.location.reload();
  }
}
