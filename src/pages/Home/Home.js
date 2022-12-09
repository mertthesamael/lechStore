import { Button } from "@chakra-ui/react";
import styles from "./Home.module.scss"
import { Fade, ScaleFade, Slide, SlideFade } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Spline from "@splinetool/react-spline";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../config/firestore";


const Home = () => {

    const [fade, setFade] = useState(false)
    const [products, setProducts] = useState()
    useEffect(() => {
        setTimeout(() => {
        const productsCollection = query(collection(db, 'Products'));
        onSnapshot(productsCollection, (snapshot) => {
           
            setProducts(snapshot.docs.map(product => {

                return {
                    id:product.id,
                    ...product.data()
                }
  
              }))
           
        })
          
           setFade(true) 
        }, 500);
    },[])
console.log(products)
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
                  {products&&<Card item={products[0]}/>}
                </div>
            </div>
        </div>
    )

}


export default Home;