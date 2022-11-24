import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { db } from "../../config/firestore";
import styles from "./products.module.scss"
import  { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";

const Products = () => {

    const [products, setProducts] = useState()

    useEffect(()=> {
        console.log(db)
        const productsCollection = query(collection(db, 'Products'));
        
        onSnapshot(productsCollection, (snapshot) => {
            console.log(snapshot.docs)
            setProducts(snapshot.docs.map(product => {

                return {
                    id:product.id,
                    ...product.data()
                }
  
              }))
           
        })

        
    },[])
    console.log(products)
    return(
        <div className={styles.products}>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>        
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    )

}

export default Products;