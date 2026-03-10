import Header from "./Header";
import Main from "./Main";
import styles from "../../styles/layout.module.css";

function Layout() {
    return (
        <div className={styles.layout}>
            <Header />
            <Main />
        </div>
    )
};

export default Layout;