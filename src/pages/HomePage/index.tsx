import banner from "../../assets/img/banner.png";
import alise from "../../assets/img/alise.png";
import tv from "../../assets/img/tv.png";
import smartlamp from "../../assets/img/smartLamp.png";
import station from "../../assets/img/duoMax.png";
import star from "../../assets/img/star.svg";
import aliseLogo from "../../assets/img/aliseLogo.png";
import promo1 from "../../assets/img/promo.png";
import promo2 from "../../assets/img/promo2.png";
import promo3 from "../../assets/img/promo3.png";
import promo4 from "../../assets/img/promo4.png";
import ProductCardDetailed from "../../components/ProductCardDetailed";
import { TELEGRAM } from "../../utils/constants";
import styles from "./homePage.module.scss";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./swiper.scss";
import BigImgCard from "../../UI/BigImgCard";
import BigBanner from "../../UI/BigBanner";
import PromoCard from "../../UI/PromoCard";
import Panel from "../../UI/Panel/intex";
import { useProductsStore } from "../../stores/useProductsStore";
import { stories1, stories2, stories3, stories4 } from "./testData";
import { Link, useNavigate } from "react-router-dom";
import { Category } from "../../utils/types";
import * as api from "../../api";
import { toast } from "react-toastify";

const HomePage = () => {
  const products = useProductsStore((state) => state.products);
  const getProducts = useProductsStore((state) => state.getProducts);
  const categories = useProductsStore((state) => state.categories);
  const setActiveCategory = useProductsStore(
    (state) => state.setActiveCategory
  );
  const navigate = useNavigate();
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    TELEGRAM.BackButton.hide();
    getProducts(1);
  }, []);

  const chunkCategories = (categories: Category[], size: number) => {
    if (!categories) return [];

    const result = [];
    for (let i = 0; i < categories.length; i += size) {
      result.push(categories.slice(i, i + size));
    }
    return result;
  };

  const categoriesRows = chunkCategories(categories, 3);

  const getBanners = async () => {
    // Set loading to true before starting the fetch
    setLoading(true);

    try {
      const response = await api.getBanners();

      // Update the state with the new banners data
      setBanners(response.data.banners);
    } catch (error) {
      toast.error(error);
    } finally {
      // End the loading state after all photos are processed
      setLoading(false);
    }
  };

  useEffect(() => {
    getBanners();
  }, []);

  return (
    <div className={styles.container}>
      {loading && <div className={styles.bannerPlaceholder}></div>}
      {!loading && banners.length > 0 && (
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={16}
          loop={true}
          className={`bannerSwiper`}
        >
          {banners.map((item) => (
            <SwiperSlide>
              <Link to={"/products"}>
                <img className={styles.banner} src={item.photo} alt="banner" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <section>
        <div className={styles.categories}>
          {categoriesRows.map((row, index) => (
            <div key={index} className={styles.categoriesRow}>
              {row.map((category, index) => (
                <BigImgCard
                  key={category.id}
                  title={category.name}
                  img={category.photo || undefined}
                  link="/products"
                  onClick={() => setActiveCategory(category)}
                />
              ))}
            </div>
          ))}
        </div>
      </section>
      <BigBanner
        img={aliseLogo}
        title="Привет, это Алиса нового поколения"
        text="Теперь я с нейросетью YandexGPT. Она позволила улучшить мои сценарии работы, а это значит, что я умею ещё больше, чем раньше."
      />
      <section>
        <div className={styles.categories} style={{ gap: "16px" }}>
          <div className={styles.categoriesRow} style={{ gap: "16px" }}>
            <PromoCard img={promo1} title="Быстрые команды" slider={stories1} />
            <PromoCard img={promo2} title="Что нового" slider={stories2} />
          </div>
          <div className={styles.categoriesRow} style={{ gap: "16px" }}>
            <PromoCard img={promo3} title="Новые функции" slider={stories3} />
            <PromoCard img={promo4} title="Диодная лента" slider={stories4} />
          </div>
        </div>
      </section>
      {products && products.length > 0 && (
        <ProductCardDetailed product={products[0]} />
      )}
      <section>
        <Panel
          title="Доставка"
          color="var(--main-button-color)"
          onClick={() => navigate("/delivery")}
        />
        <Panel
          title="Оплата"
          color="var(--main-button-color)"
          onClick={() => navigate("/paymentInfo")}
        />
        <Panel
          title="Возврат"
          color="var(--main-button-color)"
          onClick={() => navigate("/refound")}
        />
        <Panel
          title="Пользовательское соглашение"
          color="var(--main-button-color)"
          withBottom
          onClick={() => navigate("/userAgreement")}
        />
      </section>
    </div>
  );
};
export default HomePage;
