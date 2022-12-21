import {
  Box,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { currentUser, logOut } from "../../config/firestore";
import { LechContext } from "../../store/context";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const { onMenuState, user, menuState, onSetUser } = useContext(LechContext);

  const menuHandler = () => {
    return onMenuState(!menuState);
  };

  const handleLogout = async () => {
    await logOut();
    onSetUser(currentUser, false);
  };

  //useEffect hook for closing menu on blur
  useEffect(() => {
    const startEvent = (e) => {
      if (e.path[0].className.split(" ")[1] !== "menuicon") {
        return onMenuState(false);
      } else {
        return onMenuState(!menuState);
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
          <div className={styles.navbar__menu__bar + " menuicon"}></div>
        </div>
      </div>
      <NavLink to="/" className={styles.navbar__logo}>
        <img alt="lechlogo" src={require("../../assets/Save the Arts 1.png")} />
      </NavLink>
      {/* <div onClick={connect} className={styles.navbar__connect__button}>
            <div className={styles.navbar__connect__button__icon}>
            <img src={require("../../assets/metamask.png")}/>
            </div>
            <div className={styles.navbar__connect__button__text}>
            <h1>{ctx.connected? ctx.userAddr :'Connect'}</h1>
            </div>
          </div> */}
      <div className={styles.navbar__connect}>
        {user.loggedIn ? (
          <Box display="flex" position="relative" alignItems="center">
            <NavLink to='/checkout'>

            <Image
              marginRight="1rem"
              height="28px"
              src={require("../../assets/basket.png")}
              ></Image>
              </NavLink>
            <span className={styles.navbar__user__basket}>
              {user?.basket?.length}
            </span>
            <Menu>
              <MenuButton
                as={Button}
                _hover={{
                  color: "#C31433",
                  backgroundColor: "RGBA(0, 0, 0, 0.16)",
                }}
                bgColor="#C31433"
                color="white"
                p="1rem 3rem"
              >
                {user?.name}
              </MenuButton>
              <MenuList>
                <MenuItem bgColor="white"><NavLink to='/profile'>Profile</NavLink></MenuItem>
                <MenuItem onClick={handleLogout} bgColor="white">
                  Sign Out
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        ) : (
          <NavLink to="/login">
            <Button
              _hover={{
                color: "#C31433",
                backgroundColor: "RGBA(0, 0, 0, 0.16)",
              }}
              bgColor="#C31433"
              color="white"
              p="1rem 3rem"
            >
              Login
            </Button>
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Navbar;
