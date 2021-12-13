import { Component, AfterViewInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  private map: any = null;
  private popup: any = null;
  @Output() setLocation = new EventEmitter<any>();

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 14.0650, -87.1715 ],
      zoom: 10
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    this.popup = L.popup();
    this.map.on('click', (e:any) => {
      this.addNewItem(e.latlng)
      this.popup.setLatLng(e.latlng)
      .setContent( e.latlng.toString())
      .openOn(this.map);
    })
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  addNewItem(value: any) {
    this.setLocation.emit(value);
  }
}
