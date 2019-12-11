import {AfterContentInit, Component, OnInit, ViewChild} from '@angular/core';
declare var google;

@Component({
  selector: 'app-globe',
  templateUrl: './globe.page.html',
  styleUrls: ['./globe.page.scss'],
})
export class GlobePage implements OnInit, AfterContentInit {
  map;
  @ViewChild('mapElement', {static: true}) mapElement;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    console.log("entra");
    this.map = new google.maps.Map(
        this.mapElement.nativeElement,
        {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
  }
}

