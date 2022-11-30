import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LechContext } from "../../store/context";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const ctx = useContext(LechContext);
  const navigate = useNavigate();
  const menuHandler = () => {
    return ctx.onMenuState(!ctx.menuState);
  };

  const connect = async () => {

    ctx.web3Connect()
   
  }
  
  //useEffect hook for closing menu on blur
  useEffect(() => {
    const startEvent = (e) => {
      if (e.path[0].className.split(" ")[1] !== "menuicon") {
        return ctx.onMenuState(false);
      } else {
        return ctx.onMenuState(!ctx.menuState);
      }
    };
    document.body.addEventListener("click", startEvent);
    return () => {
      document.body.addEventListener("click", startEvent);
    };
  }, []);
  return (
    <header className={styles.navbar}>
      <div onClick={menuHandler} className={styles.navbar__menu}>
        <div className={styles.navbar__menuwrapper + " menuicon"}>
        <div className={styles.navbar__menu__bar + " menuicon"}>

        </div>
        </div>
      </div>
      <NavLink to="/" className={styles.navbar__logo}>
        <img alt="lechlogo" src={require("../../assets/Save the Arts 1.png")} />
      </NavLink>
      <div className={styles.navbar__connect}>
        <div onClick={connect} className={styles.navbar__connect__button}>
            <div className={styles.navbar__connect__button__icon}>
              <img src={require("../../assets/metamask.png")}/>
            </div>
            <div className={styles.navbar__connect__button__text}>
            <h1>{ctx.connected? ctx.userAddr :'Connect'}</h1>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
