import Product from "../../components/Product/Product";
import styles from "./item.module.scss"



const Item = () => {

    return(
        <div className={styles.item}>
           <Product></Product>
          
        </div>
    )

}


export default Item;