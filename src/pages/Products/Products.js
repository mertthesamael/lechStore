import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { db } from "../../config/firestore";
import styles from "./products.module.scss"
import  { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";

const Products = () => {

    const [products, setProducts] = useState()
    const [users, setUsers] = useState()

    useEffect(()=> {
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

        const usersCollection = query(collection(db, 'Users'));
        
        onSnapshot(usersCollection, (snapshot) => {
            console.log(snapshot.docs)
            setUsers(snapshot.docs.map(user => {

                return {
                    addr:user.addr,
                    ...user.data()
                }
  
              }))
           
        })

        
    },[])
    console.log(users)
    return(
        <div className={styles.products}>
            <Card img='https://cdn.dsmcdn.com/mnresize/-/-//ty572/product/media/images/20221018/22/196846967/600147139/1/1_org_thumb.jpg'></Card>
            <Card img='https://cdn.dsmcdn.com/mnresize/-/-//ty572/product/media/images/20221018/22/196846967/600147139/1/1_org_thumb.jpg'></Card>
            <Card img='https://cdn.dsmcdn.com/mnresize/1200/1800/ty521/product/media/images/20220902/9/168392987/557779557/1/1_org_zoom.jpg'></Card>
            <Card img='https://cdn.dsmcdn.com/mnresize/1200/1800/ty521/product/media/images/20220902/9/168392987/557779557/1/1_org_zoom.jpg'></Card>
            <Card img='https://cdn.dsmcdn.com/mnresize/1200/1800/ty538/product/media/images/20220922/17/178557788/575381746/1/1_org_zoom.jpg'></Card>
            <Card img='https://cdn.dsmcdn.com/mnresize/1200/1800/ty538/product/media/images/20220922/17/178557788/575381746/1/1_org_zoom.jpg'></Card>
            <Card img='https://cdn.dsmcdn.com/mnresize/1200/1800/ty463/product/media/images/20220629/10/131820248/509035304/1/1_org_zoom.jpg'></Card>
            <Card img='https://cdn.dsmcdn.com/mnresize/1200/1800/ty463/product/media/images/20220629/10/131820248/509035304/1/1_org_zoom.jpg'></Card>
            <Card img='https://cdn.dsmcdn.com/mnresize/1200/1800/ty70/product/media/images/20210216/18/63431410/141611601/2/2_org_zoom.jpg'></Card>
            <Card img='https://cdn.dsmcdn.com/mnresize/1200/1800/ty70/product/media/images/20210216/18/63431410/141611601/2/2_org_zoom.jpg'></Card>
            <Card img='https://cdn.dsmcdn.com/mnresize/1200/1800/ty70/product/media/images/20210211/23/62032767/136651342/3/3_org_zoom.jpg'></Card>
            <Card img='https://cdn.dsmcdn.com/mnresize/1200/1800/ty70/product/media/images/20210211/23/62032767/136651342/3/3_org_zoom.jpg'></Card>
            <Card img='https://cdn.dsmcdn.com/mnresize/1200/1800/ty549/product/media/images/20221004/21/186063643/589169618/6/6_org_zoom.jpg'></Card>
            <Card img='https://cdn.dsmcdn.com/mnresize/1200/1800/ty549/product/media/images/20221004/21/186063643/589169618/6/6_org_zoom.jpg'></Card>
            <Card img='https://cdn.dsmcdn.com/mnresize/1200/1800/ty521/product/media/images/20220902/9/168392987/557779557/1/1_org_zoom.jpg'></Card>        
            <Card img='https://cdn.dsmcdn.com/mnresize/1200/1800/ty521/product/media/images/20220902/9/168392987/557779557/1/1_org_zoom.jpg'></Card>
            <Card img='https://cdn.dsmcdn.com/mnresize/1200/1800/ty521/product/media/images/20220902/9/168392987/557779557/1/1_org_zoom.jpg'></Card>
            <Card img='https://cdn.dsmcdn.com/mnresize/1200/1800/ty521/product/media/images/20220902/9/168392987/557779557/1/1_org_zoom.jpg'></Card>
            <Card img='https://cdn.dsmcdn.com/mnresize/1200/1800/ty521/product/media/images/20220902/9/168392987/557779557/1/1_org_zoom.jpg'></Card>
        </div>
    )

}

export default Products;