import { Button, Image, Skeleton, SkeletonCircle, SkeletonText, Text } from "@chakra-ui/react"
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { useGetData } from "../../hooks/useGetData"
import { LechContext } from "../../store/context"
import styles from "./basketitem.module.scss"



const BasketItem = ({item}) => {

const {data:product, isLoading} = useGetData("/api/get/Products/"+item.id)
const {deleteItem, user} = useContext(LechContext)
const removeItem = (e) => {
deleteItem(user?.uid,item)
}
    return(
        <div className={styles.basketitem}>
            <div className={styles.basketitem__left}>
            {isLoading?<SkeletonCircle size='20'></SkeletonCircle>:<Image src={product?.data.images[0].img}></Image>}
            </div>
            <NavLink to={"/"+product?.data.id.replace(/\s+/g, '')}  className={styles.basketitem__middle}>
                <Text fontWeight='bolder'>{product?.data.name || <Skeleton height='20px' color='red' />}<span style={{color:'grey'}}>{` ${item.size} - ${item.color}`}</span></Text>
                <Text color='grey' noOfLines={[1,2]}>{product?.data.description || <SkeletonText  color='red' />}</Text>
            </NavLink>
            <div className={styles.basketitem__right}>
            <Button
             onClick={removeItem}
             _hover={{
                color: "#C31433",
                backgroundColor: "RGBA(0, 0, 0, 0.16)",
              }}
              bgColor="#C31433"
              color="white"
              size='sm'>X</Button>
            {isLoading?<Skeleton height='20px' color='red'/>:<Text fontSize='20px'>{product?.data.price+" TRY" }</Text>}
            </div>
        </div>
    )

}

export default BasketItem