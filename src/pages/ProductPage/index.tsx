import { useEffect, useState } from "react";
import { PRODUCTS, REVIEWS, TELEGRAM } from "../../utils/constants";
import { Product } from "../../utils/types";
import { useNavigate, useParams } from "react-router-dom";
import Categories from "../../components/Categories";
import LikeButton from "../../UI/LikeButton";
import styles from "./productPage.module.scss";
import GradientButton from "../../UI/GradientButton";
import MarketplaceButton from "../../components/MarketplaceButton";
import ozon from "../../assets/img/ozon.png";
import yandex from "../../assets/img/yandex.png";
import Panel from "../../UI/Panel/intex";
import MenuSVG from "../../UI/icons/MenuSVG";
import StarSVG from "../../UI/icons/StarSVG";
import CategoryButton from "../../UI/CategoryButton";
import SidePicker from "../../UI/SidePicker";
import Specification from "../../components/Specification";
import Review from "../../components/Review";

const ProductPage = () => {
  const { id, variantId } = useParams();
  const [product, setProduct] = useState<Product>();
  const [variant, setVariant] = useState(
    variantId !== undefined ? +variantId : 0
  );
  const [side, setSide] = useState(0);
  const colors = product?.variants.map((item) => item.color);
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
    window.scrollTo({ top: 0 });
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
            <img src={product.variants[variant].photos[side]} alt="product" />
            <div className={styles.colors}>
              {product.variants[variant].photos.map((item, index) => (
                <SidePicker
                  img={item}
                  active={side === index}
                  onClick={() => setSide(index)}
                />
              ))}
            </div>
          </div>
          <div className={styles.text}>
            <div className={styles.details}>
              <p className={styles.name}>{product.name}</p>
              <p className={styles.description}>
                Умная колонка Яндекс станция Макс с Алисой, антрацит, 65B
              </p>
            </div>
            <LikeButton />
          </div>
          <div className={styles.categories}>
            {product.variants.map((item) => (
              <CategoryButton
                title={item.color}
                key={item.id}
                active={variant === item.id}
                onClick={() => {
                  setVariant(item.id);
                  setSide(0);
                }}
              />
            ))}
          </div>
          <p className={styles.propsTitle}>Купить на маркетплейсах:</p>
          <div className={styles.marketWrapper}>
            <MarketplaceButton img={ozon} title="OZON" />
            <MarketplaceButton img={yandex} title="Яндекс маркет" />
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
          >
            <div className={styles.specifications}>
              {product.variants[variant].specifications.map((item) => (
                <Specification specification={item} />
              ))}
            </div>
          </Panel>
          <Panel
            title="Отзывы"
            color="var(--main-text-color)"
            withBottom
            icon={<StarSVG color={"var(--main-button-color)"} />}
            additionalText={"150 оценок"}
          >
            <div className={styles.reviews}>
              {REVIEWS.map((item) => (
                <Review review={item} />
              ))}
            </div>
          </Panel>
          <div className={styles.footer}>
            <div>
              <p className={styles.fullPrice}>
                {product.variants[variant].price}р.
              </p>
              <p className={styles.totalPrice}>
                {product.variants[variant].price}р.
              </p>
            </div>
            <div style={{ width: "233px" }}>
              <GradientButton
                title="В КОРЗИНУ"
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
