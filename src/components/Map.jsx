import styles from './Map.module.css'
import {useNavigate, useSearchParams} from "react-router-dom";
import {MapContainer, TileLayer,Marker,Popup} from "react-leaflet";
import {useState} from "react";

function Map(){
    const navigate= useNavigate()
    const [mapPosition, setMapPosition] = useState([40,0])
    const [searchPrams,setSearchPrams]=useSearchParams()
    const lat = searchPrams.get('lat');
    const lng = searchPrams.get('lng');
    return <div className={styles.mapContainer} onClick={()=>{navigate("form")}}>
        <MapContainer center={mapPosition} zoom={13} scrollWheelZoom={false} className={styles.map}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={mapPosition}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    </div>
}
export default Map;