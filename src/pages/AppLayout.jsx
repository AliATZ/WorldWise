import SideBar from "../components/SideBar.jsx";
import styles from './AppLayout.module.css'
import Map from "../components/Map.jsx"
import User from "../components/User.jsx";

function App() {
    return <div className={styles.app}>
        <SideBar/>
        <Map/>
        <User/>
    </div>
}
export default App;