import * as React from 'react';
import ReactGridLayout, { Layout } from 'react-grid-layout';
import RootStore from '../../../store/RootStore';
import MonitoringCardItem from '../../molecule/MonitoringCardItem';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { observer } from 'mobx-react';
const ResponsiveGridLayout = WidthProvider(Responsive);

export interface IBoardMonitoringGridProps {
    rootStore: RootStore
}

@observer
export default class BoardMonitoringGrid extends React.Component<IBoardMonitoringGridProps> {

    render() {
        // layout is an array of objects, see the demo for more complete usage
        var layout1 = this.props.rootStore.attributesStore.getMonitoringCardModels.map((atributeIcon, index) => {
            return { i: (index) + "", x: index, y: index, w: 1, h: 2 }
        })
        var layouts = { lg: layout1 }
        return (
            <ResponsiveGridLayout
                className="layout"
                layouts={layouts}
                rowHeight={280}
                breakpoints={{ lg: 64, md: 64, sm: 64, xs: 64, xxs: 0 }}
                cols={{ lg: this.props.rootStore.attributesStore.getMonitoringCardModels.length, md: 10, sm: 6, xs: 4, xxs: 2 }}>
                {
                    this.props.rootStore.attributesStore.getMonitoringCardModels.map((atributeIcon, index) => {
                        return <div key={index + ""}><MonitoringCardItem attributeCardModel={atributeIcon} /></div>
                    })
                }
            </ResponsiveGridLayout>
        );
    }
    componentDidMount() {
        // fetch data and set state
    }
}
