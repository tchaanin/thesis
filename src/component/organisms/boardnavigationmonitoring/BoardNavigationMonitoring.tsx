import * as React from 'react';
import RootStore from '../../../store/RootStore';
import './BoardNavigationMonitoring.css'
import BoardMonitoringGrid from '../boarmonitoringgrid/BoardMonitoringGrid';
import { observer } from 'mobx-react';


export interface IBoardNavigationMonitoringProps {
    rootStore: RootStore
}
@observer
export default class BoardNavigationMonitoring extends React.Component<IBoardNavigationMonitoringProps> {
    public render() {
        return (
            <div className="BoardNavigationMonitoring-layout">
                <BoardMonitoringGrid rootStore={this.props.rootStore}></BoardMonitoringGrid>
            </div>
        );
    }
}
