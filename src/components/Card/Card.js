
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
  
  const IMAGE =
    'https://cdn.dsmcdn.com/mnresize/-/-//ty572/product/media/images/20221018/22/196846967/600147139/1/1_org_thumb.jpg';
  
  export default function Card() {
    return (
        <NavLink to='/products'>

      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
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
                backgroundImage: `url(${IMAGE})`,
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
              src={IMAGE}
              />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              Lech
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} color='black' fontWeight={500}>
              AŞURFMAN ÇAKMA NİKE
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text color='black' fontWeight={800} fontSize={'s'}>
                0.5ETH
              </Text>
              <Text fontSize={'4xl'} textDecoration={'line-through'} color={'gray.600'}>
                2ETH
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
              </NavLink>
    );
  }