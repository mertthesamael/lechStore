import {
  Alert,
  AlertDescription,
  AlertIcon,
  Input,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { login } from "../../config/firestore";
import { LechContext } from "../../store/context";

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
    <form onSubmit={loginHandler}>
      {error && (
        <Alert status="error">
          <AlertIcon />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Input
        isInvalid={mailErr}
        onChange={mailHandler}
        placeholder="e-mail"
        type="mail"
      ></Input>
      <Input
        isInvalid={passErr}
        onChange={passwordHandler}
        placeholder="password"
        type="password"
      ></Input>
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
      ></Input>
    </form>
  );
};

export default LoginForm;
