import styles from './Map.module.css'
import {useNavigate, useSearchParams} from "react-router-dom";

function Map(){
    const navigate= useNavigate()
    const [searchPrams,setSearchPrams]=useSearchParams()
    const lat = searchPrams.get('lat');
    const lng = searchPrams.get('lng');
    return <div className={styles.mapContainer} onClick={()=>{navigate("form")}}>
        <h1>Position:{lat}, {lng}</h1>
        <button onClick={()=>{
            setSearchPrams({lat:23, lng:50})
        }}>Change pos</button>
    </div>
}
export default Map;