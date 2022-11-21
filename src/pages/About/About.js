import { Box, Text } from "@chakra-ui/react";
import styles from "./about.module.scss"
import { faFacebook, faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const About = () => {

    return(
        <div className={styles.about}>
            <div className={styles.about__wrapper}>

            <Box>
                <Text fontSize='50px' fontWeight='600'>Lech Store</Text>
            </Box>
            <Box textAlign='center'>
                <Text fontSize='30px'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate</Text>
            </Box>
            <Box display='flex' justifyContent='space-evenly' w='100%'>
            <a href="https://www.instagram.com/enercanmert/" target={'_blank'}>
            <FontAwesomeIcon size='xl' icon={faInstagram} />
            </a>
            <a href="https://github.com/mertthesamael" target={'_blank'}>
            <FontAwesomeIcon size='xl' icon={faGithub} />
            </a>
            </Box>
            </div>
        </div>

    )

}

export default About;