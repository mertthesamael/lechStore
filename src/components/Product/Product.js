import { Box, Image, Flex, Text, Button } from "@chakra-ui/react";
import Select from "../Select/Select";
import styles from "./item.module.scss";

const Product = () => {
  const size = ["XS", "S", "M", "L", "XL", "XXL"];
  return (
    <div className={styles.product}>
      <div className={styles.product__left}>
        <div className={styles.product__left__img}>
          <Image src="https://cdn.dsmcdn.com/mnresize/-/-//ty572/product/media/images/20221018/22/196846967/600147139/1/1_org_thumb.jpg" />
        </div>
      </div>
      <div className={styles.product__right}>
        <div className={styles.product__right__wrapper}>
          <div className={styles.product__right__title}>
            <h1>Çakma Adidas Aşurfman</h1>
            <div className={styles.product__right__select}>
              <Select placeholder="Select a size" list={size} />
              <Select placeholder="This select will be colors" list={size} />
            </div>
          </div>
          <div className={styles.product__right__desc}>
            <Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Donec quam felis,
            </Text>
          </div>
          <div className={styles.product__right__cta}>
            <Text fontSize="25px" fontWeight="700" marginRight="2rem">
              0.5ETH
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
