import { observable, computed } from 'mobx';
import BackGroundMapModel from '../model/BackGroundMapModel';
import { LatLngTuple } from 'leaflet';

export default class BackGroundMapStore {
    @observable backGroundMapModel: BackGroundMapModel;
    constructor() {
        this.backGroundMapModel = new BackGroundMapModel(23, 59, 15)
    }

    @computed
    get getLatLngTuple(): LatLngTuple {
        return [this.backGroundMapModel.lat, this.backGroundMapModel.lng];
    }

    @computed
    get getLat(): number {
        return this.backGroundMapModel.lat;
    }

    @computed
    get getLng(): number {
        return this.backGroundMapModel.lng;
    }

    @computed
    get getZoom(): number {
        return this.backGroundMapModel.zoom;
    }

    setLat(lat: number) {
        this.backGroundMapModel = new BackGroundMapModel(lat, this.backGroundMapModel.lng, this.backGroundMapModel.zoom);
    }
    setLng(lng: number) {
        this.backGroundMapModel = new BackGroundMapModel(this.backGroundMapModel.lat, lng, this.backGroundMapModel.zoom);
    }
    setZoom(zoom: number) {
        this.backGroundMapModel = new BackGroundMapModel(this.backGroundMapModel.lat, this.backGroundMapModel.lng, zoom);
    }
}
