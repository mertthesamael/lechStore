import { Image, Text, Button } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useGetData } from "../../hooks/useGetData";
import { LechContext } from "../../store/context";
import Select from "../Select/Select";
import styles from "./item.module.scss";

const Product = ({itemId}) => {
  const size = ["XS", "S", "M", "L", "XL", "XXL"];
  
  
  const [selectedColor, setSelectedColor] = useState()
  
  const { data } = useGetData(`/api/get/Products/${itemId}`)
  const {basketHandler, user} = useContext(LechContext)

  const addBasket = () => {
    console.log(itemId, user.uid)
    basketHandler(user.uid, itemId)
  }

const getSelected = (e) => {
  if(['XS','S','M','L','XL','XXL'].includes(e)===false)
  return setSelectedColor(e)
}

  return (
    <div className={styles.product}>
      <div className={styles.product__left}>
        <div className={styles.product__left__img}>
          <Image src={selectedColor?.includes('select')==false? data?.data.images.filter(x=>x.color==selectedColor)[0]?.img:data?.data.images[0].img} />
        </div>
      </div>
      <div className={styles.product__right}>
        <div className={styles.product__right__wrapper}>
          <div className={styles.product__right__title}>
            <h1>{data?.data.name}</h1>
            <div className={styles.product__right__select}>
              <Select onGetSelected={getSelected} placeholder="Select a size" list={size} />
              <Select onGetSelected={getSelected} placeholder="This select will be colors" list={data?.data.colors} />
            </div>
          </div>
          <div className={styles.product__right__desc}>
            <Text>
              {data?.data.description}
            </Text>
          </div>
          <div className={styles.product__right__cta}>
            <Text fontSize="25px" fontWeight="700" marginRight="2rem">
             {data?.data.price + " TRY"}
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
