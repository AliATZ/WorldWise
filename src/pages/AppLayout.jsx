import SideBar from "../components/SideBar.jsx";
import styles from './AppLayout.module.css'
import Map from "../components/Map.jsx"

function App() {
    return <div className={styles.app}>
        <SideBar/>
        <Map/>
    </div>
}
export default App;