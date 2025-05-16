import {BrowserRouter, Route, Routes} from "react-router-dom";
import Product from "./pages/Product.jsx";
import Pricing from "./pages/pricing.jsx";
import HomePgae from "./pages/HomePgae.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

export default function App(){


    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePgae/>}/>
            <Route path="product" element={<Product/>}/>
            <Route path="pricing" element={<Pricing/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </BrowserRouter>
}