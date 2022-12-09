import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/Product/Product";
import { db } from "../../config/firestore";
import { useGetItem } from "../../hooks/useGetItem";
import styles from "./item.module.scss"



const Item = () => {
const {id} = useParams()
console.log(id)
console.log(decodeURI(id))
    return(
        <div className={styles.item}>
           <Product itemId={decodeURI(id)}></Product>
        </div>
    )

}


export default Item;