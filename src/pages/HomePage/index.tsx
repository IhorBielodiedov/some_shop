import banner from "../../assets/img/banner.png";
import alise from "../../assets/img/alise.png";
import tv from "../../assets/img/tv.png";
import smartlamp from "../../assets/img/smartLamp.png";
import station from "../../assets/img/duoMax.png";
import star from "../../assets/img/star.png";
import aliseLogo from "../../assets/img/aliseLogo.png";
import promo1 from "../../assets/img/promo.png";
import promo2 from "../../assets/img/promo2.png";
import promo3 from "../../assets/img/promo3.png";
import promo4 from "../../assets/img/promo4.png";
import alise2 from "../../assets/img/alise2.png";
import ProductCardDetailed from "../../components/ProductCardDetailed";
import { TELEGRAM } from "../../utils/constants";
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
const HomePage = () => {
  // let reactSwipeEl;
  useEffect(() => {
    TELEGRAM.BackButton.hide();
  }, []);
  return (
    <div className={styles.container}>
      <Swiper slidesPerView={"auto"} spaceBetween={16} loop={true}>
        <SwiperSlide>
          <img className={styles.banner} src={banner} alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.banner} src={banner} alt="banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.banner} src={banner} alt="banner" />
        </SwiperSlide>
      </Swiper>
      <section>
        <h1 className={styles.title}>Каталог</h1>
        <div className={styles.categories}>
          <div className={styles.categoriesRow}>
            <BigImgCard
              title={"Яндекс Станции"}
              img={alise}
              link={"/products"}
            />
            <BigImgCard title={"Телевизоры"} img={tv} link={"/products"} />
            <BigImgCard
              title={"Станции Дуо макс"}
              img={station}
              link={"/products"}
            />
          </div>
          <div className={styles.categoriesRow}>
            <BigImgCard
              title={"Умный дом"}
              img={smartlamp}
              link={"/products"}
            />
            <BigImgCard title={"Новинки"} img={star} link={"/products"} />
            <BigImgCard
              title={"Весь каталог устройств"}
              img={banner}
              withImg={false}
              link={"/products"}
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
            <PromoCard img={promo1} title="Быстрые команды" />
            <PromoCard img={promo2} title="Что нового" />
          </div>
          <div className={styles.categoriesRow} style={{ gap: "16px" }}>
            <PromoCard img={promo3} title="Новые функции" />
            <PromoCard img={promo4} title="Диодная лента" />
          </div>
        </div>
      </section>
      <ProductCardDetailed
        product={{
          id: 1,
          name: "Станция 2",
          description: "Яндекс станция",
          price: 13497,
          art: 1111,
          properties: "",
          colors: ["red"],
          img: alise2,
        }}
      />
      <section>
        <Panel title="Доставка" color="var(--main-button-color)" />
        <Panel title="Оплата" color="var(--main-button-color)" />
        <Panel title="Гарантия" color="var(--main-button-color)" />
        <Panel
          title="Пользовательское соглашение"
          color="var(--main-button-color)"
          withBottom
        />
      </section>
    </div>
  );
};
export default HomePage;
