import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LechContext } from "../../store/context";
import styles from "./navbar.module.scss"



const Navbar = () => {
    const ctx = useContext(LechContext)
    const menuHandler = () => {
        return(ctx.onMenuState(!ctx.menuState))
    }

    return(
    <header className={styles.navbar}>
        <NavLink to='/' className={styles.navbar__logo}>
            <img alt='lechlogo' src={require("../../assets/Save the Arts 1.png")}/>
        </NavLink>
        <div onClick={menuHandler} className={styles.navbar__menu}>
        <div className={styles.navbar__menu__bar}>

        </div>
        </div>
    </header>
    )
}

export default Navbar;