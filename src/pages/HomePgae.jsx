import {Link} from "react-router-dom";
import PageNav from "../components/PageNav.jsx";

function HomePgae(){
    return <div>
        <PageNav />
        <h1>World Wise</h1>
        <Link to='/pricing'>Pricing</Link>
    </div>
}
export default HomePgae