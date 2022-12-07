import { Checkbox, Input, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { register } from "../../config/firestore";
import "./signupform.module.scss";

const SignupForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState()
  const [error, setError] = useState({mail:false, password:false, msg:""});
  const toast = useToast()
  const loginHandler = async (e) => {
    e.preventDefault();
    setEmail(e.target.mail.value)
    setPassword(e.target.password.value)
    setName(e.target.name.value)
    const user = await register(email, password, name);
    if(user.accessToken){
      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
        
      })
    }
    if (user.includes("Firebase")) {
      setError(user.replace("Firebase:", " "));
      if (user.includes("email")) {
       setError({mail:true, msg:user})
      } else if (user.includes("password")) {
        setError({password:true, msg:user})

      }
    } else {
        setError({password:false, mail:false, msg:''})

    }
  };

  return (
      <form onSubmit={loginHandler}>
        <Text>{error.msg}</Text>
      <Input name='name' type="text" placeholder="Full Name"></Input>
      <Input isInvalid={error.mail} name='mail' type="mail" placeholder="Email Address"></Input>
      <Input isInvalid={error.password} name='password' type="password" placeholder="Password"></Input>
      <Input type="password" placeholder="Confirm Password"></Input>
      <Checkbox colorScheme="red">I've read the things idk</Checkbox>
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

export default SignupForm;
