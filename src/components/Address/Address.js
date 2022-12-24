import { Box, Text } from "@chakra-ui/react";
import styles from "./address.module.scss";

const Address = ({ name, city, number, code, apart, address, district }) => {
  
  return (
    <Box
      w="100%"
      h="10rem"
      bgColor="white"
      borderRadius="10px"
      p='1rem'
      display='flex'
      flexDir='column'
      textTransform='capitalize'
      border='2px solid #C31433'
    >
      <Box marginBottom='0.3rem' display='flex'>
        <Text fontWeight='bolder'>{name}</Text>
      </Box>
      <Box display='flex' h='100%' w='100%'>
        <Text noOfLines={[1,2]} color='grey'>{address}</Text>
      </Box>
      <Box display='flex' h='100%' w='100%'>
        <Text color='grey'>{number + "/" + apart + "/" + code}</Text>
      </Box>
      <Box display='flex' h='100%' w='100%' alignItems='flex-end' justifyContent='flex-end'>
        <Text>{district + " / " + city}</Text>
      </Box>
    </Box>
  );
};

export default Address;
