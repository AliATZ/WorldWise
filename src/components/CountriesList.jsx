import styles from './CountryList.module.css'
import Spinner from "./Spinner.jsx";
import CityItem from "./CityItem.jsx";
import Message from "./Message.jsx";
import CountryItem from "./CountryItem.jsx";


function CountriesList({cities,isLoading}) {
    if (isLoading) {
        <Spinner/>
    }

    if (!cities.length) {
        return <Message message='First Add Your City'/>
    }

    const countries= cities.reduce((arr, city) => {
        if (!arr.map(el => el.country).includes(city.country)){
            return [...arr, {country: city.country, emoji:city.emoji}] ;
        }else return arr
    },[])


    return <ul className={styles.countryList}>
        {countries.map((country) => (<CountryItem country={country} key={country.country} /> ))}
    </ul>
}
export default CountriesList;