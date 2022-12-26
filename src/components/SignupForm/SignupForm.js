import { Checkbox, Input, Text, useToast } from "@chakra-ui/react";
import { doc, setDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { register,db } from "../../config/firestore";
import { LechContext } from "../../store/context";
import "./signupform.module.scss";

const SignupForm = () => {
  const {onSetUser} = useContext(LechContext)
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState()
  const [error, setError] = useState({mail:false, password:false, msg:""});
  const toast = useToast()
  const nameHandler = (e) =>{
    setName(e.target.value)
  }
  const mailHandler = (e) => {
    setEmail(e.target.value)
  }
  const passwordHandler = (e) => {
    setPassword(e.target.value)
  }
  const signupHandler = async (e) => {
    e.preventDefault();
    const user = await register(email, password, name);
    if(user.accessToken){
      await onSetUser(user, true);
      
      await setDoc(doc(db,'Users', user.uid),{
        uid:user.uid,
        name:user.displayName,
        email:user.email,
        total:0
      })
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
      <form onSubmit={signupHandler}>
        <Text>{error.msg}</Text>
      <Input onChange={nameHandler} name='name' type="text" placeholder="Full Name"></Input>
      <Input onChange={mailHandler} isInvalid={error.mail} name='mail' type="mail" placeholder="Email Address"></Input>
      <Input onChange={passwordHandler}isInvalid={error.password} name='password' type="password" placeholder="Password"></Input>
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
        h="3rem"
        value='Sign Up'
      ></Input>
    </form>
  );
};

export default SignupForm;
