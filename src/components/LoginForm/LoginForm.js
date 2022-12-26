import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Flex,
  Input,
  Text,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { login } from "../../config/firestore";
import { LechContext } from "../../store/context";
import styles from "./loginform.module.scss"
const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [mailErr, setMailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const { onSetUser } = useContext(LechContext);

  const mailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const [error, setError] = useState("");


  const loginHandler = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    
    if (user.accessToken) {
      await onSetUser(user, true);
    }

    if (user.includes("Firebase")) {
      setError(user.replace("Firebase:", " "));
      if (user.includes("email")) {
        setMailErr(true);
      } else if (user.includes("password")) {
        setPassErr(true);
      }
    } else {
      setPassErr(false);
      setMailErr(false);
    }
  };
  return (
    <form className={styles.loginForm} onSubmit={loginHandler}>
      {error && (
        <Alert status="error">
          <AlertIcon />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <Flex flexDir='column' w='100%' alignItems='flex-start'>
      <Text pos='relative' left='0.3rem' marginBottom='5px' fontWeight='bold'>Email</Text>
      <Input
        isInvalid={mailErr}
        onChange={mailHandler}
        placeholder="e-mail"
        type="mail"
        ></Input>
        </Flex>
        <Flex flexDir='column' w='100%' alignItems='flex-start'>
        <Text pos='relative' left='0.3rem' marginBottom='5px' fontWeight='bold'>Password</Text>

      <Input
        isInvalid={passErr}
        onChange={passwordHandler}
        placeholder="password"
        type="password"
        ></Input>
        </Flex>
      <Input
        type="submit"
        _hover={{
          color: "#C31433",
          backgroundColor: "RGBA(0, 0, 0, 0.16)",
        }}
        bgColor="#C31433"
        color="white"
        w="5rem"
        h="3rem"
        value='Login'
      ></Input>
    </form>
  );
};

export default LoginForm;
