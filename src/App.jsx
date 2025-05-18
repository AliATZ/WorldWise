import {BrowserRouter, Route, Routes} from "react-router-dom";
import Product from "./pages/Product.jsx";
import Pricing from "./pages/pricing.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import Homepage from "./pages/Homepage.jsx";
import Login from "./pages/Login.jsx";

export default function App(){


    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="product" element={<Product/>}/>
            <Route path="pricing" element={<Pricing/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="app" element={<AppLayout/>}>
                <Route index element={<p>List of cities</p>}/>
                <Route path='cities' element={<p>List of cities</p>}/>
                <Route path='countries' element={<p>List of countries</p>}/>
                <Route path='form' element={<p>List of form</p>}/>
            </Route>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </BrowserRouter>
}