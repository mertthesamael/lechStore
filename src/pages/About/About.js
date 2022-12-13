import { Box, Text } from "@chakra-ui/react";
import styles from "./about.module.scss"
import { faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {

    return(
        <div className={styles.about}>
            <div className={styles.about__wrapper}>

            <Box>
                <Text fontSize='50px' fontWeight='600'>Lech Store</Text>
            </Box>
            <Box textAlign='center'>
                <Text fontSize='30px'>Lech Store e-commerce is an online shopping platform that offers a wide range of high-quality products at affordable prices. We strive to provide our customers with an easy and convenient shopping experience and are committed to delivering exceptional customer service.

We offer a secure online shopping platform and use industry-standard encryption to protect our customers' personal and payment information. We also offer a 100% satisfaction guarantee on all of our products and free shipping on orders over $50 within the United States.

At Lech Store e-commerce, we are passionate about helping our customers find the products they need and are always looking for new and exciting products to add to our platform. Thank you for choosing Lech Store e-commerce for your online shopping needs. We look forward to serving you.</Text>
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