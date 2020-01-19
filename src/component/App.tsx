import React from 'react';
import './App.css';
import BackgroudMap from './atom/BackgroudMap';
import RootStore from '../store/RootStore';
import Button from '@material-ui/core/Button';
import PersistentDrawerLeft from './PersistentDrawerLeft'
import MonitoringCardItem from './molecule/MonitoringCardItem';
import { Container } from '@material-ui/core';
import BoardNavigationMonitoring from './organisms/boardnavigationmonitoring/BoardNavigationMonitoring';
import BoardMonitoringGrid from './organisms/boarmonitoringgrid/BoardMonitoringGrid';


export interface IAppProps {
  rootStore: RootStore
}

export default class App extends React.Component<IAppProps> {


  public render() {
    var lat: number = this.props.rootStore.backGroundMapStore.getLatLngTuple[0];
    return (
      <div>
        <PersistentDrawerLeft />
        <BoardNavigationMonitoring rootStore={this.props.rootStore}></BoardNavigationMonitoring>
        <BackgroudMap rootStore={this.props.rootStore} />
      </div>
    );
  }
}

