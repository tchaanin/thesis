import * as React from 'react';
import { observer } from 'mobx-react';
import './BackgroudMap.css';
import Leaflet from 'leaflet'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import RootStore from '../../store/RootStore';


interface Props {
    rootStore: RootStore
}

interface State {
    height: number
}

@observer
export default class BackgroudMap extends React.Component<Props, State> {
    state = {
        height: 100
    }
    updateDimensions() {
        const height = window.innerWidth >= 990 ? window.innerHeight : 400
        this.setState({ height: height })
    }

    componentWillMount() {
        this.updateDimensions()
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions.bind(this))
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this))
    }


    render() {
        var myIcon = Leaflet.icon({
            iconUrl: require('./svg/boat.svg'),
            iconSize: [41, 41],
            iconAnchor: [20.5, 20.5],
            popupAnchor: [0, -41]
        })


        return (
            <div className='leaflet-container' style={{ height: this.state.height }} >
                <Map className="map"
                    center={this.props.rootStore.backGroundMapStore.getLatLngTuple}
                    zoom={this.props.rootStore.backGroundMapStore.getZoom}>
                    <TileLayer
                        attribution={'<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>'}
                        url="https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png"
                    />
                    <TileLayer
                        attribution={'Map data: &copy; <a href="http://www.openseamap.org">OpenSeaMap</a> contributors'}
                        url="https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png"
                    />
                    <Marker position={this.props.rootStore.backGroundMapStore.getLatLngTuple} icon={myIcon} />
                </Map>
            </div>
        )
    }
}
