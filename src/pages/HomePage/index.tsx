import { Link } from "react-router-dom";
import GradientButton from "../../UI/GradientButton";
import banner1 from "../../assets/img/banner1.png";
import banner2 from "../../assets/img/banner2.png";
import ProductCardDetailed from "../../components/ProductCardDetailed";
import { PRODUCTS, TELEGRAM } from "../../utils/constants";
import styles from "./homePage.module.scss";
import { useEffect } from "react";
import img from "../../assets/img/buttonImg.png";
import ReactSwipe from "react-swipe";

const HomePage = () => {
  let reactSwipeEl;
  useEffect(() => {
    TELEGRAM.BackButton.hide();
  }, []);
  return (
    <div className={styles.container}>
      <ReactSwipe
        swipeOptions={{ continuous: true, auto: 3000, speed: 800 }}
        ref={(el) => (reactSwipeEl = el)}
      >
        <img className={styles.banner} src={banner1} alt="banner" />
        <img className={styles.banner} src={banner2} alt="banner" />
        <img className={styles.banner} src={banner1} alt="banner" />
        <img className={styles.banner} src={banner2} alt="banner" />
        <img className={styles.banner} src={banner1} alt="banner" />
        <img className={styles.banner} src={banner2} alt="banner" />
      </ReactSwipe>
      <div className={styles.buttons}>
        <Link to="/products">
          <GradientButton
            title="Станции Алисы"
            titleSize={14}
            height={84}
            titleAlign="right"
            paddingTop={37}
            paddingBottom={31}
            gradientDirection="horizontal"
            img={img}
          />
        </Link>
        <div className={styles.buttonRow}>
          <div style={{ width: "59%" }}>
            <Link to="/products">
              <GradientButton
                title="Станции Алисы"
                titleSize={14}
                height={77}
                titleAlign="right"
                paddingTop={37}
                paddingBottom={31}
                gradientDirection="diagonal-left"
                img={""}
              />
            </Link>
          </div>
          <div style={{ width: "41%" }}>
            <Link to="/products">
              <GradientButton
                title="ТВ"
                titleSize={14}
                height={77}
                titleAlign="right"
                paddingTop={37}
                paddingBottom={31}
                gradientDirection="diagonal-right"
                img={""}
              />
            </Link>
          </div>
        </div>
        <Link to="/products">
          <GradientButton
            title="Умный дом"
            titleSize={14}
            height={84}
            titleAlign="left"
            paddingTop={37}
            paddingBottom={31}
            gradientDirection="diagonal-right"
            img={""}
          />
        </Link>
      </div>
      <ProductCardDetailed product={PRODUCTS[0]} />
    </div>
  );
};
export default HomePage;
