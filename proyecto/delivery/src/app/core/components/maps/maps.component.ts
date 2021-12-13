import { Component, AfterViewInit, Input} from '@angular/core';
import * as L from 'leaflet';
import { icon, Marker } from 'leaflet';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = '';
const shadowUrl = '';
const iconDefault = icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [30, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements AfterViewInit {
  private map: any = null;
  @Input() location:any = {};

  private initMap(): void {
    this.map = L.map('map', {
      center: [ this.location.latitude, this.location.longitude ],
      zoom: 16
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    L.marker([this.location.latitude, this.location.longitude]).addTo(this.map);
  }
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void { 
    this.initMap();
  }

}
