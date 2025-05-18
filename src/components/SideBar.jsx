import styles from './Sidebar.module.css';
import AppNav from "./AppNav.jsx";
import Logo from "./Logo.jsx";
import {Outlet} from "react-router-dom";

function SideBar() {
    return <div className={styles.sidebar}>
        <Logo/>
        <AppNav/>

        <Outlet />

        <footer className={styles.footer}>
            <p className={styles.copyright}>
                &copy; CopyRight {new Date().getFullYear()} by World Wise inc.
            </p>
        </footer>
    </div>
}
export default SideBar;