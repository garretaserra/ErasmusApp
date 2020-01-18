import {AfterContentInit, Component, OnInit, ViewChild} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {StorageComponent} from '../../storage/storage.component';
import {User} from '../../models/User/user';
import {Event} from '../../models/Event/event';
import {EventMap} from '../../models/Event/EventMap';
import {Feature} from '../../models/Event/Feature';
import {Properties} from '../../models/Event/Properties';
import {UserName} from '../../models/User/userName';

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
            title: item.description,
            type: item.type,
            date: item.eventDate,
            location: item.location,
            owner: item.owner as UserName,
            members: item.members as UserName[]
          } as Properties
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

    this.events.features.forEach((marker, i) => {
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
        // 3. Highlight listing in sidebar (and remove highlight for all other listings)
        const activeItem = document.querySelectorAll('[color=primary]');
        e.stopPropagation();
        if (activeItem[0]) {
          activeItem[0].removeAttribute('color');
        }

        const listing = document.getElementById('listing-' + i);
        listing.setAttribute('color', 'primary');
      });

    });
  }

  flyToMarker(marker: mapboxgl.Marker): void {
    this.map.flyTo({
      center: marker.geometry.coordinates,
      offset: [0, -100],
      zoom: 14
    });
  }

  createPopUp(currentFeature: mapboxgl.Marker): void {
    const popUps = document.getElementsByClassName('mapboxgl-popup');
    if (popUps[0]) { popUps[0].remove(); }

    const popup = new mapboxgl.Popup({closeOnClick: false})
        .setLngLat(currentFeature.geometry.coordinates)
        .setHTML('<h3>' + currentFeature.properties.title + '</h3>' +
            '<div>Type: ' + currentFeature.properties.type + '</div>' +
            '<div>Description: ' + currentFeature.properties.title + '</div>' +
            '<div>Date: ' + this.formatDate(currentFeature.properties.date) + '</div>' +
            // tslint:disable-next-line:max-line-length
            '<div>Owner: <a href="/other-profile/' + currentFeature.properties.owner._id + '"> '  + currentFeature.properties.owner.name + '</a></div>' +
            '<div>Members: ' + currentFeature.properties.members.length + '</div>' +
            // tslint:disable-next-line:max-line-length
            '<a href="//google.com/maps/search/' + currentFeature.geometry.coordinates[1] + ',' + currentFeature.geometry.coordinates[0] + '" target="_blank">View in Google Maps</a></div>'

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

  onItemListClick($event) {
    // Update the currentFeature to the store associated with the clicked link
    const clickedListing = this.events.features[$event.target.id.split('-')[1]];

    // 1. Fly to the point
    this.flyToMarker(clickedListing);

    // 2. Close all other popups and display popup for clicked store
    this.createPopUp(clickedListing);

    // 3. Highlight listing in sidebar (and remove highlight for all other listings)
    const activeItem = document.querySelectorAll('[color=primary]');

    if (activeItem[0]) {
      activeItem[0].removeAttribute('color');
    }
    $event.target.setAttribute('color', 'primary');
  }

  zeroPad(a: number) {
    const s = a.toString();
    if (s.length < 2) { return '0' + a; } else { return a; }
  }

  formatDate(timestamp: Date): string {
    const date = new Date(timestamp);
    const monthNames = [
      'Jan', 'Feb', 'Mar',
      'Apr', 'May', 'Jun', 'Jul',
      'Aug', 'Sep', 'Oct',
      'Nov', 'Dec'
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const hour = this.zeroPad(date.getHours());
    const min = this.zeroPad(date.getMinutes());
    return day + ' ' + monthNames[monthIndex] + ' ' + year + ' ' + hour + ':' + min;
  }
}
