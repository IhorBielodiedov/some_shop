import { useEffect, useState } from "react";
import { PRODUCTS, TELEGRAM } from "../../utils/constants";
import { Product } from "../../utils/types";
import { useNavigate, useParams } from "react-router-dom";
import Categories from "../../components/Categories";
import LikeButton from "../../UI/LikeButton";
import styles from "./productPage.module.scss";
import GradientButton from "../../UI/GradientButton";
import MarketplaceButton from "../../components/MarketplaceButton";
import ozon from "../../assets/img/ozon.png";
import Panel from "../../UI/Panel/intex";
import MenuSVG from "../../UI/icons/MenuSVG";
import StarSVG from "../../UI/icons/StarSVG";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    if (id) {
      setProduct(PRODUCTS[parseInt(id) - 1]);
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
        <div className={styles.container}>
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
            </div>
            <LikeButton />
          </div>
          <Categories list={product.colors} wrap />
          <p className={styles.propsTitle}>Купить на маркетплейсах:</p>
          <div className={styles.marketWrapper}>
            <MarketplaceButton img={ozon} title="OZON" />
            <MarketplaceButton img={ozon} title="OZON" />
          </div>
          <div className={styles.properties}>
            <p className={styles.propsDesc}>
              Умная колонка Яндекс Станция 2 с Алисой на YaGPT, 30 Вт. Умная
              колонка второго поколения — новый дизайн, звук, центр управления
              умным домом и Алиса.
            </p>
          </div>
          <Panel
            title="Характеристики"
            color="var(--main-text-color)"
            icon={<MenuSVG color={"var(--main-button-color)"} />}
          />
          <Panel
            title="Отзывы"
            color="var(--main-text-color)"
            withBottom
            icon={<StarSVG color={"var(--main-button-color)"} />}
            additionalText={"150 отзывов"}
          />
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
