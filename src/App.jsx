import {BrowserRouter, Route, Routes} from "react-router-dom";
import Product from "./pages/Product.jsx";
import Pricing from "./pages/pricing.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import Homepage from "./pages/Homepage.jsx";
import Login from "./pages/Login.jsx";
import CityList from "./components/CityList.jsx";
import {useEffect, useState} from "react";
import CountriesList from "./components/CountriesList.jsx";
import City from "./components/City.jsx";

const BASE_URL='http://localhost:9000';


export default function App(){
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(function (){
        async function fetchCities(){
            try {
                setIsLoading(true);
                const res = await fetch(`${BASE_URL}/cities`);
                const data = await res.json();
                console.log(data);
                setCities(data);
            }catch {
                // alert('could not load cities.');
            }finally {
                setIsLoading(false);
            }
        }
        fetchCities();
    },[])

    return <BrowserRouter>
        <Routes>
            <Route index element={<Homepage/>}/>
            <Route path="product" element={<Product/>}/>
            <Route path="pricing" element={<Pricing/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="app" element={<AppLayout/>}>
                <Route index element={<CityList cities={cities} isLoading={isLoading}/>}/>
                <Route path='cities' element={<CityList cities={cities} isLoading={isLoading} />}/>
                <Route path='cities/:id' element={<City/>}/>
                <Route path='countries' element={<CountriesList cities={cities} isLoading={isLoading} />}/>
                <Route path='form' element={<p>List of form</p>}/>
            </Route>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </BrowserRouter>
}

