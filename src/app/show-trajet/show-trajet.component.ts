import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-trajet',
  templateUrl: './show-trajet.component.html',
  styleUrls: ['./show-trajet.component.css']
})
export class ShowTrajetComponent implements OnInit {
  id:any;

  constructor(private maRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.maRoute.snapshot.paramMap.get('id');
  }
}
