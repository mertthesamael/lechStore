import { NavLink } from "react-router-dom";
import styles from "./navbar.module.scss"



const Navbar = () => {

    return(
    <header className={styles.navbar}>
        <NavLink to='/' className={styles.navbar__logo}>
            <img alt='lechlogo' src={require("../../assets/Save the Arts 1.png")}/>
        </NavLink>
        
    </header>
    )
}

export default Navbar;