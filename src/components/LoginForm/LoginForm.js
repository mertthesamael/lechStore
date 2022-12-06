import { Button, Input } from "@chakra-ui/react"
import { Form, Formik } from "formik"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { app, register } from "../../config/firestore";




const LoginForm = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [mailErr, setMailErr] = useState(false)
  const [passErr, setPassErr] = useState(false)
  const mailHandler = (e) => {
    setEmail(e.target.value)
  }
  const passwordHandler = (e) => {
    setPassword(e.target.value)
  }
 const [error, setError] = useState("")
    const loginHandler = async (e) => {
      e.preventDefault()

        const user = await register(email,password,"Merto")
        console.log(user)
       if(user.includes('Firebase')){
        setError(user.replace("Firebase:", " "))
        if(user.includes('email')){
          setMailErr(true)
        }
        else if(user.includes('password')){
          setPassErr(true)
        }
       }
       else{
        setPassErr(false)
        setMailErr(false)

       }
      
    }
    return(
      
            <form onSubmit={loginHandler}>
            <Input isInvalid={mailErr} onChange={mailHandler} placeholder="e-mail" type='mail'></Input>
            {error}
            <Input isInvalid={passErr} onChange={passwordHandler}placeholder="password" type='password'></Input>
            <Input type='submit' _hover={{
                color: "#C31433",
                backgroundColor: "RGBA(0, 0, 0, 0.16)",
              }}
              bgColor="#C31433"
              color="white"
              w='5rem'
              h='3rem'
              ></Input>
              
            </form>
            
        
    )

}

export default LoginForm