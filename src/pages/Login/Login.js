import { Box, Button, FormControl, Image, Input, Text } from "@chakra-ui/react";
import styles from "./login.module.scss";
import { db } from "../../config/firestore";
import { useContext, useEffect, useState } from "react";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
} from "firebase/firestore";
import { Form, Formik } from "formik";
import { LechContext } from "../../store/context";

const Login = () => {
    const ctx = useContext(LechContext)
  const formHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const [users, setUsers] = useState();

  const loginPhase = () => {};
  useEffect(() => {
    const usersCollection = query(collection(db, "Users"));

    onSnapshot(usersCollection, (snapshot) => {
      setUsers(
        snapshot.docs.map((user) => {
          return {
            addr: user.addr,
            ...user.data(),
          };
        })
      );
    });
  }, []);

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
              <Input placeholder="name"></Input>
              <Input placeholder="e-mail"></Input>
              <Input placeholder="phone"></Input>
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
