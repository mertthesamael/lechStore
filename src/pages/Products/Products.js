import Card from "../../components/Card/Card";
import styles from "./products.module.scss"
import { useGetData  } from "../../hooks/useGetData";
import { Text } from "@chakra-ui/react";

const Products = () => {

    const {data, isLoading} = useGetData ("api/getAll/products")
   
    if(isLoading){
        return(
            <Text>There will be a loading spinner, i guess xD</Text>
        )
        
    }
    return(
        <div className={styles.products}>
            {data?.data?.map(item => <Card item={item} images={item.images} price={item.price} colors={item.colors} category={item.category} description={item.description} name={item.name} size={item.size} supply={item.supply}/>)}
           
            {/* <Card img='https://cdn.dsmcdn.com/mnresize/1200/1800/ty521/product/media/images/20220902/9/168392987/557779557/1/1_org_zoom.jpg'></Card> */}
        </div>
    )

}

export default Products;