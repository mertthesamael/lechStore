import { Box } from "@chakra-ui/react"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import BasketItem from "../../components/BasketItem/BasketItem"
import { LechContext } from "../../store/context"
import styles from "./checkout.module.scss"



const Checkout = () => {

    const {user} = useContext(LechContext)
    const navigate = useNavigate()
    
    useEffect(() => {
        if(user.loggedIn==false){
          return navigate('/login')
        }
        console.log('test')
        
    },[user])

    return(
        <div className={styles.checkout}>
        <div className={styles.checkout__wrapper}>
        <Box display='flex' overflow='auto' p='0 1rem' flexDir='column' gap='5rem' h='100%' w='75%'>
            {user?.basket?.map(itemId => <BasketItem item={itemId}/>)}
        </Box>
        <Box borderLeft='3px solid white' bgColor='orange' h='100%' w='25%'>

        </Box>
        </div>
        </div>
    )

}

export default Checkout