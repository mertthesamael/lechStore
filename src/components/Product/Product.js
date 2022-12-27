import { Image, Text, Button, useToast, SkeletonText,Skeleton, SkeletonCircle } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useGetData } from "../../hooks/useGetData";
import { LechContext } from "../../store/context";
import Select from "../Select/Select";
import styles from "./item.module.scss";
import { useNavigate } from "react-router-dom";


const Product = ({itemId}) => {

  
  const [selectedColor, setSelectedColor] = useState()
  const [selectedSize, setSelectedSize] = useState()
  const [alreadyIn, setAlreadyIn] = useState(false)
  const { data, isLoading, status } = useGetData(`/api/get/Products/${itemId}`)
  const {basketHandler, user} = useContext(LechContext)
  const navigate = useNavigate()
  const toast = useToast()

//Navigate to Not Found Page
if(data?.status == 404){
  navigate('/404')
}
  const addBasket = () => {
    if(alreadyIn===false&&selectedColor!=='Color'&&selectedSize!==undefined){

      basketHandler(user.uid, itemId,selectedSize,selectedColor,data?.data.price)
      toast({
        title: 'Success !',
        description: "Added to your basket !",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    }else{

      toast({
        title: 'Error',
        description: "Please select a size and color",
        status: 'error',
        duration: 3000,
        isClosable: true,
        position:'top'
      })
    }
  }

const getSelectedSize = (e) => {
  if(e.includes('Select')===false){

    return setSelectedSize(e)
  }
}
const getSelectedColor = (e) => {
  if(e.includes('color')==false){

    return setSelectedColor(e)
  }
}

  return (
    <div className={styles.product}>
      {data?.data.itemOfWeek&&<div className={styles.product__banner}>Item Of The Week</div>}
      <div className={styles.product__left}>
        <div className={styles.product__left__img}>
         {isLoading? <SkeletonCircle borderRadius='0' h='30rem' w='20rem'></SkeletonCircle> : <Image src={selectedColor?.includes('Color')==false? data?.data.images.filter(x=>x.color==selectedColor)[0]?.img:data?.data.images[0].img} />}
        </div>
      </div>
      <div className={styles.product__right}>
        <div className={styles.product__right__wrapper}>
          <div className={styles.product__right__title}>

            <h1>{data?.data.name || <Skeleton height='20px'/> }</h1>
            <div className={styles.product__right__select}>
              <Select size onGetSelected={getSelectedSize} placeholder="Select a size" list={data?.data.size} />
              <Select onGetSelected={getSelectedColor} placeholder="Color" list={data?.data.colors} />
            </div>
          </div>
          <div className={styles.product__right__desc}>
            <Text>
              {data?.data.description || <SkeletonText noOfLines={7}/>}
            </Text>
          </div>
          <div className={styles.product__right__cta}>
            <Text fontSize="25px" fontWeight="700" marginRight="2rem">
             {isLoading? <Skeleton height='20px'/> : data?.data.price + " TRY"}
            </Text>
            <Button
              onClick={addBasket}
              _hover={{
                color: "#C31433",
                backgroundColor: "RGBA(0, 0, 0, 0.16)",
              }}
              bgColor="#C31433"
              color="white"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
