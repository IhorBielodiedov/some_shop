import { useEffect, useState } from "react";
import { PRODUCTS, TELEGRAM } from "../../utils/constants";
import { Product } from "../../utils/types";
import { useNavigate, useParams } from "react-router-dom";
import Categories from "../../components/Categories";
import Filter from "../../components/Filter";
import LikeButton from "../../UI/LikeButton";
import ComparisonPanel from "../../components/ComparisonPanel";
import styles from "./productPage.module.scss";
import GradientButton from "../../UI/GradientButton";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    if (id) {
      setProduct(PRODUCTS[parseInt(id)]);
    }
  }, [id]);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    if (window.history.length > 1) {
      TELEGRAM.BackButton.show();
      TELEGRAM.BackButton.onClick(goBack);
    } else {
      TELEGRAM.BackButton.hide();
    }
    return () => {
      TELEGRAM.BackButton.offClick(goBack);
    };
  }, []);

  return (
    <>
      {product && (
        <div>
          <div className={styles.img}>
            <img src={product.img} alt="product" />
            <div className={styles.colors}>
              {product.colors.map((item) => (
                <button className={styles.color} />
              ))}
            </div>
          </div>
          <div className={styles.text}>
            <div className={styles.details}>
              <p className={styles.name}>{product.name}</p>
              <p className={styles.description}>{product.properties}</p>
              <p className={styles.art}>арт. {product.art}</p>
            </div>
            <LikeButton />
          </div>
          <Categories list={product.colors} wrap />
          <ComparisonPanel />
          <div className={styles.properties}>
            <p className={styles.propsTitle}>Описание</p>
            <p className={styles.propsDesc}>
              {/* {product.description} */}
              Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
              сгенерировать несколько абзацев более осмысленного текста и
              нетоль...
              <span className={styles.showMore}>Показать еще</span>
            </p>
          </div>
          <div className={styles.footer}>
            <div>
              <p className={styles.fullPrice}>{product.price}р.</p>
              <p className={styles.totalPrice}>{product.price}р.</p>
            </div>
            <div style={{ width: "233px" }}>
              <GradientButton
                title="КУПИТЬ"
                titleSize={15}
                height={49}
                titleAlign="center"
                paddingTop={15}
                paddingBottom={15}
                gradientDirection="diagonal-right"
                borderRadius={13}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default ProductPage;
