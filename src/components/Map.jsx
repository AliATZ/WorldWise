import styles from './Map.module.css'
import {useNavigate, useSearchParams} from "react-router-dom";
import {MapContainer, TileLayer,Marker,Popup} from "react-leaflet";
import {useState} from "react";
import {useCities} from "../contexts/CitiesContext.jsx";

function Map(){
    const navigate= useNavigate()
    const {cities} =useCities()

    const [mapPosition, setMapPosition] = useState([40,0])
    const [searchPrams,setSearchPrams]=useSearchParams()
    const lat = searchPrams.get('lat');
    const lng = searchPrams.get('lng');
    return <div className={styles.mapContainer} onClick={()=>{navigate("form")}}>
        <MapContainer center={mapPosition} zoom={13} scrollWheelZoom={true} className={styles.map}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {cities.map((city) => (
            <Marker position={[city.position.lat ,city.position.lng]} key={city.id}>
                <Popup>
                    <span>{city.emoji}</span>
                    <span>{city.cityName}</span>
                </Popup>
            </Marker>))}
        </MapContainer>
    </div>
}
export default Map;