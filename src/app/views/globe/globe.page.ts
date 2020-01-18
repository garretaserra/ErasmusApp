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
      const el = document.createElement('img');
      el.className = 'marker';
      el.style.width = '20px';
      el.src = '../../../assets/icon/flag.svg';
      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el, {offset: [0, -23]})
          .setLngLat(marker.geometry.coordinates)
          .addTo(this.map);
      el.addEventListener('click', (e) => {
        // 1. Fly to the point
        this.flyToMarker(marker);
        // 2. Close all other popups and display popup for clicked store
        this.createPopUp(marker);
      });

    });
  }

  flyToMarker(marker: mapboxgl.Marker): void {
    this.map.flyTo({
      center: marker.geometry.coordinates,
      zoom: 14
    });
  }

  createPopUp(currentFeature: mapboxgl.Marker): void {
    const popUps = document.getElementsByClassName('mapboxgl-popup');
    if (popUps[0]) { popUps[0].remove(); }

    const popup = new mapboxgl.Popup({closeOnClick: false})
        .setLngLat(currentFeature.geometry.coordinates)
        .setHTML('<h3>' + currentFeature.properties.name + '</h3>' +
            '<div class="item i_age">Edad: <strong>' + currentFeature.properties.age + '</strong></div>' +
            '<div class="item i_title">' + currentFeature.properties.title + '</div>' +
            '<div class="item i_phone">Teléfono: <strong>' + currentFeature.properties.phone + '</strong></div>' +
            '<div class="item i_more"><a href="' + currentFeature.properties.profile + '" target="_blank">Ver perfil</a>' +
            // tslint:disable-next-line:max-line-length
            '<a href="//maps.google.com/?ll=' + currentFeature.properties.lat + ',' + currentFeature.properties.long + '" target="_blank">Abrir mapa</a></div>'

        )
        .addTo(this.map);

    popup.on('close', (e) => {
      this.flyDownClose();
    });
  }

  flyDownClose(): void {
    this.map.flyTo({
      center: this.map.center,
      zoom: 12
    });
  }

}
