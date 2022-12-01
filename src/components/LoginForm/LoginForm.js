import { Button, Input } from "@chakra-ui/react"
import { Form, Formik } from "formik"





const LoginForm = () => {

    return(
      
            <form>
            <Input placeholder="e-mail" type='mail'></Input>
            <Input placeholder="password" type='password'></Input>
            <Button _hover={{
                color: "#C31433",
                backgroundColor: "RGBA(0, 0, 0, 0.16)",
              }}
              bgColor="#C31433"
              color="white"
              w='5rem'
              h='3rem'
              >Login</Button>
              
            </form>
            
        
    )

}

export default LoginForm