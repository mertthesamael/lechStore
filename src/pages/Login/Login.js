import { Box, Button, FormControl, Image, Input, Text } from "@chakra-ui/react";
import styles from "./login.module.scss";
import { useContext } from "react";
import { LechContext } from "../../store/context";
import LoginForm from "../../components/LoginForm/LoginForm";
import { NavLink } from "react-router-dom";

const Login = () => {

  const ctx = useContext(LechContext)

  return (
    <div className={styles.login}>
      <div className={styles.login__wrapper}>
        <div className={styles.login__wrapper__form}>
         <LoginForm />
        </div>
        <div className={styles.login__wrapper__ctaSignup}>
        <Text fontSize='larger' fontWeight='bold'>Don't have an account? <NavLink style={{color:'#C31433'}} to='/'>Sign up </NavLink> now.</Text>
          </div>
      </div>
    </div>
  );
};

export default Login;
