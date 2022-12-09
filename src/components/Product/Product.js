import { Image, Text, Button } from "@chakra-ui/react";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firestore";
import Select from "../Select/Select";
import styles from "./item.module.scss";

const Product = ({itemId}) => {
  const size = ["XS", "S", "M", "L", "XL", "XXL"];
  const [item, setItem] = useState()
  
  const [selectedColor, setSelectedColor] = useState()

const getItem = async () => {

    const docRef = doc(db, "Products", itemId)
    
    const result = await getDoc(docRef)
    setItem(result.data())
    
}

useEffect(() => {
getItem()
},[])
const getSelected = (e) => {
  if(['XS','S','M','L','XL','XXL'].includes(e)===false)
  return setSelectedColor(e)
}

  return (
    <div className={styles.product}>
      <div className={styles.product__left}>
        <div className={styles.product__left__img}>
          <Image src={selectedColor?.includes('select')==false? item?.images.filter(x=>x.color==selectedColor)[0]?.img:item?.images[0].img} />
        </div>
      </div>
      <div className={styles.product__right}>
        <div className={styles.product__right__wrapper}>
          <div className={styles.product__right__title}>
            <h1>{item?.name}</h1>
            <div className={styles.product__right__select}>
              <Select onGetSelected={getSelected} placeholder="Select a size" list={size} />
              <Select onGetSelected={getSelected} placeholder="This select will be colors" list={item?.colors} />
            </div>
          </div>
          <div className={styles.product__right__desc}>
            <Text>
              {item?.description}
            </Text>
          </div>
          <div className={styles.product__right__cta}>
            <Text fontSize="25px" fontWeight="700" marginRight="2rem">
             {item?.price + " TRY"}
            </Text>
            <Button
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
