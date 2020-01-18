import {AfterContentInit, Component, OnInit, ViewChild} from '@angular/core';
import * as mapBox from 'mapbox-gl';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {StorageComponent} from '../../storage/storage.component';
import {User} from '../../models/User/user';
import {Event} from '../../models/Event/event';

@Component({
  selector: 'app-globe',
  templateUrl: './globe.page.html',
  styleUrls: ['./globe.page.scss'],
})
export class GlobePage implements OnInit, AfterContentInit {

  map: mapBox.Map;
  eventList: Event[];
  user: User;

  @ViewChild('mapElement', {static: true}) mapElement;

  constructor(public http: HttpClient, public storage: StorageComponent) {
    mapBox.accessToken = 'pk.eyJ1IjoiaGFubGV5d29vZCIsImEiOiJZcVlldnlRIn0.BHYD98R8UQQoUBLsNd8ksg';
  }

  async ngOnInit() {
      this.user = JSON.parse(this.storage.getUser());
      console.log(this.user._id);

      console.log(this.eventList);
  }

  ngAfterContentInit(): void {
    // This adds the map
    this.map = new mapBox.Map({
      // container id specified in the HTML
      container: 'mapElement',
      // style URL
      style: 'mapbox://styles/mapbox/streets-v11',
      // initial position in [long, lat] format
      center: [2.1734, 41.3851],
      // initial zoom
      zoom: 12,
      // scrollZoom: false
    });
    this.http.get<Event[]>(environment.apiUri + '/user/events/' + this.user._id).toPromise().then((data) => {
        data.forEach((item: Event) => {
            const el = document.createElement('img');
            el.src = '../../../assets/img/default_user.png';
            el.className = 'marker';
            const long = item.location.split(',')[0];
            const lat = item.location.split(',')[1];
            new this.map.Marker(el, {offset: [0, -23]})
                .setLngLat(long, lat)
                .addTo(this.mapElement);
        });
    });
    /*
    this.mapElement.on('load', () => {
      // This is where your '.addLayer()' used to be, instead add only the source without styling a layer
      this.mapElement.addSource('places', this.eventList);
      // Initialize the list
      buildLocationList(stores);

    });*/
  }
}

