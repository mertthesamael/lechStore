import { doc, getDoc } from "firebase/firestore";
import { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/Product/Product";
import { db } from "../../config/firestore";

import styles from "./item.module.scss"



const Item = () => {
const {id} = useParams()
    return(
        <div className={styles.item}>
           
           <Product itemId={id}></Product>
           
        </div>
    )

}


export default Item;