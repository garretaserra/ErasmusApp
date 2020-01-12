import {AfterContentInit, Component, OnInit, ViewChild} from '@angular/core';
import * as mapBox from 'mapbox-gl';

@Component({
  selector: 'app-globe',
  templateUrl: './globe.page.html',
  styleUrls: ['./globe.page.scss'],
})
export class GlobePage implements OnInit, AfterContentInit {

  map: mapBox.Map;

  @ViewChild('mapElement', {static: true}) mapElement;

  constructor() {
    this.map.accessToken = 'pk.eyJ1IjoiaGFubGV5d29vZCIsImEiOiJZcVlldnlRIn0.BHYD98R8UQQoUBLsNd8ksg';
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    // This adds the map
    this.map = new mapBox.Map({
      // container id specified in the HTML
      container: 'map',
      // style URL
      style: 'mapbox://styles/mapbox/dark-v9',
      // initial position in [long, lat] format
      center: [-3.7495759, 40.4379332],
      // initial zoom
      zoom: 12,
      // scrollZoom: false
    });
  }
}

