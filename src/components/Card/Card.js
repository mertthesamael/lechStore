
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
  
  const IMAGE =
    'https://cdn.dsmcdn.com/mnresize/-/-//ty572/product/media/images/20221018/22/196846967/600147139/1/1_org_thumb.jpg';
  
  export default function Card({img, item}) {
  
    
    const {id, category, colors, description, discount, images, name, price:solidPrice, size, supply} = item

    const [price, setPrice] = useState(solidPrice)

    useEffect(() => {
      if (discount.state){
        setPrice((solidPrice) - ((discount.amount / 100) * solidPrice))
      }
      
    },[])
    

    return (
        <NavLink to={'/'+id.replace(/\s+/g, '')}>

      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'90%'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                backgroundImage: `url(${images[0].img})`,
                filter: 'blur(15px)',
                zIndex: -1,
            }}
            _groupHover={{
                _after: {
                    filter: 'blur(20px)',
                },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={images[0].img}
              />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              Lech
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} color='black' fontWeight={500}>
              {name}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text color='black' fontWeight={800} fontSize={'3xl'}>
                {price +" TRY"}
              </Text>
              {discount.state &&
              <Text fontSize={'2xl'} textDecoration={'line-through'} color={'gray.600'}>
                {solidPrice+' TRY'}
              </Text>
              }
            </Stack>
          </Stack>
        </Box>
      </Center>
              </NavLink>
    );
  }