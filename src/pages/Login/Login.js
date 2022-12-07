import { Text } from "@chakra-ui/react";
import styles from "./login.module.scss";
import { useContext, useEffect } from "react";
import { LechContext } from "../../store/context";
import LoginForm from "../../components/LoginForm/LoginForm";
import { NavLink, redirect, useLocation, useNavigate } from "react-router-dom";
import SignupForm from "../../components/SignupForm/SignupForm";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const ctx = useContext(LechContext);

  useEffect(() => {
      const user =  ctx.user.loggedIn
      if(user){
        return navigate('/')
      }
      console.log('test')
      
  },[ctx.user])

  return (
    <div className={styles.login}>
      <div className={styles.login__wrapper}>
        <div className={styles.login__wrapper__form}>
          {location.pathname.slice(1) === "login" && <LoginForm />}
          {location.pathname.slice(1) === "signup" && <SignupForm />}
        </div>
        <div className={styles.login__wrapper__ctaSignup}>
          {location.pathname.slice(1) === "login" && (
            <Text fontSize="larger" fontWeight="bold">
              Don't have an account?{" "}
              <NavLink style={{ color: "#C31433" }} to="/signup">
                Sign up{" "}
              </NavLink>{" "}
              now.
            </Text>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
