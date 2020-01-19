import {AfterContentInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
declare var google;
@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit, AfterContentInit {

  latitude: any;
  longitude: any;
  @ViewChild('mapElement', {static: false}) mapNativeElement: ElementRef;
  constructor(
      // private geolocation: Geolocation
  ) { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    // this.geolocation.getCurrentPosition();
  }
  success(resp){
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
        center: {lat: -34.397, lng: 150.644},
        zoom: 6
      });
      const infoWindow = new google.maps.InfoWindow;
      const pos = {
        lat: this.latitude,
        lng: this.longitude
      };
      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
  }
}
