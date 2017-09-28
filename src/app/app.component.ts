import { Component } from '@angular/core';
import { MarkerService } from './services/marker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MarkerService]
})
// Get it more here..https://angular-maps.com/api-docs/agm-core/components/AgmMap.html
export class AppComponent {

  // Zoom level
  zoom = 10;

  // start position
  lat = 42.858217;
  lng = -70.929990;

  markerName: string;
  markerLat: string;
  markerLng: string;
  markerDraggable: string;


  // Markers
  markers: Marker[];

  constructor(private _markerService: MarkerService) {
    this.markers = this._markerService.getMarkers();
  }

  clickedMarker(marker: Marker, index: number) {
    console.log('Clicked marker :' + marker.name);
  }

  mapClicked($event: any) {
    const newMarker: Marker = {
      name: 'Untitled',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    }

    this.markers.push(newMarker);
  }

  markerDragEnd(marker: Marker, $event: any) {
    console.log('Dragged marker : ', marker, $event);

    // const updatedMarker: Marker = {
    //   name: marker.name,
    //   lat: parseFloat(marker.lat),
    //   lng: parseFloat(marker.lng),
    //   draggable: false
    // }
    // const newLat = $event.coords.lat;
    // const newLng = $event.coords.lng;
  }

  addMarker() {
    let isDraggable = false;

    if (this.markerDraggable === 'yes') {
      isDraggable = true;
    }
    else {
      isDraggable = false;
    }

    let newMarker: Marker = {
      name: this.markerName,
      lat: parseFloat(this.markerLat),
      lng: parseFloat(this.markerLng),
      draggable: isDraggable
    }

    console.log(newMarker);

    this.markers.push(newMarker);
    this._markerService.addMarker(newMarker);

  }
}
interface Marker {
  name?: string;
  lat: number;
  lng: number;
  draggable: boolean
}
