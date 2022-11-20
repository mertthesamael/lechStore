import Navbar from "../../components/Navbar/Navbar";
import styles from "./header.module.scss"



const Header = () => {

    return(
        <div className={styles.header}>
            <Navbar />
        </div>
    )

}


export default Header;