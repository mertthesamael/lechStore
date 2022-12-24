import { Box, Button, Flex, Input, Text, useToast } from "@chakra-ui/react"
import { useContext, useState } from "react"
import Address from "../../components/Address/Address"
import BasketItem from "../../components/BasketItem/BasketItem"
import { LechContext } from "../../store/context"
import styles from "./profile.module.scss"
import Tilt from "react-parallax-tilt"


const Profile = () => {
const {user, userNameUpdate} = useContext(LechContext)
const [nameErr, setNameErr] = useState(false)
const [editName, setEditName] = useState(false)
const toast = useToast()

    const editNameHandler = () => {
        setEditName(!editName)
    }
    const nameHandler = (e) => {
        e.preventDefault()
        if(e.target.name.value==='' || e.target.name.value.charAt(0)===' ' || e.target.name.value.length<=2){
            setNameErr(true)
            toast({
                title: 'Please enter a valid name',
                status: 'error',
                duration: 9000,
                isClosable: true,
                position:'top-right',
                size:'lrg'
                
              })
        }
        else{
            
            setNameErr(false)
            console.log(e.target.name)
            userNameUpdate(user?.uid, e.target.name.value)
        }

    
    }

    return(
        <div className={styles.profile}>
            <Flex  p='2rem 0' gap='2rem' flexDir='column' h='80%' w='80%' bgColor='white' borderRadius='15px'>
            <Box w='100%' h='100%' textAlign='center'>
                <Text color='#C31433' fontWeight='bolder' fontSize='50px'>{user?.name}</Text>
            </Box>
            <Box display='flex' flexWrap='wrap' h='100%' w='100%' justifyContent='space-around'>
                <Flex m='0 0 2rem 0' p='0 2rem' pos={'relative'} justifyContent='center'  gap='2rem' flexDir='column' w='25rem' overflow='auto' h='35rem' bgColor='white' borderRadius='15px' >
                <Text top='1rem' position={'absolute'} color='#C31433' fontSize='30px'>Address List</Text>
                    {user?.address?.map(addr => <Tilt tiltMaxAngleX='10' tiltMaxAngleY='10' scale='1.1' className={styles.profile__addrTilt}> <Address name={addr.name} city={addr.city} apart={addr.apartment} address={addr.address} number={addr.no} code={addr.zipcode} district={addr.district} ></Address> </Tilt>)}
                </Flex>
                <Flex m='0 0 2rem 0' p='6rem 2rem 0 2rem'  pos={'relative'}  gap='2rem' flexDir='column' w='25rem' overflow='auto' h='35rem' bgColor='white' borderRadius='15px' >
                <Text top='1rem' position={'absolute'} fontSize='30px' color='#C31433'>Basket Items</Text>
                    {user?.basket?.map((item) => (
                        <Box borderRadius='10px' border='2px solid #C31433'>
            <BasketItem item={item} />
                        </Box>
          ))}
                </Flex>
                <Flex m='0 0 2rem 0' p='0 2rem' justifyContent='' flexDir='column' w='25rem' overflow='auto' h='35rem' bgColor='white' borderRadius='15px'>
                    <Flex flexDir='column' p='2rem' pos={'relative'} bgColor='white'>
                <Text top='1rem' position={'absolute'} color='#C31433' fontSize='30px'>Change Info</Text>
                        <Flex alignItems='center' gap='1rem'>

                        <Text fontSize='20px' m='3rem 0'>Name: {user?.name}</Text>
                        <Button  _hover={{
                  color: "#C31433",
                  backgroundColor: "RGBA(0, 0, 0, 0.16)",
                }}
                bgColor="#C31433"
                color="white"
                 onClick={editNameHandler}> Change</Button>
                        </Flex>
                        {editName&&<form onSubmit={nameHandler}>
                            <Input isInvalid={nameErr} placeholder='Enter your name here...' marginRight='1rem' name='name' type='text'></Input>
                            <Input border='2px solid #C31433!important' type='submit' value=' '></Input>
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