import { Box, Button, FormControl, Image, Input, Text } from "@chakra-ui/react";
import styles from "./login.module.scss";
import { useContext } from "react";
import { LechContext } from "../../store/context";
import LoginForm from "../../components/LoginForm/LoginForm";
import { NavLink, useLocation } from "react-router-dom";
import SignupForm from "../../components/SignupForm/SignupForm";

const Login = () => {
const location = useLocation()
console.log(location.pathname.slice(1))
  const ctx = useContext(LechContext)

  return (
    <div className={styles.login}>
      <div className={styles.login__wrapper}>
        <div className={styles.login__wrapper__form}>
         {location.pathname.slice(1) ==='login' && <LoginForm />}
         {location.pathname.slice(1) ==='signup' && <SignupForm></SignupForm>}
        </div>
        <div className={styles.login__wrapper__ctaSignup}>
        {location.pathname.slice(1) ==='login' &&<Text fontSize='larger' fontWeight='bold'>Don't have an account? <NavLink style={{color:'#C31433'}} to='/signup'>Sign up </NavLink> now.</Text>}
          </div>
      </div>
    </div>
  );
};

export default Login;
