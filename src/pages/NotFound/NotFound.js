import { Box, Button, Text } from "@chakra-ui/react"
import styles from "./notfound.module.scss"
import { NavLink } from "react-router-dom"


const NotFound = () => {

    return(
        <div className={styles.notFound}>
            <Text color='white' fontSize='30px'>4 0 4</Text>
            <Text color='white' fontSize='30px'>Oopps.. Looks like you lost :// </Text>
            
            <Button><NavLink to='/'>Home</NavLink></Button>
        

        </div>
    )

}

export default NotFound