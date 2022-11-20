import styles from "./navbar.module.scss"



const Navbar = () => {

    return(
    <div className={styles.navbar}>
        <div className={styles.navbar__logo}>
            <img alt='lechlogo' src={require("../../assets/Save the Arts 1.png")}/>
        </div>
        
    </div>
    )
}

export default Navbar;