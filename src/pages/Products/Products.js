import { useContext, useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { db } from "../../config/firestore";
import styles from "./products.module.scss"
import  { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import { LechContext } from "../../store/context";

const Products = () => {

    const [products, setProducts] = useState()
    const [users, setUsers] = useState()

    useEffect(()=> {
        const productsCollection = query(collection(db, 'Products'));
        
        onSnapshot(productsCollection, (snapshot) => {
           
            setProducts(snapshot.docs.map(product => {

                return {
                    id:product.id,
                    ...product.data()
                }
  
              }))
           
        })

        const usersCollection = query(collection(db, 'Users'));
        
        onSnapshot(usersCollection, (snapshot) => {
           
            setUsers(snapshot.docs.map(user => {

                return {
                    addr:user.addr,
                    ...user.data()
                }
  
              }))
           
        })

        
    },[])
    console.log(products)
    return(
        <div className={styles.products}>
            {products?.map(item => <Card item={item} images={item.images} price={item.price} colors={item.colors} category={item.category} description={item.description} name={item.name} size={item.size} supply={item.supply}/>)}
           
            {/* <Card img='https://cdn.dsmcdn.com/mnresize/1200/1800/ty521/product/media/images/20220902/9/168392987/557779557/1/1_org_zoom.jpg'></Card> */}
        </div>
    )

}

export default Products;