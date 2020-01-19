import { observable, computed } from 'mobx';
import MonitoringCardModel from '../model/MonitoringCardModel';
import BackGroundMapStore from './BackGroundMapStore';

export default class MonitoringDataStore {
    @observable keyToMonitoringCardModelMap: Map<String, MonitoringCardModel> = new Map();
    ws: WebSocket;

    constructor(backGroundMapStore: BackGroundMapStore) {
        this.ws = new WebSocket('ws://demo.signalk.org/signalk/v1/stream?subscribe=none')

        this.ws.onopen = () => {
            // on connecting, do nothing but log it to the console
            console.log('connected')
            // Construct a msg object containing the data the server needs to process the message from the chat client.
            var msg = { "context": "vessels.self", "subscribe": [{ "path": "*" }], "format": "delta", "policy": "instant" };

            // Send the msg object as a JSON-formatted string.
            this.ws.send(JSON.stringify(msg));
        }


        this.ws.onmessage = evt => {
            // listen to data sent from the websocket server
            const message = JSON.parse(evt.data)
            try {
                var key: String = message.updates[0].source.sentence
                var propertieName = message.updates[0].values[0].path;
                var value: any = message.updates[0].values[0].value;

                var sValue: String = 'T';

                if (key !== undefined && propertieName !== undefined && value !== undefined) {
                    if (key === 'GLL') {
                        var latitude = message.updates[0].values[0].value.latitude;
                        var longitude = message.updates[0].values[0].value.longitude;
                        backGroundMapStore.setLat(latitude)
                        backGroundMapStore.setLng(longitude)
                        sValue = 'N '.concat(latitude.toString(), ' \n ', 'E ', longitude.toString())
                    } else if (key === 'VDR') {
                        var setTru = message.updates[0].values[0].value.setTrue
                        var magnetic = message.updates[0].values[0].value.setMagnetic
                        var drift = message.updates[0].values[0].value.drift
                        sValue = 'True '.concat(setTru, ' \n ', 'Mag ', magnetic, ' \n ', 'Drift ', drift)

                    }
                    if (!isNaN(value)) {
                        value = Math.round(value * 80) / 80
                        sValue = JSON.stringify(value)
                    }

                    this.keyToMonitoringCardModelMap.set(key, new MonitoringCardModel(key, '@', sValue, propertieName))
                }

            } catch (e) {
                console.log("YO", e)
            }

        }

    }

    @computed
    get getMonitoringCardModels() {
        return Array.from(this.keyToMonitoringCardModelMap.values());
    }

}
