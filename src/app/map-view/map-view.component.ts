import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet';

@Component({
  selector: 'app-map-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.css',
})
export class MapViewComponent implements AfterViewInit {
  private map: L.Map | undefined;

  constructor() {}

  ngAfterViewInit(): void {
    this.map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);

    // Custom icon for markers
    const customIcon = L.icon({
      iconUrl: 'assets/marker.svg',
      iconSize: [40, 40],
    });

    const placeNames = 'Form Location';

    // Random markers
    const markers = [];
    for (let i = 0; i < 15; i++) {
      const lat = 51.5 + Math.random() * 0.1 - 0.05;
      const lng = -0.09 + Math.random() * 0.1 - 0.05;
      const customMarker = L.marker([lat, lng], { icon: customIcon }).addTo(
        this.map
      );
      customMarker.bindPopup(placeNames).openPopup();
      markers.push(customMarker);
    }

    // Zoom out to fit all markers
    const group = L.featureGroup(markers);
    this.map.fitBounds(group.getBounds());
  }
}
