import { Box, Button, FormControl, Image, Input, Text } from "@chakra-ui/react";
import styles from "./login.module.scss";
import { useContext, useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { LechContext } from "../../store/context";

const Login = () => {
   
    const ctx = useContext(LechContext)
  const formHandler = (e) => {
    console.log(e.target.name.value)
    e.preventDefault();
    console.log("Form submitted");
    ctx.newUser(e,e.target.name.value,e.target.email.value,e.target.phone.value)
  };

  
  
  const [inputName, setInputName] = useState('')
  const [inputMail, setInputMail] = useState('')
  const [inputNumber, setInputNumber] = useState('')
  const loginPhase = () => {
    ctx.web3Connect()
  };
  const isErrorName = inputName === ''
  const isErrorMail = inputMail === ''
  const isErrorNumber = inputNumber === ''
  


  return (
    <div className={styles.login}>
      <div className={styles.login__wrapper}>
        <Box w="100%" textAlign="center">
          <Text color="#C31433">
            Your wallet is connected Since you are not signed in our database,
            we need communication info for contact in any case. So please fill
            the empty blanks
          </Text>
        </Box>
        <Formik>
          <Form onSubmit={formHandler}>
            <FormControl height='20rem' justifyContent='space-evenly' display="flex" flexDir="column">
              <Button bgColor={ctx.connected&&'#00C897'} onClick={loginPhase} size="lg">
                <Image
                  marginRight="1rem"
                  h="30px"
                  src={require("../../assets/metamask.png")}
                ></Image>
                <h1>{ctx.connected?ctx.userAddr:'Connect'}</h1>
              </Button>
              <Input isInvalid={isErrorName} onChange={(e) => setInputName(e.target.value)} value={inputName} name="name" placeholder="name"></Input>
              <Input isInvalid={isErrorMail} onChange={(e) => setInputMail(e.target.value)} value={inputMail} name="email" placeholder="e-mail"></Input>
              <Input isInvalid={isErrorNumber} onChange={(e) => setInputNumber(e.target.value)} value={inputNumber} name="phone" placeholder="phone" type={'tel'}></Input>
              <Button
                type="submit"
                _hover={{
                  color: "#C31433",
                  backgroundColor: "RGBA(0, 0, 0, 0.16)",
                }}
                bgColor="#C31433"
                color="white"
                size="lg"
              >
                Sign Up
              </Button>
            </FormControl>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
