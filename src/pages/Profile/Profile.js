import { Box, Flex, Input, Text } from "@chakra-ui/react"
import { useContext, useState } from "react"
import Address from "../../components/Address/Address"
import BasketItem from "../../components/BasketItem/BasketItem"
import { LechContext } from "../../store/context"
import styles from "./profile.module.scss"



const Profile = () => {
const {user, userNameUpdate} = useContext(LechContext)

const [editName, setEditName] = useState(false)

    const editNameHandler = () => {
        setEditName(!editName)
    }
    const nameHandler = (e) => {
        e.preventDefault()
       console.log(e.target.name)
        userNameUpdate(user?.uid, e.target.name.value)
    }

    return(
        <div className={styles.profile}>
            <Flex p='2rem 0' overflow='auto' gap='2rem' flexDir='column' h='80%' w='80%' bgColor='white' borderRadius='15px'>
            <Box w='100%' h='max-content' textAlign='center'>
                <Text fontSize='50px'>Mert Enercan</Text>
            </Box>
            <Box display='flex' flexWrap='wrap' h='100%' w='100%' justifyContent='space-around'>
                <Flex m='0 0 2rem 0' p='0 2rem' justifyContent='center'  gap='2rem' flexDir='column' w='25rem' h='100%' bgColor='#C31433'>
                    {user?.address.map(addr => <Address name={addr.name} city={addr.city} apart={addr.apartment} address={addr.address} number={addr.no} code={addr.zipcode} district={addr.district} ></Address>)}
                </Flex>
                <Flex m='0 0 2rem 0' p='0 2rem' justifyContent='center'  gap='2rem' flexDir='column' w='25rem' h='100%' bgColor='#C31433'>
                    {user?.basket?.map((item) => (
            <BasketItem item={item} />
          ))}
                </Flex>
                <Flex m='0 0 2rem 0' p='0 2rem' justifyContent='center' flexDir='column' w='25rem' h='100%' bgColor='#C31433'>
                    <Flex flexDir='column' p='2rem' bgColor='white'>
                        <Text>Name: {user?.name}<span onClick={editNameHandler}> Change</span></Text>
                        {editName&&<form onSubmit={nameHandler}>
                            <Input name='name' type='text'></Input>
                            <Input type='submit'></Input>
                            </form>
                            }
                    </Flex>
                </Flex>
            </Box>
            
            </Flex>
        </div>    
    )

}

export default Profile