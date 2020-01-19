import { observable, computed } from 'mobx';
import BackGroundMapStore from './BackGroundMapStore';
import MonitoringDataStore from './MonitoringDataStore';

export default class RootStore {
    @observable backGroundMapStore: BackGroundMapStore;
    @observable attributesStore: MonitoringDataStore;
    constructor(backGroundMapStore: BackGroundMapStore,
        attributesStore: MonitoringDataStore) {
        this.backGroundMapStore = backGroundMapStore;
        this.attributesStore = attributesStore;
    }
}
