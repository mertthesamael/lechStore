import { Button } from "@chakra-ui/react";
import styles from "./Home.module.scss"
import { Fade, ScaleFade, Slide, SlideFade } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";


const Home = () => {

    const [fade, setFade] = useState(false)

    useEffect(() => {
        setTimeout(() => {
           setFade(true) 
        }, 1000);
    },[])

    return(
        <div className={styles.home}>
            <div className={styles.home__welcomer}>
            <Fade onDurationChange={2} in={fade} delay='22s'>
                <h1>There will be some coool fuckin <span>CTA TEXT !</span></h1>
                </Fade>

            </div>
            <div className={styles.home__cta}>
                <div className={styles.home__cta__button}>
                   <Card/>
                

                </div>
                <div className={styles.home__cta__logo}>
                    <img src={require("../../assets/0a76842e-7377-4517-af56-68aac2b41682.png")}/>
                </div>
            </div>
        </div>
    )

}


export default Home;