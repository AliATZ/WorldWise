import styles from './CityList.module.css'
import Spinner from "./Spinner.jsx";
import CityItem from "./CityItem.jsx";
import Message from "./Message.jsx";
import {useCities} from "../contexts/CitiesContext.jsx";

function CityList() {

    const {cities,isLoading} = useCities();
    if (isLoading) {
        <Spinner/>
    }

    if (!cities.length) {
        return <Message message='First Add Your City'/>
    }
    return <ul className={styles.cityList}>
        {cities.map((city) => (<CityItem city={city} key={city.id}/> ))}
    </ul>
}
export default CityList;