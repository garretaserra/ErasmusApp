import {AfterContentInit, Component, OnInit, ViewChild} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {StorageComponent} from '../../storage/storage.component';
import {User} from '../../models/User/user';
import {Event} from '../../models/Event/event';
import {EventMap} from '../../models/Event/EventMap';
import {Feature} from '../../models/Event/Feature';

@Component({
  selector: 'app-globe',
  templateUrl: './globe.page.html',
  styleUrls: ['./globe.page.scss'],
})
export class GlobePage implements OnInit, AfterContentInit {

  map: mapboxgl.Map;
  user: User;
  events: EventMap = new EventMap('FeatureCollection', []);

  @ViewChild('mapElement', {static: true}) mapElement;

  constructor(public http: HttpClient, public storage: StorageComponent) {
    mapboxgl.accessToken = 'pk.eyJ1IjoiaGFubGV5d29vZCIsImEiOiJZcVlldnlRIn0.BHYD98R8UQQoUBLsNd8ksg';
  }

  async ngOnInit() {
    this.user = JSON.parse(this.storage.getUser());
    this.http.get<Event[]>(environment.apiUri + '/user/events/' + this.user._id).toPromise().then((data: Event[]) => {
      const features: Feature[] = [];
      data.forEach((item: Event) => {
        const feature: Feature = {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [
                +item.location.split(',')[1],
                +item.location.split(',')[0]
            ]
          },
          properties: {
            name: item.description,
            title: item.description
          }
        };
        features.push(feature);
      });
      this.events = new EventMap('FeatureCollection', features);
      console.log(this.events);
    }).then(() => this.buildMap());
  }

  ngAfterContentInit(): void {
    // This adds the map
    this.map = new mapboxgl.Map({
      // container id specified in the HTML
      container: 'mapElement',
      // style URL
      style: 'mapbox://styles/mapbox/streets-v11',
      // initial position in [long, lat] format
      center: [2.1734, 41.3851],
      // initial zoom
      zoom: 10,
      // scrollZoom: false
    });
  }

  buildMap() {
    this.map.on('load', (event) => {
      /// register source
      this.map.addSource('places', {
        type: 'geojson',
        data: this.events
      });
    });

    this.events.features.forEach((marker) => {
      // create a HTML element for each feature
      const markr = document.createElement('img');
      markr.className = 'marker';
      markr.style.width = '20px';
      markr.src = '../../../assets/icon/flag.svg';
      // make a marker for each feature and add to the map
      new mapboxgl.Marker(markr)
          .setLngLat(marker.geometry.coordinates)
          .addTo(this.map);
    });
  }
}

