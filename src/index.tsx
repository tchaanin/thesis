import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import * as serviceWorker from './serviceWorker';
import RootStore from './store/RootStore';

const backGroundMapStore = new BackGroundMapStore();
const attributeStore = new MonitoringDataStore(backGroundMapStore);
const rootStore = new RootStore(backGroundMapStore, attributeStore);

import 'leaflet/dist/leaflet.css';
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import 'leaflet';
import BackGroundMapStore from './store/BackGroundMapStore';
import MonitoringDataStore from './store/MonitoringDataStore';

ReactDOM.render(<App rootStore={rootStore} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
