import {Link} from "react-router-dom";
import PageNav from "../components/PageNav.jsx";
import AppNav from "../components/AppNav.jsx";

function HomePgae(){
    return <div>
        <PageNav />
        <AppNav/>
        <h1>World Wise</h1>
        <Link to='/app'>Go to App</Link>
    </div>
}
export default HomePgae