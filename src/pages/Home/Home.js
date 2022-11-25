import { Button } from "@chakra-ui/react";
import styles from "./Home.module.scss"
import { Fade, ScaleFade, Slide, SlideFade } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Spline from "@splinetool/react-spline";


const Home = () => {

    const [fade, setFade] = useState(false)

    useEffect(() => {
        setTimeout(() => {
           setFade(true) 
        }, 500);
    },[])

    return(
        <div className={styles.home}>
            <div className={styles.home__welcomer}>
            <Fade onDurationChange={2} in={fade} delay='22s'>
                <h1>There will be some coool fuckin <span>CTA TEXT !</span></h1>
                </Fade>

                <div className={styles.home__welcomer__logo}>
                    <img src={require("../../assets/0a76842e-7377-4517-af56-68aac2b41682.png")}/>
                </div>
            </div>
            <div className={styles.home__cta}>
                <div className={styles.home__cta__button}>
                   <Card img='https://cdn.dsmcdn.com/mnresize/-/-//ty572/product/media/images/20221018/22/196846967/600147139/1/1_org_thumb.jpg'/>
                </div>
            </div>
        </div>
    )

}


export default Home;