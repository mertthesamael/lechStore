import { Button, Image, Text } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import { useGetData } from "../../hooks/useGetData"
import styles from "./basketitem.module.scss"


const BasketItem = ({item}) => {

const {data:product} = useGetData("/api/get/Products/"+item)

    return(
        <NavLink to={"/"+product?.data.id.replace(/\s+/g, '')} className={styles.basketitem}>
            <div className={styles.basketitem__left}>
            <Image src={product?.data.images[0].img}></Image>
            </div>
            <div className={styles.basketitem__middle}>
                <Text>{product?.data.name}</Text>
                <Text noOfLines={[1,2]}>{product?.data.description}</Text>
            </div>
            <div className={styles.basketitem__right}>
            <Button
             _hover={{
                color: "#C31433",
                backgroundColor: "RGBA(0, 0, 0, 0.16)",
              }}
              bgColor="#C31433"
              color="white"
              p="1rem">X</Button>
            <Text fontSize='20px'>{product?.data.price+" TRY"}</Text>
            </div>
        </NavLink>
    )

}

export default BasketItem