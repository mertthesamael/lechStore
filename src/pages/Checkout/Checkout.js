import { Box, Button, Checkbox, Flex, Grid, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea, useDisclosure } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Address from "../../components/Address/Address";
import BasketItem from "../../components/BasketItem/BasketItem";
import { LechContext } from "../../store/context";
import styles from "./checkout.module.scss";
import { Navigation, Pagination, Scrollbar, A11y, Parallax } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Checkout = () => {
  const { user,addressHandler,checkLogin } = useContext(LechContext);
  const navigate = useNavigate();
   const {isOpen, onOpen, onClose} = useDisclosure()
  

  useEffect(() => {
    
    
    /*if(user?.address[3]==undefined){
      onOpen()
    }
    else{
      onClose()
    }*/
  }, [user]);

  const formHandler = (e) => {
    // address, apartment, city,  district, name, no, zipcode
    
    e.preventDefault()
    console.log(e.target.address.value)
    console.log(user.uid)

    addressHandler(user.uid, e.target.address.value, e.target.apartment.value, e.target.city.value, e.target.district.value, e.target.name.value, e.target.no.value, e.target.zipcode.value)
    
  }

  return (
    <div className={styles.checkout}>
      <div className={styles.checkout__wrapper}>
        <Box
          display="flex"
          overflow="auto"
          p="0 1rem"
          flexDir="column"
          gap="5rem"
          h="100%"
          w="75%"
          textAlign={user?.basket?.length>0?'':"center"}
        >
          {user?.basket?.length>0?user?.basket?.map((item) => (
            <BasketItem item={item} />
          )):<Text color='white' fontSize='1.5rem'>You have nothing in your basket. So <NavLink style={{textDecoration:'underline'}} to='/products'>go shopping</NavLink>, i guess?</Text>}
        </Box>
        <Box borderLeft="3px solid white" display='flex' flexDir='column'  h='100%' w="25%">
        <Box color='white' h='100%'>

         <Flex p='1rem'>
            <Checkbox marginRight='1rem'></Checkbox>
            <Text fontSize='1.5rem'>I've accepted the things that i need to accept</Text>
         </Flex>
         <Flex p='1rem'>
         <Checkbox marginRight='1rem'></Checkbox>
            <Text fontSize='1.5rem'>I've accepted the things that i need to accept</Text>
         </Flex>
        </Box>
        <Box display='flex' alinItems='center' justifyContent='center' p='1rem'>
          <Swiper modules={[Pagination, Navigation, A11y]}
        
          navigation
        
        >
          <Modal isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent>
          <ModalHeader>Register an Address</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            

           <form onSubmit={formHandler}>
            <Flex flexDir={'column'} gap='2rem'>
            <Input name='name' placeholder="Address Name"></Input>
            <Textarea name='address' resize='none'></Textarea>
            <Input name='city' placeHolder='City'></Input>
            <Input name='district' placeHolder='District'></Input>
            <Flex>
            <Input name='no' placeholder='No'></Input>
            <Input name='apartment' placeholder='Apartment'></Input>
            </Flex>
            <Input name='zipcode' placeholder='Zipcode'></Input>
            <Flex m='1.5rem 0' justifyContent='flex-end'>

            <Button onClick={onClose} variant='ghost'>Close</Button>
            <Input w='' value='Register' type='submit' bgColor='#C31433' color='white' _hover={{backgroundColor:'#737373', color:'#C31433'}} mr={3}  >
            </Input>
            </Flex>
      </Flex>
           </form>
          </ModalBody>
        </ModalContent>
      </Modal>
          {user?.address?.map(addr => 
          <SwiperSlide>
          <Address name={addr.name} city={addr.city} apart={addr.apartment} address={addr.address} number={addr.no} code={addr.zipcode} district={addr.district}></Address>
          </SwiperSlide>)}
          
          <SwiperSlide>
          <Address></Address>
          </SwiperSlide>
          </Swiper>
        </Box>
        
        <Box borderTop='2px solid white' h='100%' display='flex' flexDir='column' m='2rem'justifyContent='space-evenly'>
          <Text fontSize='1.5rem' color='white'>{user.total+" TRY"}</Text>
            <Button h='4rem'>Pay</Button>
            <Button h='4rem'><Image marginRight='1rem' h='20px'src={require("../../assets/metamask.png")}/>Pay With Crypto</Button>
        </Box>
        </Box>
      </div>
    </div>
  );
};

export default Checkout;
