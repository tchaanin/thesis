class BackGroundMapModel {
    lat: number;
    lng: number;
    zoom: number;
    constructor(
        lat: number,
        lng: number,
        zoom: number
    ) {
        this.lat = lat;
        this.lng = lng;
        this.zoom = zoom;
    }

}
export default BackGroundMapModel;