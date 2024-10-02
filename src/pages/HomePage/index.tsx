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
import { CATEGORIES, PRODUCTS, TELEGRAM } from "../../utils/constants";
import styles from "./homePage.module.scss";
import { useEffect } from "react";
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

const HomePage = () => {
  const setActiveCategory = useProductsStore(
    (state) => state.setActiveCategory
  );
  const navigate = useNavigate();
  useEffect(() => {
    TELEGRAM.BackButton.hide();
  }, []);
  return (
    <div className={styles.container}>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={16}
        loop={true}
        className={`bannerSwiper`}
      >
        {[1, 2, 3].map((item) => (
          <SwiperSlide>
            <Link to={"/products"}>
              <img className={styles.banner} src={banner} alt="banner" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <section>
        <div className={styles.categories}>
          <div className={styles.categoriesRow}>
            <BigImgCard
              title={"Яндекс Станции"}
              img={alise}
              link={"/products"}
              onClick={() => setActiveCategory(CATEGORIES[3])}
            />
            <BigImgCard
              title={"Телевизоры"}
              img={tv}
              link={"/products"}
              onClick={() => setActiveCategory(CATEGORIES[2])}
            />
            <BigImgCard
              title={"Станции Дуо макс"}
              img={station}
              link={"/products"}
              onClick={() => setActiveCategory(CATEGORIES[4])}
            />
          </div>
          <div className={styles.categoriesRow}>
            <BigImgCard
              title={"Умный дом"}
              img={smartlamp}
              link={"/products"}
              onClick={() => setActiveCategory(CATEGORIES[1])}
            />
            <BigImgCard
              title={"Новинки"}
              img={star}
              link={"/products"}
              onClick={() => setActiveCategory(CATEGORIES[5])}
            />
            <BigImgCard
              title={"Весь каталог устройств"}
              img={banner}
              withImg={false}
              link={"/products"}
              onClick={() => setActiveCategory(CATEGORIES[0])}
            />
          </div>
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
      <ProductCardDetailed product={PRODUCTS[0]} />
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
