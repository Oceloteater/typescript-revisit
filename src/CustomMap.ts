/// <reference types="@types/google.maps" />

export interface Mappable {
    markerContent(): string;
    location: {
        lat: number;
        lng: number;
    }
}
export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.initMap(divId).then();
    }
    /**
     * Init google maps
     *
     * @param divId
     * @type string
     */
    async initMap(divId: string): Promise<void> {
        const { Map } = await google.maps.importLibrary('maps') as google.maps.MapsLibrary;
        this.googleMap = new Map(document.getElementById(divId) as HTMLElement, {
            center: { lat: 0, lng: 0 },
            mapId: 'myMapId',
            zoom: 2
        });
    }
    /**
     * Place marker on map
     *
     * @param mappable
     * @type Mappable
     */
    async addMarker(mappable: Mappable): Promise<void> {
        const { AdvancedMarkerElement } = await google.maps.importLibrary('marker') as google.maps.MarkerLibrary;

        const marker = new AdvancedMarkerElement({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });
        const infoWindow = new google.maps.InfoWindow({
            content: mappable.markerContent()
        });
        marker.addListener('click', () => {
            infoWindow.open(this.googleMap, marker);
        });
    }
}