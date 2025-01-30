import "swiper/swiper-bundle.css";
import "swiper/css";
import "./swiper.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import { PRODUCTS, REVIEWS, TELEGRAM } from "../../utils/constants";
import { Product } from "../../utils/types";
import { useNavigate, useParams } from "react-router-dom";
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

import { Swiper as SwiperCore } from "swiper/types";
import { useCartStore } from "../../stores/cartStore";
import { useProductsStore } from "../../stores/useProductsStore";
import { toast } from "react-toastify";
import * as api from "../../api";

const ProductPage = () => {
  const toggleFavorite = useProductsStore((state: any) => state.toggleFavorite);
  const getCurrentProduct = useProductsStore(
    (state) => state.getCurrentProduct
  );
  const currentProduct = useProductsStore((state: any) => state.currentProduct);
  const currentProductLoading = useProductsStore(
    (state) => state.currentProductLoading
  );
  const favouriteProducts = useProductsStore(
    (state: any) => state.favouriteProducts
  );
  const addProduct = useCartStore((state: any) => state.addProduct);
  const [product, setProduct] = useState<Product | undefined>();
  const { id, variantId } = useParams();
  const [variantIndex, setVariantIndex] = useState(0);

  const [side, setSide] = useState(0);
  const swiperRef = useRef<SwiperCore | null>(null);

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (product) {
      if (Number(variantId) !== 0) {
        setVariantIndex(
          product.variants.findIndex(
            (variant) => variant.id === Number(variantId)
          )
        );
      } else {
        setVariantIndex(0);
      }
    }
  }, [product]);

  useEffect(() => {
    if (id) {
      getCurrentProduct(+id);
    }
  }, [id]);

  useEffect(() => {
    setProduct(currentProduct);
  }, [currentProduct]);

  useEffect(() => {
    const currentProductId = product?.id;
    const currentVariantId = product?.variants[variantIndex]?.id;
    const favoriteExists = favouriteProducts
      ? favouriteProducts.some(
          (item: any) =>
            item.info.id === currentProductId &&
            item.info.variant_id === currentVariantId
        )
      : false;
    setIsFavorite(favoriteExists);
  }, [favouriteProducts, product, variantIndex]);

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

  const handleSlideChange = (swiper: any) => {
    setSide(swiper.activeIndex);
  };

  const goToSlide = (index: number) => {
    setSide(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <>
      {currentProductLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {product && (
            <div className={styles.container}>
              <div className={styles.img}>
                <Swiper
                  className={"swiperProduct"}
                  onSlideChange={handleSlideChange}
                  onSwiper={(swiper: SwiperCore) =>
                    (swiperRef.current = swiper)
                  }
                  slidesPerView={1}
                  spaceBetween={0}
                  centeredSlides={false}
                >
                  {product.variants[variantIndex]?.photos?.map(
                    (slide, index) => (
                      <SwiperSlide key={index}>
                        <div className={styles.picture}>
                          <img src={slide} alt={slide} />
                        </div>
                      </SwiperSlide>
                    )
                  )}
                </Swiper>

                <div className={styles.colors}>
                  {product.variants[variantIndex]?.photos?.map(
                    (item, index) => (
                      <SidePicker
                        key={index}
                        img={item}
                        active={side === index}
                        onClick={() => goToSlide(index)}
                      />
                    )
                  )}
                </div>
              </div>
              <div className={styles.text}>
                <div className={styles.details}>
                  <p className={styles.name}>{product.name}</p>
                  <p className={styles.description}>
                    {product.variants[variantIndex]?.vendor_code +
                      ", " +
                      product.variants[variantIndex]?.color.toLowerCase()}
                  </p>
                </div>
                <LikeButton
                  isFavorite={isFavorite}
                  onClick={async () => {
                    if (product && product.variants[variantIndex]) {
                      if (product.variants[variantIndex]?.in_favorite) {
                        // await api.deleteFavorite(6);
                        setIsFavorite(false);
                        toggleFavorite(false, variantIndex);
                      } else {
                        // await api.createFavorite(
                        //   product.variants[variantIndex]?.id,
                        //   1
                        // );
                        toggleFavorite(true, variantIndex);
                        setIsFavorite(true);
                      }
                    }
                  }}
                />
              </div>
              <div className={styles.categories}>
                {product.variants.map((item, index) => (
                  <CategoryButton
                    title={item.color}
                    key={index}
                    active={variantIndex === index}
                    onClick={() => {
                      setVariantIndex(index);
                      setSide(0);
                    }}
                  />
                ))}
              </div>
              {product.variants[variantIndex]?.external_shops && (
                <>
                  <p className={styles.propsTitle}>Купить на маркетплейсах:</p>
                  <div className={styles.marketWrapper}>
                    <MarketplaceButton img={ozon} title="OZON" />
                    <MarketplaceButton img={yandex} title="Яндекс маркет" />
                  </div>
                </>
              )}
              <div className={styles.properties}>
                <p className={styles.propsDesc}>
                  {product.variants[variantIndex]?.description}
                </p>
              </div>
              <Panel
                title="Характеристики"
                color="var(--main-text-color)"
                icon={<MenuSVG color={"var(--main-button-color)"} />}
              >
                <div className={styles.specifications}>
                  {product.variants[variantIndex]?.specifications?.map(
                    (item, index) => (
                      <Specification specification={item} key={index} />
                    )
                  )}
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
                  {REVIEWS.map((item, index) => (
                    <Review review={item} key={index} />
                  ))}
                </div>
              </Panel>
              <div className={styles.footer}>
                <div className={styles.priceBlock}>
                  {product.discount !== 0 && (
                    <p className={styles.fullPrice}>
                      {product.variants[variantIndex]?.price}р.
                    </p>
                  )}
                  <p className={styles.totalPrice}>
                    {product.variants[variantIndex]?.price - product.discount}р.
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
                    onClick={() => {
                      if (product && product.variants[variantIndex]) {
                        addProduct(product, product.variants[variantIndex]);
                        toast.success("Добавлено в корзину");
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ProductPage;
